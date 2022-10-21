// let employee = [];
function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("employee");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}
let employee = getTodoListFromLocalStorage();
let employeeCount = employee.length;

// let empNameEl = document.getElementById("empName");
// employeeDetails.name = empNameEl.value;
// console.log(employeeDetails);
let tableContainerEl = document.getElementById("tableContainer");
let popEl = document.querySelector(".pop");
popEl.classList.add("active");
let removeEl = document.getElementById("removeBtn");
removeEl.onclick = function(){
    popEl.classList.add("active");
}

let getbtn = document.getElementById("button");
getbtn.addEventListener("click", function() {
    popEl.classList.remove("active");
    let parsedData = JSON.parse(localStorage.getItem("employee"));
    let tbodyEl = document.getElementById("tbody");
    let outData = "";
    for (let ele of parsedData) {

        console.log(ele.id);
        outData += `
        <tr>
                        <th>${ele.id}</th>
                        <th>${ele.name}</th>
                        <th>${ele.email}</th>
                        <th>${ele.status}</th>
                        <th>${ele.disignation}</th>
                        <th>${ele.gender}</th>
                    </tr>`;
    }
    tbodyEl.innerHTML = outData;
});
// console.log(employee);

let empNameEl = document.getElementById("empName");
empNameEl.addEventListener("blur", function(event) {
    let errorNameEl = document.getElementById("errorName");
    if (event.target.value === "") {
        errorNameEl.classList.add("errorMsg");
        errorNameEl.textContent = "Requried*";
    } else {
        errorNameEl.textContent = "";
    }
});
let empemailEl = document.getElementById("empemail");
empemailEl.addEventListener("blur", function(event) {
    let errorEmailEl = document.getElementById("errorEmail");
    if (event.target.value === "") {
        errorEmailEl.classList.add("errorMsg");
        errorEmailEl.textContent = "Requried*";
    } else {
        errorEmailEl.textContent = "";
    }
});
let workStatusEl = document.getElementById("workStatus");
let empDesignationEl = document.getElementById("empDesignation");

function newEmployee() {
    let employeeDetails = {
        id: 0,
        name: "",
        email: "",
        status: "Active",
        disignation: "",
        gender: "Male"
    };

    employeeCount = employeeCount + 1;

    employeeDetails.name = empNameEl.value;
    employeeDetails.email = empemailEl.value;
    employeeDetails.status = workStatusEl.value;
    employeeDetails.disignation = empDesignationEl.value;
    employeeDetails.id = employeeCount;

    let genderMaleEl = document.getElementById("genderMale");
    genderMaleEl.addEventListener("change", function(event) {
        employeeDetails.gender = event.target.value;
    });
    let genderFemaleEl = document.getElementById("genderFemale");
    genderFemaleEl.addEventListener("change", function(event) {
        employeeDetails.gender = event.target.value;
    });
    console.log(employeeDetails);
    return employeeDetails;
}





let employeeFormEl = document.getElementById("employeeForm");
employeeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (empNameEl.value === "") {
        alert("Enter Employee Name");
        return;
    }
    let add = newEmployee();
    employee.push(add);
    console.log(employee);
    localStorage.setItem("employee", JSON.stringify(employee));
    // console.log(employeeDetails);
    empNameEl.value = "";
    empemailEl.value = "";
});