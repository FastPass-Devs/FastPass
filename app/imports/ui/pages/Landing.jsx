import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid, Form, Image, Message, Segment, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';
// import NavBar from '../components/NavBar';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
  }

  /* Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /* Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { email, password } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/add' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
      <div style={{ paddingTop: '40px', position: 'static' }} className= "landing">
        <Grid style={{ paddingTop: '40px' }} id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={4}>
            <Image verticalAlign='top' size='medium' src="/images/myOtherLock.png" />

          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h2" textAlign="center">
              Register your account
            </Header>
            <Form onSubmit={this.submit}>
              <Segment stacked>
                <Form.Input
                  label="Email"
                  id="signup-form-email"
                  icon="user"
                  iconPosition="left"
                  name="email"
                  type="email"
                  placeholder="E-mail address"
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Password"
                  id="signup-form-password"
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />
                <p>Review our <a href='#/terms-of-service'>Terms of Service</a> & <a href='#/privacy-policy'>Privacy Policy</a></p>
                <Form.Button id="signup-form-submit" content="Submit"/>
              </Segment>
            </Form>
            <Message>
              Already have an account? Login <Link to="/signin">here</Link>
            </Message>
            {this.state.error === '' ? (
              ''
            ) : (
              <Message
                error
                header="Registration was not successful"
                content={this.state.error}
              />
            )}

          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Landing.propTypes = {
  location: PropTypes.object,
};

export default Landing;
