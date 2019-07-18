import SimpleSchema from 'simpl-schema';
import { StudentDataValues as DataValues } from '../../api/studentdata/studentdata';

const gpaValues = ['4.0+', '3.0-3.9', '2.0-2.9', '1.0-1.9'];

const StudentFormSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  email: { label: 'Email', type: String },
  bio: { label: 'Biographical Statement', type: String, optional: true, defaultValue: '' },
  hobbies: { label: 'Hobbies', type: Array, optional: true },
  'hobbies.$': { type: String, allowedValues: DataValues.hobbies },
  level: { label: 'Level', type: String, allowedValues: DataValues.levels, defaultValue: DataValues.levels[0] },
  gpa: { label: 'GPA', type: String, allowedValues: gpaValues },
  major: { label: 'Major', type: String, allowedValues: DataValues.majors },
  enrolled: { label: 'Date Enrolled', type: Date, defaultValue: new Date() },
});

export { StudentFormSchema };
