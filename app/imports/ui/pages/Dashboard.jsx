import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Segment, Button, Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { ExportToCsv } from 'export-to-csv';
import { Stuffs } from '../../api/stuff/Stuff';
import StuffItem from '../components/StuffItem';

const options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Passwords List',
  useTextFile: false,
  filename: 'PasswordsList',
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Dashboard extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  downloadData() {
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.props.stuffs);
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container style={{ position: "static"}}>
        <Grid>
          <Grid.Row>
            <Header as="h5" style={{ opacity: '50%' }} textAlign="left"><FiHome/> / {this.props.currentUser} / Dashboard</Header>
          </Grid.Row>
          <Grid.Row>
            <Header as="h3" textAlign="left">Dashboard</Header>
          </Grid.Row>
        </Grid>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Segment textAlign="right">Passwords
                <Header>{this.props.numStuffs}</Header>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment textAlign="right">Social
                <Header>{this.props.numSocial}</Header>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment textAlign="right">Retail
                <Header>{this.props.numRetail}</Header>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment textAlign="right">Entertainment
                <Header>{this.props.numEntertainment}</Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Header as="h3" style={{ paddingTop: '10px' }} textAlign="left">Password List</Header>
            <Link to="/add"><Button style={{ marginLeft: '10px' }} color="black">Add Button</Button></Link>
            <Link to="#"><Button onClick={() => { this.downloadData(); }} style={{ marginLeft: '10px' }} color="blue">Download List</Button></Link>
          </Grid.Row>
          <Grid.Row>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Site</Table.HeaderCell>
                  <Table.HeaderCell>Username</Table.HeaderCell>
                  <Table.HeaderCell>Password</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>
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
  numStuffs: PropTypes.number,
  numSocial: PropTypes.number,
  numEntertainment: PropTypes.number,
  numRetail: PropTypes.number,

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

  const numStuffs = Stuffs.collection.find({}).count();

  const numSocial = Stuffs.collection.find({ category: 'Social' }).count();

  const numRetail = Stuffs.collection.find({ category: 'Retail' }).count();

  const numEntertainment = Stuffs.collection.find({ category: 'Entertainment' }).count();

  return {
    stuffs,
    numStuffs,
    ready,
    currentUser,
    numSocial,
    numRetail,
    numEntertainment,
  };
})(Dashboard);
