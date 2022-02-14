import React from 'react';
import { Container, Divider, Header, List } from 'semantic-ui-react';

/** Render a static Privacy Policy page. */
class PrivacyPolicy extends React.Component {
  render() {
    return (
      <Container text>
        <Header as='h1'>Privacy Policy</Header>
        <p>
          FastPass and its organization (“FastPass-Devs”, “we,” or “us“) provides this privacy policy in order to share what type of information we collect,
          use, and share when you utilize our web application.  The details of this privacy policy apply to all services available in FastPass.
        </p>
        <Divider/>
        <Header as='h2'>What Data Does FastPass collect:</Header>
        <List ordered>
          <List.Item>
            <Header as="h3">Log-in account data -</Header>
            When setting up an account, you will be required to provide a valid email, first name, last name, as well as a password.
            This information is the bare minimum required in order to create an account and access the features of the application.
            The credentials provided will be used to access the account again in future visits. If this information is not provided, you will not be able to access FastPass and its services.
          </List.Item>
          <List.Item>
            <Header as="h3">Log-in credentials of other applications that you provide -</Header>
            Given the primary functionality of FastPass, users will be able to store log-in information in our databases that are associated with other applications not affiliated with our organization.
            Information that the user can provide is but is not limited to username, email address, and password.
          </List.Item>
          <List.Item>
            <Header as="h3">Automatically generated data -</Header>
            We will collect data that is automatically generated that includes timestamps of when an account has been logged in and how many attempts have been made to access it.
            This will allow us to monitor for any suspicious activity in order to secure and protect your data.
          </List.Item>
        </List>
        <Divider/>
        <Header as='h2'>Why FastPass Collects Data:</Header>
        <p>FastPass collects data mentioned above for the reasons stated below:</p>
        <List bulleted>
          <List.Item>To provide and maintain FastPass and its services.</List.Item>
          <List.Item>To protect registered users and their data.</List.Item>
          <List.Item>Personalize the application to present the data that you provide.</List.Item>
        </List>
        <p>Most of the information collected will entirely be private and will not be visible to other users within the services including those with administrative authority.
          Information such as the account password and log-in credentials for other sites will not be publicly visible.
          Exceptions, however, may include the email tied to the account as well as automatically generated data which will only be presented to admin users for security reasons.
        </p>
        <p>With the data that is demanded of FastPass’ services, we do not sell the personal information that you provide, nor will we share it unless there is a situation that falls under the reasons listed below:</p>
        <List bulleted>
          <List.Item>
            <b>To comply with the law -</b> We may share information that is in accordance with or required by law.
          </List.Item>
          <List.Item>
            <b>For emergency reasons- </b> We may share information with potential 3rd parties if necessary to prevent potential harm to individuals.
          </List.Item>
        </List>
        <Divider/>
        <Header as='h2'>How FastPass Protects Your Information:</Header>
        <List ordered>
          <List.Item>
            <Header as="h3">Editing your information -</Header>
            You have the ability to edit and modify information which includes log-in account data and credentials to other sites that you have saved in the FastPass service in order to give you control on what you want to share or provide.
          </List.Item>
          <List.Item>
            <Header as="h3">Deleting your information -</Header>
            You have the ability to delete your account any time when you longer want to use FastPass and its services.
            In doing so, we will delete all information associated with your account such as your account credentials and any log-in data that you previously saved.
          </List.Item>
          <List.Item>
            <Header as="h3">Account lock-out -</Header>
            As a defense mechanism against potential threats, your account will be locked-out if the incorrect account credentials are supplied a certain number of times.
            Once locked-out, you will not able to access the account and its associated information.
          </List.Item>
        </List>
        <Divider/>
        <Header as="h2">Changes To The Privacy Policy:</Header>
        <p>The details of this privacy policy may change and update over time in order to reflect new handling of information associated with the services of FastPass.
          If changes are made to this page, we will notify you within the landing page of the site.  When new changes are made, you agree to follow the updated Privacy Policy page.</p>
      </Container>
    );
  }
}

export default PrivacyPolicy;
