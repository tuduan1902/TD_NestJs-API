import { Controller, Get, Param, Put, ParseUUIDPipe } from '@nestjs/common';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';


@Controller('teacher')
export class TeacherController {

   constructor(private readonly teacherService: TeacherService) {}

   @Get()
   getTeachers(): FindTeacherResponseDto[] {
      return this.teacherService.getTeachers()
   }

   @Get('/:teacherId')
   getTeacherById(
      @Param('teacherId', new ParseUUIDPipe()) teacherId: string
   ): FindTeacherResponseDto {
      return this.teacherService.getTeacherById(teacherId)
   }
}
