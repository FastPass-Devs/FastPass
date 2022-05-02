import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Container, Form, Grid, Header, Message, Segment, Tab } from 'semantic-ui-react';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
export default class Signin extends React.Component {

  // Initialize component state with properties for login and redirection.
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', token: '', error: '', redirectToReferer: false };
  }

  // Update the form controls each time the user interacts with them.
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  // Handle Signin submission using Meteor's account mechanism.
  submit = () => {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  // Handle Signin submission using Meteor's account mechanism.
  submit2fa = () => {
    const { email, password, token } = this.state;
    Meteor.loginWithPasswordAnd2faCode(email, password, token, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  // Render the signin form.
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/dashboard' } };
    // if correct authentication, redirect to page instead of login screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    const panes = [
      { menuItem: 'Signin', render: () => <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
                    Login to your account
          </Header>
          <Form onSubmit={this.submit}>
            <Segment stacked>
              <Form.Input
                label="Email"
                id="signin-form-email"
                icon="user"
                iconPosition="left"
                name="email"
                type="email"
                placeholder="E-mail address"
                onChange={this.handleChange}
              />
              <Form.Input
                label="Password"
                id="signin-form-password"
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />
              <Form.Button id="signin-form-submit" content="Submit"/>
            </Segment>
          </Form>
          <Message>
            <Link to="/signup">Click here to Register</Link>
          </Message>
          {this.state.error === '' ? (
            ''
          ) : (
            <Message
              error
              header="Login was not successful"
              content={this.state.error}
            />
          )}
        </Grid.Column>
      </Grid> },
      { menuItem: 'Signin w/2fa (if enabled)', render: () => <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
                    Login to your account with 2FA
          </Header>
          <Form onSubmit={this.submit2fa}>
            <Segment stacked>
              <Form.Input
                label="Email"
                id="signin-form-email"
                icon="user"
                iconPosition="left"
                name="email"
                type="email"
                placeholder="E-mail address"
                onChange={this.handleChange}
              />
              <Form.Input
                label="Password"
                id="signin-form-password"
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />
              <Form.Input
                label="2FA Code (From Google Authenticator)"
                id="signin2fa-form-token"
                icon="lock"
                iconPosition="left"
                name="token"
                placeholder="Code"
                type="token"
                onChange={this.handleChange}
              />
              <Form.Button id="signin-form-submit" content="Submit"/>
            </Segment>
          </Form>
          <Message>
            <Link to="/signup">Click here to Register</Link>
          </Message>
          {this.state.error === '' ? (
            ''
          ) : (
            <Message
              error
              header="Login was not successful"
              content={this.state.error}
            />
          )}
        </Grid.Column>
      </Grid> },
    ];
    // Otherwise return the Login form.
    return (
      <Container id="signin-page">
        <Tab panes={panes}/>
      </Container>
    );
  }
}

// Ensure that the React Router location object is available in case we need to redirect.
Signin.propTypes = {
  location: PropTypes.object,
};
