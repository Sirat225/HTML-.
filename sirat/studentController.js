const Student = require("../models/student");

exports.createStudent = async () => {
    const student = new Student({
        name: "Arooj",
        age: 19,
        course: "Computer Science",
        isEnrolled: true
    });

    await student.save();
    console.log("Student Added");
};
exports.getAllStudents = async () => {
    const students = await Student.find();
    console.log("All Students:");
    console.log(students);
};

exports.updateStudent = async () => {
    await Student.updateOne(
        { name: "Arooj" },
        { age: 19, course: "Software Engineering" }
    );
    console.log("Student Updated");
};
exports.deleteStudent = async () => {
    await Student.deleteOne({ name: "Arooj" });
    console.log("Student Deleted");
};
exports.findByCourse = async () => {
    const students = await Student.find({ course: "Computer Science" });
    console.log("Students in Computer Science:");
    console.log(students);
};