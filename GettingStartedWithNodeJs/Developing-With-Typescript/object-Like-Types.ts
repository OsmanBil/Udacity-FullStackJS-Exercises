// // Object 
// let student: { name: string, age: number, enrolled: boolean } = { name: 'Maria', age: 10, enrolled: true };

// // interface
// interface Student {
//     name: string,
//     age: number,
//     enrolled: boolean
// };
// let newStudent: Student = { name: 'Maria', age: 10, enrolled: true };

// // Optional and Readonly Properties

// interface Student {
//     name: string,
//     age: number,
//     enrolled: boolean,
//     phone?: number // phone becomes optional
// };

// interface Student {
//     name: string,
//     age: number,
//     enrolled: boolean,
//     readonly id: number // id is readonly
// };


//   // Type Aliases
//   type Student = { 
//     name: string; 
//     age: number;
//     enrolled: boolean;
//   };
  
//   let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};

//   // Classes

//   class Student {
//     studentGrade: number;
//     studentId: number;
//     constructor(grade: number, id: number) {
//       this.studentGrade = grade;
//       this.studentId = id;
//     }
//   }

//   // Access Modifiers
//   class Student {
//     protected studentGrade: number;
//     private studentId: number;
//     public constructor(grade: number, id: number) {
//       this.studentGrade = grade;
//       this.studentId = id;
//     }
//     id(){
//       return this.studentId;
//     }
//   }
  
//   class Graduate extends Student {
//     studentMajor: string; // public by default
//     public constructor(grade: number, id: number, major: string ){
//         super(grade, id);
//         this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
//         this.studentGrade = grade; // Accessable because parent is protected
//         this.studentMajor = major;
//     }
//   }
  
//   const myStudent = new Graduate(3, 1234, 'computer science');
  
//   console.log(myStudent.id()); //  prints 1234
//   myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
//   console.log(myStudent.id()); // prints 1235