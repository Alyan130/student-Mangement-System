import { studentManage } from "./studentManage.js"
import { student } from "./student.js"

console.log("Student Management System\n")

const s1 = new student({ name: "Alyan", id: 3, course: "computer", semester: { year: 2, cgpa: 3.63 }, fee: "paid", attendance: 89.1 })
const s2 = new student({ name: "Murtuza", id: 65, course: "electronics", semester: { year: 2, cgpa: 3.65 }, fee: "paid", attendance: 81.23 })
const s3 = new student({ name: "Daniyal", id: 37, course: "cyber security", semester: { year: 2, cgpa: 3.64 }, fee: "paid", attendance: 86.2 })
const s4 = new student({ name: "Hassan", id: 68, course: "chemical", semester: { year: 1, cgpa: 3.1 }, fee: "paid", attendance: 71 })
const s5 = new student({ name: "Ali", id: 56, course: "petroleum", semester: { year: 1, cgpa: 2.2 }, fee: "unpaid", attendance: 56.8 })
const s6 = new student({ name: "Hamza", id: 3, course: "computer", semester: { year: 2, cgpa: 3.31 }, fee: "paid", attendance: 78 })

const sm1 = new studentManage(s1)
const sm2 = new studentManage(s2)
const sm3 = new studentManage(s3)
const sm4 = new studentManage(s4)
const sm5 = new studentManage(s5)
const sm6=new studentManage(s6)

sm1.addStudent()
sm2.addStudent()
sm3.addStudent()
sm4.addStudent()
sm5.addStudent()
sm6.deleteStudent(100);

sm1.displayinfo()
sm1.attendanceView()
sm1.feechecker()
sm1.internshipoffer()


