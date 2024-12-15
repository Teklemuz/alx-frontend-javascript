namespace Subjects {
    export class Subject {
      private teacher: Teacher;
  
      constructor() {
        this.teacher = { firstName: '', lastName: '' };
      }
  
      public setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }
