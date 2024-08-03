let student_data = [];
export class studentManage {
    constructor(student_manage) {
        this.student_manage = student_manage;
    }
    addStudent() {
        student_data.push(this.student_manage);
    }
    deleteStudent(id) {
        for (let i = 0; i < student_data.length; i++) {
            if (id == student_data[i].id) {
                student_data.splice(i, 1);
            }
            else {
                console.log(`There is no student data with ${id} ID to delete.\n`);
                break;
            }
        }
    }
    displayinfo() {
        for (let i = 0; i < student_data.length; i++) {
            console.log(`Student ${i + 1} info: \nName:${student_data[i].name}\nID:${student_data[i].id}\nCourse:${student_data[i].course}\nYear:${student_data[i].semester.year}\nCGPA: ${student_data[i].semester.cgpa}\nFee-Status:${student_data[i].fee}\n`);
        }
    }
    feechecker() {
        for (let i = 0; i < student_data.length; i++) {
            if (student_data[i].fee == "unpaid") {
                console.log(`\nStudent with unpaid fee:\n${student_data[i].name}\n`);
            }
        }
    }
    attendanceView() {
        console.log("Attendance of students:");
        for (let i = 0; i < student_data.length; i++) {
            if (student_data[i].attendance >= 75) {
                console.log(`${student_data[i].name} ${student_data[i].attendance}`);
            }
            else {
                console.log(student_data[i].name + " not sit in exam");
            }
        }
    }
    internshipoffer() {
        console.log("Issuing internship offer to these students:");
        for (let i = 0; i < student_data.length; i++) {
            if (student_data[i].semester.cgpa >= 3.50) {
                console.log(student_data[i].name);
            }
        }
    }
}
