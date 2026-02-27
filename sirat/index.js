const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/university')
.then(()=>console.log("database is connected"))
.catch(err=>{console.log("error"),err})
const courseSchema=new mongoose.Schema({

name:String,
duration:String
})
const Course = mongoose.model('Course', courseSchema);
const studentSchema = new mongoose.Schema({
name: String, age: Number, grade: String,
enrolledCourse: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});
const newCourse = new Course({ name: 'Mathematics', duration: '6 months'
    
 }); 
newCourse.save()
.then(course => {
const newStudent = new Student({ 
name: 'Aroj',
age: 20,
 grade: 'A',
enrolledCourse: course._id
});
return newStudent.save();
})
.then(student => console.log('Student with course:', student))
.catch(err => console.log('Error:', err));
Student.findOne({ name: 'Aroj' })
.populate('enrolledCourse')
.then(student => console.log('Student with populated course:', student))
.catch(err => console.log('Error:', err));
