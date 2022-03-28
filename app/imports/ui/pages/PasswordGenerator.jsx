import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import generator from 'generate-password';
import { AutoForm, BoolField, ErrorsField, NumField, SubmitField } from 'uniforms-semantic';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  length: {
    type: Number,
    defaultValue: 10,
  },
  isLowerCase: {
    type: 'boolean',
    optional: true,
    defaultValue: false,
  },
  isUpperCase: {
    type: 'boolean',
    optional: true,
    defaultValue: false,
  },
  hasNumbers: {
    type: 'boolean',
    optional: true,
    defaultValue: false,
  },
  hasSymbols: {
    type: 'boolean',
    optional: true,
    defaultValue: false,
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for generating a password. */
class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  setValues(data) {
    const updatedData = data;
    if (data.isLowerCase === undefined) {
      updatedData.isLowerCase = false;
    }
    if (data.isUpperCase === undefined) {
      updatedData.isUpperCase = false;
    }
    if (data.hasNumbers === undefined) {
      updatedData.hasNumbers = false;
    }
    if (data.hasSymbols === undefined) {
      updatedData.hasSymbols = false;
    }
    this.submit(updatedData);
  }

  // On submit, insert the data.
  submit(updatedData) {
    console.log(updatedData.hasNumbers);
    const generatedPwd = generator.generate({
      length: updatedData.length,
      lowercase: updatedData.isLowerCase,
      uppercase: updatedData.isUpperCase,
      numbers: updatedData.hasNumbers,
      symbols: updatedData.hasSymbols,

    });
    this.setState({ password: generatedPwd });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    return (
      <Grid container centered>
        <Header as="h2" textAlign="center">Generate Password</Header>
        <Grid.Row>
          <AutoForm schema={bridge} onSubmit={data => this.setValues(data)}>
            <Segment>
              <NumField name='length' decimal={false}/>
              <BoolField name='isLowerCase' label='Lower Case'/>
              <BoolField name='isUpperCase' label='Upper Case'/>
              <BoolField name='hasNumbers' label='Numbers'/>
              <BoolField name='hasSymbols' label='Symbols'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Row>
        <Header as="h3" textAlign="center">Your Generated Password:</Header>
        <Grid.Row>
          <Segment textAlign='center'>{this.state.password}</Segment>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PasswordGenerator;
