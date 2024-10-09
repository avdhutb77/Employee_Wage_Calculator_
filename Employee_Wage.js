import readlineSync from 'readline-sync'; 
console.log("Welcome to Employee Wage Computation Program");

class Employee {
    static WAGE_PER_HOUR = 20;
    static FULL_DAY_HOUR = 8;
    static PART_TIME_HOUR = 4;
    static MAX_WORKING_HOURS = 100; 
    static MAX_WORKING_DAYS = 20;   

    constructor(name, type = 'full-time') {
        this.name = name;
        this.type = type;
        this.TotalEmployeeWage = 0;
        this.totalHoursWorked = 0;
        this.totalDaysWorked = 0;
        this.calculateMonthlyWage();
    }

    static checkAttendance() {
        const isPresent = Math.floor(Math.random() * 2);
        return isPresent === 1 ? "Present" : "Absent";
    }

    calculateDailyWage(hoursWorked) {
        return Employee.WAGE_PER_HOUR * hoursWorked;
    }

    calculateMonthlyWage() {
        let totalDayOfMonth = 30;
        
       
        while (this.totalHoursWorked < Employee.MAX_WORKING_HOURS && this.totalDaysWorked < Employee.MAX_WORKING_DAYS && totalDayOfMonth >= 1) {
            totalDayOfMonth--;
            const dailyAttendance = Employee.checkAttendance();
            let hoursWorked = this.type === 'part-time' ? Employee.PART_TIME_HOUR : Employee.FULL_DAY_HOUR;

            if (dailyAttendance === "Present") {
                
                if (this.totalHoursWorked + hoursWorked > Employee.MAX_WORKING_HOURS) {
                    hoursWorked = Employee.MAX_WORKING_HOURS - this.totalHoursWorked;  
                }
                this.TotalEmployeeWage += this.calculateDailyWage(hoursWorked);
                this.totalHoursWorked += hoursWorked;
                this.totalDaysWorked++;
            }
        }
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
        employeeData = employees.map(i => ({
            Name: i.name,
            Type: i.type,
            DaysWorked: i.totalDaysWorked,
            HoursWorked: i.totalHoursWorked
        }));
        console.table(employeeData);
    } else if (option === 2) {
        employeeData = employees.map(i => ({
            Name: i.name,
            Type: i.type,
            DaysWorked: i.totalDaysWorked,
            HoursWorked: i.totalHoursWorked,
            TotalEmployeeWage: i.TotalEmployeeWage
        }));
        console.table(employeeData);
    } else {
        console.log("Invalid option. Please select 1, 2, or 3.");
    }
}

let exit = false;

while (!exit) {
    console.log("\nChoose an option:");
    console.log("1) Display Attendance Details");
    console.log("2) Display Wages Details");
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