import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Button, Header, Image, Segment, Divider } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Buffer } from 'buffer';
import { Accounts } from 'meteor/accounts-base';

/** Page to adjust Multi-factor Authentication Settings. */
class MultiFactorAuthenticationSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show2fa: true, qrCode: null };
  }

  activate2fa = () => {
    Accounts.generate2faActivationQrCode(
      'UH-FastPass',
      (err, result) => {
        if (err) {
          console.error('Error retrieving QR code', err);
          return;
        }
        // eslint-disable-next-line no-unused-vars
        const { svg, secret, uri } = result;
        const something = Buffer.from(svg).toString('base64');
        console.log(something);
        this.setState({ qrCode: something });
      },
    );
  }

  // Render page.
  render() {
    return (
      <Container>
        <Header as="h1">Multi-factor Authentication Settings</Header>
        <Segment>
          <Header as="h2">Want to enable 2FA? Follow these steps:</Header>
          <Header as="h3">1. Get a QR code by clicking the button below and scan it in <b>Google Authenticator</b></Header>
          <Button onClick={this.activate2fa}> Generate QR code</Button>
          {(this.state.qrCode === null) ? '' :
            <Image size="medium" width="20" src={`data:image/svg+xml;base64,${this.state.qrCode}`}/>}
          <Divider/>
          <Header as="h3">2. Input your code here:</Header>
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
