export interface IStudent {
  bedRoomId: string | number
  build: number
  floor: number
  room: number
  studentId: string
  studentName: string
  students: unknown[]
  buildInfo: (number | string)[]
}
