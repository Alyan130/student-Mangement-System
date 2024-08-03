import { data } from "./data.js"

export class student {
  name: string
  id: number
  course: string
  semester: { year: number, cgpa: number }
  fee?: string
  attendance: number

  constructor({ name, id, course, semester, fee, attendance }: { name: string; id: number; course: string; semester: { year: number; cgpa: number; }; fee?: string; attendance: number; }) {
    this.name = name;
    this.id = id;
    this.course = course;
    this.semester = semester;
    this.fee = fee;
    this.attendance = attendance;
  }
}