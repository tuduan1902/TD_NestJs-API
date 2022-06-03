import { Controller, Get, Param, Put, ParseUUIDPipe } from "@nestjs/common";
import { FindStudentResponseDto, StudentResponseDto } from "src/student/dto/student.dto";
import { StudentService } from "../student/student.service";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

   constructor(private readonly studentService: StudentService) {}
   
   @Get()
   getStudents(
      @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
   ): FindStudentResponseDto[] {
      return  this.studentService.getStudentsByTeacherId(teacherId)
   }

   @Put('/:studentId')
   getStudentTeacher(
      @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
      @Param('studentId', new ParseUUIDPipe()) studentId: string,
   ): StudentResponseDto {
      return this.studentService.updateStudentTeacher(teacherId, studentId)
   }
}