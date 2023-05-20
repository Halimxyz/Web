// get references to DOM elements
let nameInput = document.querySelector("#name-input");
let searchBtn = document.querySelector("#search-btn");
function format(str) {
  str = str.replace(/\s+/g, ""); // remove whitespace
  str = str.toLowerCase(); // convert to lowercase
  return str;
}

let students;
if (localStorage.length != 0) {
    students = JSON.parse(localStorage.student);
    function search(arr, size, name) {
        name = format(name);
        let subSize = name.length;
        let tableBody = document.querySelector("tbody");
        tableBody.innerHTML = ""; // clear previous

        for (let i = 0; i < size; ++i) {
            if (format(arr[i].name).substr(0, subSize) === name) {
                let row = tableBody.insertRow();
                let nameCell = row.insertCell(0);
                let idCell = row.insertCell(1);
                let levelCell = row.insertCell(2);
                let departmentCell = row.insertCell(3);
                let gpaCell = row.insertCell(4);
                let genderCell = row.insertCell(5);
                let statusCell = row.insertCell(6);

                nameCell.innerHTML = arr[i].name;
                idCell.innerHTML = arr[i].id;
                levelCell.innerHTML = arr[i].level;
                departmentCell.innerHTML = arr[i].department;
                gpaCell.innerHTML = arr[i].gpa;
                genderCell.innerHTML = arr[i].gender;
                statusCell.innerHTML = arr[i].status;
            }
        }
    }
}
// add event listener to search button
      searchBtn.addEventListener("click", function () {
        search(students, students.length, nameInput.value);
      });

