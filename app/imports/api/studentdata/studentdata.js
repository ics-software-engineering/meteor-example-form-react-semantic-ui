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
    label: 'Bio',
    type: String,
    optional: true,
    defaultValue: '',
  },
  hobbies: {
    label: 'Hobbies',
    type: Array,
  },
  'hobbies.$': String,
  level: {
    label: 'Level',
    type: String,
  },
  gpa: {
    label: 'GPA',
    type: String,
  },
  majors: {
    label: 'Majors',
    type: Array,
  },
  'majors.$': String,
}, { tracker: Tracker });


/** Attach the schema to the collection. */
StudentData.attachSchema(StudentDataSchema);

/** Make these objects available to others. */
export { StudentData, StudentDataSchema };
