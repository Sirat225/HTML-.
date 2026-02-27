const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/university')
.then(()=>console.log("database is connected"))
.catch(err=>{console.log("error"),err})
const studentSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
age: { type: Number, required: true, min: 18, max: 60 }, 
grade: { type: String, required: true }
});
const Student = mongoose.model('Student', studentSchema); 
const newStudent = new Student({
name: 'aroj',
age: 20,
grade:'A'
});

newStudent.save()
.then(() => console.log('Student saved!'))
.catch(err => console.log('Validation Error:', err));
