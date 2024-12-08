const studentName = `John`;
// let studentId = 
let studentAge = 20;
let studentGrade = undefined;

// console.log(studentName)

let namaUsiaFormatLama = "Nama: "+studentName+" Usia: "+studentAge
let namaUseFormatBaru = `Nama ${studentName} Usia: ${studentAge}`

// console.log(namaUseFormatBaru)

// Data Type
let courseName = "JavaScript 101";
let score = 95.5;
let isPassing = true;
let nextCourse;
let certificateNumber = null;

// Array
let courseModules = ["Variables", "Functions", "Objects", "Arrays"];

// Object
let students = {
    name: "John",
    age: 21,
    grades: [85, 90, 95],
    contact: {
        email: "john@gmail.com",
        phone: "123-456-789"
    }
}



// console.log(student.contact.email)
// console.log(courseModules[2])
// console.log(student.name === student.age)
// console.log(studentAge === student.age)

// Calculator
// let homework = 98;
// let midterm = 85;
// let final = 95;

// let hasPassingGrade = score >= 60;
// let hasAttendance = true;

// let willPass = hasPassingGrade && hasAttendance;

// let needsHelp = (score < 60) || (attendance < 80)

// let isFalling = !hasPassingGrade


// TypeScript: javascript yang ketat, kalo salah ketik gaakan mau jalan
// Kalo pake cara nulis lama gak error karena dinamis
// Best practicenya _ di nama var itu buat yang private


console.log("--- Basic for loop ---");
for (let i = 1; i <= 5; i++){
    console.log(`Count: ${i}`);
}

const fruits = ["apple", "banana", "orange", "mango"];
console.log("--- Looping through array ---");
for (let i = 0; i < fruits.length; i++){
    console.log(`Fruit ${i+1}: ${fruits[i]}`);
}

console.log("--- for...of loop ---");
const colors = ["red", "green", "blue"];
for (let color of colors){
    console.log(`Color: ${color}`);
}

console.log("--- for...in loop ---");
const student = {
    name: "John",
    age: 20,
    grade: "A"
};
for (let key in student){
    console.log(`${key}: ${student[key]}`);
}

console.log("--- while loop ---");
let count = 1;
while (count <= 5){
    console.log(`While count: ${count}`);
    count++;
}

console.log("--- do...while loop ---");
let num = 1;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num <= 3);

console.log("--- break and continue ---");
for (let i = 1; i <= 5; i++){
    if (i == 2) continue;
    if (i == 4) break;
    console.log(`Number ${i}`);
}


// Batas 


let studentScore = 85;

if (studentScore >= 88){
    console.log("Excellent work!");
}

let age = 17;

if (age >= 18){
    console.log("You can vote!");
} else {
    console.log("Too young to vote");
}

let grade = 75;

if (grade >= 90){
    console.log("Grade: A");
} else if (grade >= 80){
    console.log("Grade: B")
} else if (grade >= 70){
    console.log("Grade: C")
} else if (grade >= 60){
    console.log("Grade: D")
} else {
    console.log("Grade: E")
}

let isLoggedIn = true;
let isAdmin = true;
let hasPermission = true;

if (isLoggedIn) {
    if (isAdmin) {
        if (hasPermission) {
            console.log("Welcome to admin dashboard!");
        } else {
            console.log("Insufficient permissions");
        } 
    } else {
        console.log("Welcome to user dashboard!");
    }
} else {
    console.log("Please log in first")
}



let username = "john_doe";
let password = "secret123";

if (username === "john_doe" && password === "secret123") {
console.log("Login successful");
} else {
console.log("Invalid credentials");
}


let isSubscribed = true;
let message = isSubscribed ? "Welcome back!" : "Please subscribe";

// Batas

function sayHello(name){
    return `Hello, ${name}!`;
}

console.log(sayHello("John"));

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(10,5));

//Arrow function
const add = (a,b) => {
    return a+b;
};

const multiply = (a,b) => a*b;

console.log(add(5,3));
console.log(multiply(4,2));

//di react lebih ok pake arrow function, karena ada state

//Batas

class Student {
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying`;
    }

    get studentInfo() {
        return `${this.name}, age ${this.age}, grade ${this.grade}`;
    }

    set studentGrade(newGrade){
        if (newGrade >= 0 && newGrade <= 100){
            this.grade = newGrade;
        } else {
            console.log("Invalid grade")
        }
    }
}

let newStudent = new Student("Nadinda", 18, 90)
let otherStudent = new Student("Rere", 18, 80)
console.log(newStudent.studentInfo)
newStudent.studentGrade = 100
console.log(newStudent.studentInfo)


//overloading : 2 method sama tapi parameter beda


const student1 = new Student("John", 20, 85)
const student2 = new Student("Alice", 19, 92)

console.log(student1.study());
console.log(student2.studentInfo);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I'm ${this.name}`;
    }
}

class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }

    teach(){
        return `${this.name} is teaching ${this.subject}`;
    }
}

const teacher1 = new Teacher("Mr. Smith", 35, "JavaScript");
console.log(teacher1.introduce());
console.log(teacher1.teach());


//Encapsulation
//Kalo bikin yang private di underscore, kalo udah di define private dan pengen sistem tau itu pake #
//Kalo mau implemenet encapsulation itu pake #
//Kalo private dan mau akses bgt bikin function public


class BankAccount {
    #balance = 0;

    constructor(accountHolder){
        this.accountHolder = accountHolder;
    }

    deposit(amount){
        if (amount > 0){
            this.#balance += amount;
            return `Deposited ${amount}. New balance: ${this.#balance}`;
        }
        return "Invalid amount";
    }

    getBalance() {
        return this.#balance;

    }

}

const account1 = new BankAccount("John");
console.log(account1.deposit(100));
console.log(account1.getBalance());

// try {
//     console.log(account1.#balance);
// } catch (error){
//     console.log("akses #balance error", error.message)
// }


//DOM, jembatan dokumen dan html

