console.log('JS is properly sourced in');

let employees =[];
let salaries = [];

class Employee{
    constructor( fName, lName, employeeNumber, jobTitle, salaryAmount ){
      this.fname = fName;
      this.lname = lName;
      this.number = employeeNumber;
      this.job = jobTitle;
      this.salaryAmount = salaryAmount
    }
};

$('document').ready(function(){
    clickSubmitButton()
    clickDeleteButton()
    clickFindByNameButton()
    clickFindByNumberButton()
});

 
function clickSubmitButton() {
     $('#submitButton').on('click', function(){
         console.log('The button works!')
         collectInputData()
         employeeArray()
         displayEmployeeArray()
         //clearInputData()
         calculateTotalSalaryCost()

     })  
 };

function collectInputData(){
    let inputFName = $('#fNameInput').val();
    let inputLName = $('#lNameInput').val();
    let inputNumber = $('#employeeNumberInput').val();
    let inputTitle = $('#jobTitleInput').val();
    let inputSalary = $('#salaryInput').val();
    console.log(inputFName, inputLName, inputNumber, inputSalary, inputTitle);
    salaries.push(inputSalary);
    console.log(salaries);
    
};

function employeeArray() {
    let newEmployee = new Employee($('#fNameInput').val(), $('#lNameInput').val(), $('#employeeNumberInput').val(), $('#jobTitleInput').val(), $('#salaryInput').val());
    employees.push(newEmployee);
    console.log(employees);
};

function displayEmployeeArray(){
    $('#tableBody').empty();
    $('#tableBody').append('<tr><th>First Name</th><th>Last Name</th><th>ID Number</th><th>Job Title</th><th>Salary</th><th>  </th></tr>');
    for (employee of employees){
        $('#tableBody').append('<tr><td>'+ (employee.fname).toUpperCase()+'</td><td>'+ (employee.lname).toUpperCase()+'</td><td>'+ employee.number+'</td><td>'+ (employee.job).toUpperCase()+'</td><td> $'+ parseInt(employee.salaryAmount).toFixed(2) + '</td><td><button class="deleteButton" type="button" data-salary="'+ parseInt(employee.salaryAmount) +'">Delete Info</button></tr>');
    }
}

function clearInputData(){
    $('#fNameInput').val("");
    $('#lNameInput').val("");
    $('#employeeNumberInput').val("");
    $('#jobTitleInput').val("");
    $('#salaryInput').val("");
};


/* function displayInputData() {
    let inputFName = $('#fNameInput').val();
    let inputLName = $('#lNameInput').val();
    let inputNumber = $('#employeeNumberInput').val();
    let inputTitle = $('#jobTitleInput').val();
    let inputSalary = $('#salaryInput').val();
    console.log(inputSalary);
    $('#employeeTable').append('<tr><td>'+inputFName.toUpperCase()+'</td><td>'+inputLName.toUpperCase()+'</td><td>'+inputNumber+'</td><td>'+inputTitle.toUpperCase()+'</td><td> $'+ parseInt(inputSalary).toFixed(2) +'</td><td><button class="deleteButton" type="button">Delete Info</button></tr>');
}; */

function calculateTotalSalaryCost(){
    let totalSalary=0;
    for (let salary of salaries){
        totalSalary= totalSalary + parseInt(salary);
    }
    totalSalary = totalSalary/12;
    $('#totalCostDiv').empty();
    $('#totalCostDiv').append('<h4> Total Monthly Salary Expense: $' + totalSalary.toFixed(2) + '</h4>');
    if (totalSalary>20000){
        $('#totalCostDiv').css('color', 'red');
    }
    else {
        $('#totalCostDiv').css('color', 'black');
    }


};

function clickDeleteButton(){
    $('#tableBody').on('click', '.deleteButton', function(){
        console.log('working delete button');
        $(this).parent().parent().remove(); 
        console.log($(this).parent());
        console.log(this.getAttribute('data-salary'));
        let thisSalary= -Math.abs(this.getAttribute('data-salary'));
        salaries.push(thisSalary);
        calculateTotalSalaryCost();

    })
};
function clickFindByNumberButton(){
    $('#findButton').on('click', function(){
        console.log('button works')
        removeEmployeeByNumber()
    })
}
function clickFindByNameButton(){
    $('#findByNameButton').on('click', function(){
        console.log('button worksss')
        removeEmployeeByName()
    })
}
 
function removeEmployeeByNumber(){
    let searchEmployeeNumber = $('#employeeFind').val();
    for (let employee of employees) {
        if (searchEmployeeNumber == employee.number){
            console.log(employee);
            employees.splice(employees.indexOf(employee), 1);
            displayEmployeeArray();

        }
    }
    calculateTotalSalaryCost()
}

function removeEmployeeByName(){
    let searchEmployeeFName = $('#fNameFind').val();
    let searchEmployeeLName = $('#lNameFind').val();
    for (let employee of employees) {
        if (searchEmployeeFName == employee.fname && searchEmployeeLName == employee.lname){
            console.log(searchEmployeeFName);
            employees.splice(employees.indexOf(employee), 1);
            displayEmployeeArray();

        }
    }
    calculateTotalSalaryCost()
}
