import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {

  copy() {
    navigator.clipboard.writeText(this.props.stuff.password);
    alert("Your password has been copied to the clipboard.")
  }
  render() {
    return (
      <Table.Row>
        <Table.Cell><a href={this.props.stuff.address}>{this.props.stuff.site}</a></Table.Cell>
        <Table.Cell>{this.props.stuff.username}</Table.Cell>
        <Table.Cell><Button onClick={() => {this.copy();}} color="red">Copy to Clipboard</Button></Table.Cell>
        <Table.Cell>{this.props.stuff.notes}</Table.Cell>
        <Table.Cell>
          <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
StuffItem.propTypes = {
  stuff: PropTypes.shape({
    username: PropTypes.string,
    address: PropTypes.string,
    site: PropTypes.string,
    password: PropTypes.string,
    category: PropTypes.string,
    notes: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(StuffItem);
