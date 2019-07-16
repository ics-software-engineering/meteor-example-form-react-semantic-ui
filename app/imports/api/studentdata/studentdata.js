import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2'; //eslint-disable-line

/** Define a Mongo collection to hold student data. */
const StudentData = new Mongo.Collection('StudentData');

/** Define a schema to constrain the data and fields in the StudentData collection. */
const StudentDataSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
  },
  bio: {
    label: 'Biographical Statement',
    type: String,
    optional: true,
    defaultValue: '',
  },
  hobbies: {
    label: 'Hobbies',
    type: Array,
    allowedValues: ['Surfing', 'Running', 'Biking', 'Paddling'],
  },
  'hobbies.$': String,
  level: {
    label: 'Level',
    type: String,
    allowedValues: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
  },
  gpa: {
    label: 'GPA',
    type: String,
    allowedValues: ['4.0+', '3.0-3.9', '2.0-2.9', '1.0-1.9'],

  },
  majors: {
    label: 'Majors',
    type: Array,
    allowedValues: ['Physics', 'Math', 'Chemistry', 'Computer Science'],
  },
  'majors.$': String,
}, { tracker: Tracker });


/** Attach the schema to the collection. */
StudentData.attachSchema(StudentDataSchema);

/** Make these objects available to others. */
export { StudentData, StudentDataSchema };
