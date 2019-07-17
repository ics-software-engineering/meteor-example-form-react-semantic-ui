import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold student data. */
const StudentData = new Mongo.Collection('StudentData');

const StudentDataValues = {
  hobbies: ['Surfing', 'Running', 'Biking', 'Paddling'],
  level: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
  majors: ['Physics', 'Math', 'Chemistry', 'Computer Science'],
};

/** Define a schema to constrain the data and fields in the StudentData collection. */
const StudentDataSchema = new SimpleSchema({
  name: String,
  bio: { type: String, optional: true, defaultValue: '' },
  hobbies: Array,
  'hobbies.$': { type: String, allowedValues: StudentDataValues.hobbies },
  level: { type: String, allowedValues: StudentDataValues.level },
  gpa: Number,
  majors: Array,
  'majors.$': { type: String, allowedValues: StudentDataValues.majors },
}, { tracker: Tracker });


/** Attach the schema to the collection. */
StudentData.attachSchema(StudentDataSchema);

/** Make these objects available to others. */
export { StudentDataValues, StudentData, StudentDataSchema };
