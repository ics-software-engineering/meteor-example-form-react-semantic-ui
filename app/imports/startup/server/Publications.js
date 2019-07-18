import { Meteor } from 'meteor/meteor';
import { StudentData } from '../../api/studentdata/StudentData.js';
import { EnrollmentData } from '../../api/enrollmentdata/EnrollmentData.js';

Meteor.publish('StudentData', function publishStudentData() {
  return StudentData.find();
});

Meteor.publish('EnrollmentData', function publishEnrollmentData() {
  return EnrollmentData.find();
});
