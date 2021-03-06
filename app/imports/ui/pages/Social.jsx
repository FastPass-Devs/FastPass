import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Button, Container, Table, Header, Loader } from 'semantic-ui-react';
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
  title: 'Social Passwords List',
  useTextFile: false,
  filename: 'SocialPasswordsList',
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Social extends React.Component {

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
      <Container>
        <Grid>
          <Grid.Row>
            <Header as="h5" style={{ opacity: '50%' }} textAlign="left"><FiHome/> / {this.props.currentUser} / Dashboard</Header>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row>
            <Header as="h3" style={{ paddingTop: '10px' }} textAlign="left">Social Category: Password List</Header>
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
Social.propTypes = {
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

  const stuffs = Stuffs.collection.find({ category: 'Social' }).fetch();

  const numSocial = Stuffs.collection.find({ category: 'Social' }).count();

  return {
    stuffs,
    ready,
    currentUser,
    numSocial,
  };
})(Social);
