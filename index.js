var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var school = /** @class */ (function () {
    function school(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    school.prototype.addStudent = function (stuObj) {
        this.students.push(stuObj);
    };
    school.prototype.addTeacher = function (teObj) {
        this.teachers.push(teObj);
    };
    return school;
}());
var Student = /** @class */ (function () {
    function Student(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
//School
var school1 = new school("FIC inter College");
var school2 = new school("Beacon House");
var school3 = new school("The Educator");
//Student
var s1 = new Student("Muhammad", 6, school1.name);
var s2 = new Student("Zainab", 9, school2.name);
var s3 = new Student("Umaima", 9, school3.name);
//Teacher
var t1 = new Teacher("Khatija", 35, school1.name);
var t2 = new Teacher("Najish", 40, school2.name);
var t3 = new Teacher("Farah", 45, school3.name);
//Student
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
//Teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
//School
console.log(s1);
console.log(s2);
console.log(s3);
