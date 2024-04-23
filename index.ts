class school {
    name: string;

    students: Student[]=[];
    teachers: Teacher[]=[];

    addStudent(stuObj: Student){
        this.students.push(stuObj)
    }
    addTeacher(teObj: Teacher){
        this.teachers.push(teObj)
    }
    constructor(name:string){
        this.name = name;
    }

}

class Student{
    name: string;
    age: number;
    schoolName: string;

    constructor(name:string, age:number, schoolName:string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }



}

class Teacher extends Student{}
    
//School
let school1 = new school("FIC inter College")
let school2 = new school("Beacon House")
let school3 = new school("The Educator")

//Student
let s1 = new Student("Muhammad", 6 ,school1.name)
let s2 = new Student("Zainab", 9 ,school2.name)
let s3 = new Student("Umaima", 9 ,school3.name)

//Teacher
let t1 = new Teacher("Khatija", 35 ,school1.name)
let t2 = new Teacher("Najish", 40 ,school2.name)
let t3 = new Teacher("Farah", 45 ,school3.name)


//Student
school1.addStudent(s1)
school2.addStudent(s2)
school3.addStudent(s3)
//Teacher
school1.addTeacher(t1)
school2.addTeacher(t2)
school3.addTeacher(t3)


console.log(t1)
console.log(t2)
console.log(t3)

//School
console.log(s1)
console.log(s2)
console.log(s3)
