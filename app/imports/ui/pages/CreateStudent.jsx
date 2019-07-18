import React from 'react';
import { Grid, Segment, Header, Form } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import DateField from 'uniforms-semantic/DateField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import swal from 'sweetalert';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2'; //eslint-disable-line
import MultiSelectField from '../forms/controllers/MultiSelectField';
import RadioField from '../forms/controllers/RadioField';
import { StudentFormSchema as formSchema } from '../forms/StudentFormInfo';
import { StudentData } from '../../api/studentdata/studentdata';
import { EnrollmentData } from '../../api/enrollmentdata/enrollmentdata';

/** Renders the Page for adding a document. */
class CreateStudent extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    let insertError;
    const { name, email, bio, level, gpa, enrolled, hobbies, major } = data;
    StudentData.insert({name, email, bio, level, gpa, hobbies, major },
      (error) => { insertError = error; });
    if (insertError) {
      swal('Error', insertError.message, 'error');
    } else {
      EnrollmentData.insert({ email, enrolled },
        (error) => { insertError = error; });
      if (insertError) {
        swal('Error', insertError.message, 'error');
      } else {
        swal('Success', 'The student record was created.', 'success');
        formRef.reset();
      }
    }
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Create Student</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
              <Segment>
                <Form.Group widths={'equal'}>
                  <TextField name='name' showInlineError={true} placeholder={'Your name'}/>
                  <TextField name='email' showInlineError={true} placeholder={'Your email'}/>
                </Form.Group>
                <LongTextField name='bio' showInlineError={true} placeholder={'A bit about you'}/>
                <Form.Group widths={'equal'}>
                  <SelectField name='level' showInlineError={true} />
                  <SelectField name='gpa' showInlineError={true} placeholder={'Select one'} />
                  <DateField name='enrolled' showInlineError={true}/>
                </Form.Group>
                <MultiSelectField name='hobbies' showInlineError={true} placeholder={'Select hobbies'}/>
                <RadioField name='major' inline showInlineError={true}/>
                <SubmitField value='Submit'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default CreateStudent;
