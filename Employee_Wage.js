import readlineSync from 'readline-sync'; 
console.log("Welcome to Employee Wage Computation Program");

class Employee {
    static WAGE_PER_HOUR = 20;
    static FULL_DAY_HOUR = 8;
    static PART_TIME_HOUR = 4;
    static WORKING_DAYS_PER_MONTH = 20;

    constructor(name, type = 'full-time') {
        this.name = name;
        this.type = type;
        this.attendance = Employee.checkAttendance();
        this.dailyWage = this.calculateDailyWage();
        this.monthlyWage = this.calculateMonthlyWage();
    }

    static checkAttendance() {
        const isPresent = Math.floor(Math.random() * 2);
        return isPresent === 1 ? "Present" : "Absent";
    }

    calculateDailyWage() {
        let hoursWorked = this.type === 'part-time' ? Employee.PART_TIME_HOUR : Employee.FULL_DAY_HOUR;
        if (this.attendance === "Present") {
            return Employee.WAGE_PER_HOUR * hoursWorked;
        }
        return 0;
    }

    calculateMonthlyWage() {
        let totalWage = 0;
        for (let day = 0; day < Employee.WORKING_DAYS_PER_MONTH; day++) {
            this.attendance = Employee.checkAttendance(); 
            totalWage += this.calculateDailyWage();
        }
        return totalWage;
    }
}

const employees = [
    new Employee("Avdhut", "full-time"),
    new Employee("Sham", "full-time"),
    new Employee("Raju", "part-time"),
    new Employee("Virat", "full-time"),
    new Employee("Rahul", "part-time")
];

function displayEmployeeInfo(option) {
    let employeeData;
    if (option === 1) {
        employeeData = employees.map(employee => ({
            Name: employee.name,
            Type: employee.type,
            Attendance: employee.attendance
        }));
        console.table(employeeData);
    } else if (option === 2) {
        employeeData = employees.map(employee => ({
            Name: employee.name,
            Type: employee.type,
            DailyWage: employee.dailyWage,
            MonthlyWage: employee.monthlyWage
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