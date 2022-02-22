import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Segment, Button, Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { Stuffs } from '../../api/stuff/Stuff';
import StuffItem from '../components/StuffItem';
import {FiHome} from 'react-icons/fi';
/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Dashboard extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
          <Header as="h5" style={{opacity: "50%"}} textAlign="left"><FiHome/> / {this.props.currentUser} / Dashboard</Header>
          </Grid.Row>
          <Grid.Row>
          <Header as="h3" textAlign="left">Dashboard</Header>
          </Grid.Row>
        </Grid>
        <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment textAlign="right">Passwords
        <Header>1</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment textAlign="right">Social
        <Header>2</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment textAlign="right">Retail
        <Header>3</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment textAlign="right">Entertainment
        <Header>4</Header>
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Header as="h3" style={{paddingTop: '10px'}} textAlign="left">Password List</Header>
      <Link to="/add"><Button style={{marginLeft: '10px'}} color="black">Add Button</Button></Link>
    </Grid.Row>
    <Grid.Row>
    <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Condition</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff} />)}
          </Table.Body>
        </Table>
    </Grid.Row>
    </Grid>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
Dashboard.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const currentUser = Meteor.user() ? Meteor.user().username : '';

  const stuffs = Stuffs.collection.find({}).fetch();
  return {
    stuffs,
    ready,
    currentUser,
  };
})(Dashboard);
