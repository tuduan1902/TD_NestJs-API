import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStudentDto, UpdateStudentDto, FindStudentResponseDto, StudentResponseDto } from "./dto/student.dto"

@Controller('students')
export class StudentController {
   
   @Get()
   getStudents(): FindStudentResponseDto[] {
      return "All Students"
   }

   @Get('/:studentId')
   getStudentById(
      @Param('studentId') studentId: string
   ): FindStudentResponseDto {
      return `Get Student With Id of ${studentId}`
   }

   @Post()
   createStudent(
      @Body() body: CreateStudentDto
   ): StudentResponseDto {
      return `Create Student With The Following Data ${JSON.stringify(body)}`
   }

   @Put('/:studentId')
   updateStudent(
      @Param('studentId') studentId: string,
      @Body() body: UpdateStudentDto 
   ): StudentResponseDto{
      return `Update Student With Id of ${studentId} With Data of ${JSON.stringify(body)}`
   }
}