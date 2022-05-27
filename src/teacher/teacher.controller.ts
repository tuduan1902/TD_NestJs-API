import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';


@Controller('teacher')
export class TeacherController {
   @Get()
   getTeachers(): FindStudentResponseDto[] {
      return "All Teachers"
   }

   @Get('/:teacherId')
   getTeacherById(
      @Param('teacherId') teacherId: string
   ): FindTeacherResponseDto {
      return `Get Teacher With Id of ${teacherId}`
   }
}
