
class Employee {
  constructor(id, name, basicSalary) {
    this.id = id;
    this.name = name;
    this.basicSalary = basicSalary;
  }

  calculateSalary() {
    return this.basicSalary;
  }
}

class Manager extends Employee {
  constructor(id, name, basicSalary, incentive) {
    super(id, name, basicSalary);
    this.incentive = incentive;
  }
  calculateSalary() {
    return this.basicSalary + this.incentive;
  }
}


const emp = new Employee(101, "mayank", 150000);
console.log(`Employee: ${emp.name} (ID: ${emp.id})`);
console.log(`Total Salary: $${emp.calculateSalary()}`);
