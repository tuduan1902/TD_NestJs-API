import { Controller, Get, Param, Put } from "@nestjs/common";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
   
   @Get()
   getStudents(
      @Param('teacherId') teacherId: string,
   ) {
      return  `Get All Students That Belong To The Teacher With An ID of ${teacherId}`
   }

   @Put('/:studentId')
   getStudentTeacher(
      @Param('teacherId') teacherId: string,
      @Param('studentId') studentId: string,
   ) {
      return `Update Student With ID of ${studentId} To Teacher With ID of ${teacherId}`
   }
}