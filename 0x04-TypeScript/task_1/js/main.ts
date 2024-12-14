interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
  }
  
  class TeacherClass implements Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
  
    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = fullTimeEmployee;
      this.location = location;
      if (yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
      }
    }
  
    addAttributes(attributes: { [key: string]: any }) {
      Object.assign(this, attributes);
    }
  }
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  interface StudentConstructor {
    new (firstName: string, lastName: string): Student;
  }
  
  interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements Student {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const teacher3: Teacher = new TeacherClass('John', 'Doe', false, 'London');
  teacher3.addAttributes({ contract: false });
  
  console.log(teacher3); 
  console.log(printTeacher("John", "Doe")); 
  
  const student1: Student = new StudentClass("Teklemuz", "Tesfay");
  console.log(student1.workOnHomework()); 
  console.log(student1.displayName());   