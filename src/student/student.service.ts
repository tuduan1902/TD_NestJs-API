import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { v4 as uuid } from 'uuid'
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
   private students = students;

   getStudents(): FindStudentResponseDto[] {
      return this.students
   }

   getStudentById(studentId: string): FindStudentResponseDto {
      return this.students.find(student => {
         return student.id === studentId
      })
   }

   createStudent(payload: CreateStudentDto): StudentResponseDto {
      let newStudent = {
         id: uuid(),
         ...payload
      }
      this.students.push(newStudent);

      return newStudent
   }

   updateStudent(payload: UpdateStudentDto, studentId: string) {
      let updateStudent: StudentResponseDto;

      const updatedStudentList = this.students.map(student => {
         if(student.id === studentId){
            updateStudent = {
               id: studentId,
               ...payload
            }
         } else return student
      });

      this.students = updatedStudentList;
      return updateStudent
   }
}
