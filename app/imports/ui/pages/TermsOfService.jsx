import React from 'react';
import { Container, Divider, Header, List } from 'semantic-ui-react';

/** Render a static Terms of Service page.
 * TOS adapted from template (https://termly.io/resources/templates/terms-of-service-template/) */
class TermsOfService extends React.Component {
  render() {
    return (
      <Container text>
        <Header as='h1'>Terms of Service</Header>
        <p>Last Updated 4/11/2022</p>
        <p>
          These Terms of Service constitute a legally binding agreement made between you and FastPass-Devs (“we”, “us”, or “our) concerning to use of the FastPass site.
        </p>
        <p>
          You agree that by accessing the FastPass site, you have read, understood, and agree to be bound by all of these Terms of Service.  If you do not agree with these Terms of Service then you may not use the contents and features of the site.
        </p>
        <p>
          It is your responsibility to review these Terms of Service carefully to stay informed of updates as any new additions will mean that you will hereby agree to them upon continued use of the site.
          We will inform you of any updates based on the “Last Updated” date.
        </p>
        <Divider/>
        <Header as='h2'>User Representation</Header>
        <p>By using the site you that:</p>
        <List bulleted>
          <List.Item>You have the legal capacity to comply with these Terms of Service.</List.Item>
          <List.Item>You agree to comply with these Terms of Service.</List.Item>
          <List.Item>All account information (such as your email) is true, accurate, and is belonging to you.</List.Item>
          <List.Item>You will not access the FastPass site with automated means (ex. bots, scripts, etc).</List.Item>
          <List.Item>You will not use the services of the FastPass site for any illegal or unauthorized activity.</List.Item>
        </List>
        <Divider/>
        <Header as='h2'>User Registration</Header>
        <p>
          To use the services offered by FastPass, you will be required to register for an account with a valid email address.
          You agree to keep your password confidential which includes your account password as well as saved passwords utilized by our services.
          You will be responsible for your account and password-related items.  We reserve the right to remove your account if we detect any malicious or inappropriate activities.
        </p>
        <p>By registering an account, you agree not to:</p>
        <List bulleted>
          <List.Item>Attempt collect data (such as emails or passwords) of other users.</List.Item>
          <List.Item>Attempt to bypass aspects of sites that are meant to be protected or restricted.</List.Item>
          <List.Item>Use the application in a manner that does not align with its intended purpose.
          </List.Item>
        </List>
        <Divider/>
        <Header as='h2'>Site Management</Header>
        <p>We reserve the right to: </p>
        <List bulleted>
          <List.Item>Monitor the site for any violations of the Terms of Service.</List.Item>
          <List.Item>
            Take legal action against anyone who, in our sole discretion, violates the law or the Terms of Service.</List.Item>
        </List>
        <Divider/>
        <Header as="h2">Privacy Policy</Header>
        <p>Please review our <a href="#/privacy-policy">Privacy Policy</a> which details your privacy rights.  By using the FastPass site, you agree to be bound by Privacy Policy.  Note that the FastPass site is hosted within the United States.</p>
        <Divider/>
        <Header as="h2">Term and Termination</Header>
        <p>These Terms of Service shall remain in full effect while you use the FastPass site.  If we terminate your account, you are not allowed from registering and creating a new account with the same email address.
          In addition to terminating your account, we reserve the right to take appropriate legal action if necessary.</p>
        <Divider/>
        <Header as="h2">Modification and Interruptions</Header>
        <p>
          We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice.
          However, we have no obligation to update any information on our site.  We also reserve the right to modify parts of the site at any time.
        </p>
        <p>We cannot ensure that the FastPass site will be available at all times and at any point we may experience hardware or software problems that may lead to interruptions or errors.</p>
        <p>You agree that we have no liability whatsoever for any loss or damage caused by the inability to access the site during potential downtime.</p>
        <Divider/>
        <Header as="h2">Corrections</Header>
        <p>There may be information on the FastPass site that may contain errors, inaccuracies, or omissions.  We reserve the right to correct any errors, inaccuracies, or omissions without notice.</p>
        <Header as="h2">User Data</Header>
        <p>You are solely responsible for all data that you transmit or relates to any activity you have performed within the site.
          You agree that we shall have no liability to you for any loss or corruption of any data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
        </p>
        <Divider/>
        <Header as="h2">Disclaimer</Header>
        <p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW,
          WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
          WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
          (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE,
          (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN,
          (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, AND/OR (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY.</p>
        <Divider/>
        <Header as="h2">Limitations of Liability</Header>
        <p>IN NO EVENT WILL WE OR OUR ORGANIZATION BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES,
          INCLUDING LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF OUR SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <Divider/>
        <Header as="h2">Indemnification</Header>
        <p>
          You agree to defend, indemnify and hold us harmless from and against any loss, damage, liability, claim, or demand arising out of: (1) use of the FastPass site;
          (2) breach of the Terms of Service; (3) any breach of your representations and warranties within the Terms of Service.
        </p>
      </Container>
    );
  }
}

export default TermsOfService;
