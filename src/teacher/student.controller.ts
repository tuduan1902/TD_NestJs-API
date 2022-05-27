import { Controller, Get, Param, Put } from "@nestjs/common";
import { FindStudentResponseDto, StudentResponseDto } from "src/student/dto/student.dto";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
   
   @Get()
   getStudents(
      @Param('teacherId') teacherId: string,
   ): FindStudentResponseDto[] {
      return  `Get All Students That Belong To The Teacher With An ID of ${teacherId}`
   }

   @Put('/:studentId')
   getStudentTeacher(
      @Param('teacherId') teacherId: string,
      @Param('studentId') studentId: string,
   ): StudentResponseDto {
      return `Update Student With ID of ${studentId} To Teacher With ID of ${teacherId}`
   }
}