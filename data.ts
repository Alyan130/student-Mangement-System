export interface data {
    name: String,
    id: number,
    course: String
    semester: { year: number, cgpa: number }
    fee?: string
    attendance: number;
  }