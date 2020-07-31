import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const EnrollmentData = new Mongo.Collection('EnrollmentData');

/** Define a schema to specify the structure of each document in the collection. */
const EnrollmentDataSchema = new SimpleSchema({
  email: String,
  enrolled: Date,
}, { tracker: Tracker });

/** Attach the schema to the collection. */
EnrollmentData.attachSchema(EnrollmentDataSchema);

/** Make these objects available to others. */
export { EnrollmentData, EnrollmentDataSchema };
