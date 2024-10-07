import readlineSync from 'readline-sync'; 
console.log("Welcome to Employee Wage Computation Program");

class Employee {
    
    static WAGE_PER_HOUR = 20; 
    static FULL_DAY_HOUR = 8;   
    constructor(name) {
        this.name = name;
        this.attendance = Employee.checkAttendance();
        this.dailyWage = this.calculateDailyWage(); 
    }

    static checkAttendance() {
        const isPresent = Math.floor(Math.random() * 2); 
        return isPresent === 1 ? "Present" : "Absent";
    }

  
    calculateDailyWage() {
        if (this.attendance === "Present") {
            return Employee.WAGE_PER_HOUR * Employee.FULL_DAY_HOUR; 
        }
        return 0; 
    }
}

const employees = [
    new Employee("Avdhut"),
    new Employee("Sham"),
    new Employee("Raju"),
    new Employee("Virat")
];

function displayEmployeeInfo(option) {
    let employeeData;
    if (option === 1) {
       
        employeeData = employees.map(employee => ({
            Name: employee.name,
            Attendance: employee.attendance
        }));
        console.table(employeeData); 
    } else if (option === 2) {
      
        employeeData = employees.map(employee => ({
            Name: employee.name,
            DailyWage: employee.dailyWage
        }));
        console.table(employeeData); 
    } else {
        console.log("Invalid option. Please select 1, 2, or 3.");
    }
}

let exit = false;
while (!exit) {
    console.log("\nChoose an option:");
    console.log("1) Display Attendance");
    console.log("2) Display Wages");
    console.log("3) Exit");

    const userInput = readlineSync.question("Enter your choice: ");

    if (userInput === '1') {
        displayEmployeeInfo(1);
    } else if (userInput === '2') {
        displayEmployeeInfo(2);
    } else if (userInput === '3') {
        exit = true;
        console.log("Exiting the program. Thank you!");
    } else {
        console.log("Invalid option. Please select 1, 2, or 3.");
    }
}