import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Button, Header, Image, Segment, Divider, Form, Icon } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { Buffer } from 'buffer';
import { Accounts } from 'meteor/accounts-base';

/** Page to adjust Multi-factor/2-Factor Authentication Settings. */
class MultiFactorAuthenticationSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show2fa: true, qrCode: null, code: '', status: '' };
    Accounts.has2faEnabled((error, isEnabled) => {
      if (error) {
        console.log(error);
      }
      this.setState({ status: isEnabled });

    });
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  submit = () => {
    const { code } = this.state;
    Accounts.enableUser2fa(code, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', '2FA Enabled!', 'success');
        Accounts.has2faEnabled((error1, isEnabled) => {
          if (error1) {
            console.log(error1);
          }
          this.setState({ status: isEnabled });

        });
      }
    });

  }

  activate2fa = () => {
    Accounts.generate2faActivationQrCode(
      'UH-FastPass',
      (err, result) => {
        if (err) {
          console.error('Error retrieving QR code', err);
          swal('Error', '2FA has already been activated!', 'error');
          return;
        }
        // eslint-disable-next-line no-unused-vars
        const { svg, secret, uri } = result;
        const img = Buffer.from(svg).toString('base64');
        this.setState({ qrCode: img });
      },
    );
  }

  disable2fa = () => {
    swal({
      text: 'Do you want to disable 2FA?',
      icon: 'info',
      buttons: true,
    }).then((confirmDisable) => {
      if (confirmDisable) {
        Accounts.disableUser2fa((error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', '2FA Disabled', 'success');
            Accounts.has2faEnabled((error1, isEnabled) => {
              if (error1) {
                console.log(error1);
              }
              this.setState({ status: isEnabled });

            });
          }
        });
      }
    });
  }

  // Render page.
  render() {
    return (
      <Container>
        <Header as="h1">Two-Factor Authentication Settings</Header>
        <Segment>
          <Header as="h3">2FA Status</Header>
          {this.state.status === true ?
            <Header as="h4"><Icon circular color="green" name="check circle"/>2FA Enabled!</Header> :
            <Header as="h4"><Icon circular color="orange" name="warning circle"/>2FA Not Enabled!</Header>}
        </Segment>
        <Segment>
          <Header as="h2">Enable 2FA:</Header>
          <Divider/>
          <Header as="h3">1. Get a QR code by clicking the button below and scan it in the
            <a href="https://support.google.com/accounts/answer/1066447?hl=en&co=GENIE.Platform%3DiOS#:~:text=On%20your%20new%20phone%2C%20tap,accounts%20from%20your%20old%20phone."> Google Authenticator </a> mobile app:</Header>
          <Button onClick={this.activate2fa}> Generate QR code</Button>
          {(this.state.qrCode === null) ? '' :
            <Image size="medium" width="20" src={`data:image/svg+xml;base64,${this.state.qrCode}`}/>}
          <Divider/>
          <Header as="h3">2. Input your code here:</Header>
          <Form onSubmit={this.submit}>
            <Form.Input
              label="Google Authenticator Code"
              id="code-input"
              icon="lock"
              iconPosition="left"
              name="code"
              type="code"
              placeholder="Enter code here"
              onChange={this.handleChange}
            />
            <Form.Button id="code-input-submit" content="Submit"/>
          </Form>
          <Divider/>
          <Header as="h3">3. Your account is now protected with 2FA! </Header>
          <Header as="h4">In the future, use the 2FA log-in and provide the Google Authenticator code along with your email and password.</Header>
        </Segment>
        <Segment>
          <Header as="h2">Disable 2FA:</Header>
          <Button color="red" onClick={this.disable2fa}><Icon name="close"/>Turn off 2FA</Button>
        </Segment>
      </Container>
    );
  }

}

// Require an array of Stuff documents in the props.
MultiFactorAuthenticationSettings.propTypes = {
  currentUser: PropTypes.string.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access current user.
  const currentUser = Meteor.user() ? Meteor.user().username : '';

  return {
    currentUser,
  };
})(MultiFactorAuthenticationSettings);
