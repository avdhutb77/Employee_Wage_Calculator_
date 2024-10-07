import readlineSync from 'readline-sync'; 
console.log("Welcome to Employee Wage Computation Program");

class Employee {
    
    static WAGE_PER_HOUR = 20; 
    static FULL_DAY_HOUR = 8;   

    
    constructor(name) {
        this.name = name;
        this.attendance = Employee.checkAttendance();
    }

   
    static checkAttendance() {
        const isPresent = Math.floor(Math.random() * 2); 
        return isPresent === 1 ? "Present" : "Absent";
    }
}


const employees = [
    new Employee("Avdhut"),
    new Employee("Sham"),
    new Employee("Raju"),
    new Employee("Virat")
];


function displayAttendance() {
    const employeeData = employees.map(employee => ({
        Name: employee.name,
        Attendance: employee.attendance
    }));
    console.table(employeeData); 
}


let exit = false;
while (!exit) {
    console.log("\nChoose an option:");
    console.log("1) Display Attendance");
    console.log("2) Exit");

    const userInput = readlineSync.question("Enter your choice: ");

    if (userInput === '1') {
        displayAttendance();
    } else if (userInput === '2') {
        exit = true;
        console.log("Exiting the program. Thank you!");
    } else {
        console.log("Invalid option. Please select 1 or 2.");
    }
}