import React from 'react';
import { Grid, Segment, Header, Form, Message } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import DateField from 'uniforms-semantic/DateField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2'; //eslint-disable-line
import MultiSelectField from '../forms/controllers/MultiSelectField';
import RadioField from '../forms/controllers/RadioField';
import { StudentFormSchema as formSchema, gpa2Number } from '../forms/StudentFormInfo';
import { StudentData } from '../../api/studentdata/studentdata';
import { EnrollmentData } from '../../api/enrollmentdata/enrollmentdata';

/** Renders the Page for adding a document. */
class EditStudent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: false };
  }

  /** On submit, try to insert the data. If successful, reset the form. */
  submit(data, formRef) {
    let updateError;
    const { name, email, bio, level, gpa, enrolled, hobbies, major } = data;
    StudentData.insert({ name, email, bio, level, gpa: gpa2Number(gpa), hobbies, major },
      (error) => { updateError = error; });
    if (updateError) {
      swal('Error', updateError.message, 'error');
    } else {
      EnrollmentData.insert({ email, enrolled },
        (error) => { updateError = error; });
      if (updateError) {
        swal('Error', updateError.message, 'error');
      } else {
        swal('Success', 'The student record was created.', 'success');
        this.setState({ email });
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
          <Header as="h2" textAlign="center">Edit Student</Header>
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
              <MultiSelectField name='hobbies' showInlineError={true} placeholder={'Select hobbies (optional)'}/>
              <RadioField name='major' inline showInlineError={true}/>
              <SubmitField value='Submit'/>
            </Segment>
          </AutoForm>
          {this.state.email ? <Message>Edit <a href={`/student/${this.state.email}`}>this data</a></Message> : ''}
        </Grid.Column>
      </Grid>
    );
  }
}

/** Require a studentdata and enrollment doc.  Uniforms adds 'model' to the props, which we use. */
EditStudent.propTypes = {
  studentDataDoc: PropTypes.object,
  enrollmentDoc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the email from the URL field. See imports/ui/layouts/App.jsx for the route containing :email.
  const email = match.params.email;
  // Request StudentData and Enrollment docs. Won't be locally available until ready() returns true.
  const studentDataSubscription = Meteor.subscribe('StudentData');
  return {
    doc: Stuffs.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditStudent);
