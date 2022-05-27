import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
   @Get()
   getTeachers() {
      return "All Teachers"
   }

   @Get('/:teacherId')
   getTeacherById(
      @Param('teacherId') teacherId: string
   ) {
      return `Get Teacher With Id of ${teacherId}`
   }
}
