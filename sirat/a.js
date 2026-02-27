const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/university')
.then(()=>console.log("database is connected"))
.catch(err=>{console.log("error"),err})
const studentsSchema=new mongoose.Schema({
    name:String,
    age:Number,
    grade:String
});
const Students=mongoose.model('Students',studentsSchema);
const students=[{ name:'aroj', age:20, grade:'A'},{name:'fiza',age:20,grade:'A'},{name:'fatima',age:22,grade:'A'}
];
Students.insertMany(students)
.then(()=>console.log('Students inserted!'))
.catch(err=>console.log('error:',err));

Students.find()
.then(()=>console.log('Student saved!'))
.catch(err=>console.log('error:',err));
Students.updateOne({name:'Aroj'},{$set:{grade:'B'}})
.then(()=>console.log('Student updated!'))
.catch(err=>console.log('error:',err));
Students.find()
.then(Students=>console.log('Student',students))
.catch(err=>console.log('error:',err));
Students.findByIdAndDelete('students_id_here')
.then(Students=>console.log('Student deleted'))
.catch(err=>console.log('error:',err));

