import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className= "landing">
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <h1 className="ui red header">Fast</h1>
            <h1 className="ui red header">Pass</h1>
          </Grid.Column>
          <Grid.Column width={6}>
            <h5 className="ui red header">Sign In</h5>
            <input placeholder= "Email"/>
            <input placeholder= "Password"/>
            <Button type='submit'>Submit</Button>
            <h5 className="ui red header">Dont have an account? Sign Up</h5>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Landing;
