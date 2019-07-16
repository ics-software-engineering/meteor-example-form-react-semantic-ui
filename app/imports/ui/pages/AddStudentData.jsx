import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import DateField from 'uniforms-semantic/DateField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import swal from 'sweetalert';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2'; //eslint-disable-line
import SimpleSchema from 'simpl-schema';

const hobbieValues = ['Surfing', 'Running', 'Biking', 'Paddling'];
const levelValues = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
const gpaValues = ['4.0+', '3.0-3.9', '2.0-2.9', '1.0-1.9'];
const majorValues = ['Physics', 'Math', 'Chemistry', 'Computer Science'];

const formSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  bio: { label: 'Biographical Statement', type: String, optional: true, defaultValue: '' },
  hobbies: { label: 'Hobbies', type: Array },
  'hobbies.$': { type: String, allowedValues: hobbieValues },
  level: { label: 'Level', type: String, allowedValues: levelValues, defaultValue: levelValues[0] },
  gpa: { label: 'GPA', type: String, allowedValues: gpaValues },
  majors: { label: 'Major(s)', type: Array, minCount: 1 },
  'majors.$': { type: String, allowedValues: majorValues },
  enrolled: { label: 'Date Enrolled', type: Date, defaultValue: new Date() },
});

/** Renders the Page for adding a document. */
class AddStudentData extends React.Component {

  /** On submit, insert the data. */
  submit(data) {
    swal('Success', `Data: ${JSON.stringify(data)}`, 'success');
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Student Data</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
              <Segment>
                <TextField name='name' showInlineError={true}/>
                <LongTextField name='bio' showInlineError={true}/>
                <SelectField name='hobbies' showInlineError={true}/>
                <SelectField name='level' showInlineError={true} />
                <SelectField name='gpa' showInlineError={true} placeholder={'Select one'} />
                <SelectField name='majors' showInlineError={true}/>
                <DateField name='enrolled' showInlineError={true}/>
                <SubmitField value='Submit'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddStudentData;
