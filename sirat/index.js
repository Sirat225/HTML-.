const connectDB = require("./config/db");

const {
    createStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    findByCourse
} = require("./controllers/studentController");

const run = async () => {
    await connectDB();

    await createStudent();
    await getAllStudents();

    await updateStudent();
    await getAllStudents();

    await findByCourse();

    await deleteStudent();
    await getAllStudents();

    process.exit();
};

run();