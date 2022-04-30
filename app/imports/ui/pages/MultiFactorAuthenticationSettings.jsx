import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Button, Header, Image } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Buffer } from 'buffer';
import { Accounts } from 'meteor/accounts-base';

/** Page to adjust Multi-factor Authentication Settings. */
class MultiFactorAuthenticationSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show2fa: true };
    this.qrCode = null;
  }

  activate2fa = () => {
    Accounts.generate2faActivationQrCode(
      'meteor-application-template-react',
      (err, result) => {
        if (err) {
          console.error('Error retrieving QR code', err);
          return;
        }
        // eslint-disable-next-line no-unused-vars
        const { svg, secret, uri } = result;
        console.log(Buffer.from(svg).toString('base64'));
        this.setState({ qrCode: Buffer.from(svg).toString('base64') });
      },
    );
  }

  // Render page.
  render() {
    return (
      <Container>
        <Header as="h1">Multi-factor Authentication Settings</Header>
        <Button onClick={this.activate2fa}> Generate QR code</Button>
        {console.log(this.qrCode)}
        <Image width="20" src={`data:images/svg+xml;base64,${this.qrCode}`}/>
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
