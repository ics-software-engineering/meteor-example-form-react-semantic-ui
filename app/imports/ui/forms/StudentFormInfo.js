import SimpleSchema from 'simpl-schema';
import { StudentDataValues as DataValues } from '../../api/studentdata/StudentData';

const gpaValues = ['0.0-0.9', '1.0-1.9', '2.0-2.9', '3.0-3.9', '4.0+'];

const gpa2String = (num) => gpaValues[num];
const gpa2Number = (string) => gpaValues.indexOf(string);

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

export { StudentFormSchema, gpa2String, gpa2Number };
