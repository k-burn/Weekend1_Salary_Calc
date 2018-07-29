console.log('JS is properly sourced in');

let salaries = [];

$('document').ready(function(){
    clickSubmitButton()
    clickDeleteButton()
});
 
 
function clickSubmitButton() {
     $('#submitButton').on('click', function(){
        let inputFName = $('#fNameInput').val();
        let inputLName = $('#lNameInput').val();
        let inputNumber = $('#employeeNumberInput').val();
        let inputTitle = $('#jobTitleInput').val();
        let inputSalary = $('#salaryInput').val();
         console.log('The button works!')
         collectInputData()
         displayInputData()
         clearInputData()
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

function clearInputData(){
    $('#fNameInput').val("");
    $('#lNameInput').val("");
    $('#employeeNumberInput').val("");
    $('#jobTitleInput').val("");
    $('#salaryInput').val("");
};

function displayInputData() {
    let inputFName = $('#fNameInput').val();
    let inputLName = $('#lNameInput').val();
    let inputNumber = $('#employeeNumberInput').val();
    let inputTitle = $('#jobTitleInput').val();
    let inputSalary = $('#salaryInput').val();
    console.log(inputSalary);
    $('#employeeTable').append('<tr><td>'+inputFName.toUpperCase()+'</td><td>'+inputLName.toUpperCase()+'</td><td>'+inputNumber+'</td><td>'+inputTitle.toUpperCase()+'</td><td> $'+ parseInt(inputSalary).toFixed(2) +'</td><td><button class="deleteButton" type="button">Delete Info</button></tr>');
};

function calculateTotalSalaryCost(){
    let totalSalary = 0;
    for (salary of salaries){
        totalSalary = totalSalary + parseInt(salary);       
    }
    console.log(totalSalary);
    totalSalary = totalSalary/12;
    console.log(totalSalary);
    $('#totalCostDiv').empty();
    $('#totalCostDiv').append('<h4> Total Monthly Salary Expense: $' + totalSalary.toFixed(2) + '</h4>');
    if (totalSalary>20000){
        $('#totalCostDiv').css('color', 'red');
    }
};

function clickDeleteButton(){
    $('#tableBody').on('click', '.deleteButton', function(){
        console.log(this);
        $(this).parent().parent().remove(); 
    })
};
 