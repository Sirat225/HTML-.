const Students = require('../models/student');
const allStudent = () => {
  Students.insertMany([
    { name: 'aroj', age: 20, grade: 'A' },
    { name: 'fiza', age: 20, grade: 'A' },
    { name: 'fatima', age: 22, grade: 'A' }
  ])
  .then(() => console.log('Students inserted!'))
  .catch(err => console.log('Error:', err));
  Students.updateOne({ name: 'aroj' }, { $set: { grade: 'B' } })
  .then(() => console.log('Student updated!'))
  .catch(err => console.log('Error:', err));
  Students.find()
  .then(result => console.log('Students:', result))
  .catch(err => console.log('Error:', err));
  Students.deleteOne({ name: 'fiza' })
  .then(() => console.log('Student deleted!'))
  .catch(err => console.log('Error:', err));
};

module.exports = { allStudent }; 