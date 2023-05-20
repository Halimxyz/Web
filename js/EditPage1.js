'use strict';
let students;
if (localStorage.length != 0) {
    students = JSON.parse(window.localStorage.getItem('Data'));
    let index = 0;
    const init = function () {
        document.getElementById('FName').value = students[index].first_name;
        document.getElementById('LName').value = students[index].last_name;
        document.getElementById('EM').value = students[index].email;
        document.getElementById('Phone').value = students[index].mobile;
        document.getElementById('lvl').value = students[index].level;
        document.getElementById('ID').value = students[index].id;
        document.getElementById('GPA').value = students[index].gpa;
        document.getElementById('Dept').value = students[index].department.toUpperCase();
        document.getElementById('Date').value = students[index].date;
        let status_value = students[index].status;

        if (status_value === 'active') {
            document.getElementById('Active').checked = true;
        }
        else {
            document.getElementById('Inactive').checked = true;
        }

        let gender_value = students[index].gender;

        if (students[index].gender === 'male') {
            document.getElementById('Male').checked = true;
        }
        else if (gender_value === 'female') {
            document.getElementById('Female').checked = true;
        }
    }

    const submit = function () {
        if (document.getElementById('Active').checked === true) {
            students[index].status = 'active';
        }
        else if (document.getElementById('Inactive').checked === true) {
            students[index].status = 'inactive';
        }

        if (document.getElementById('Male').checked === true) {
            student[index].gender = 'male';
        }
        else if (document.getElementById('Female').checked === true) {
            students[index].gender = 'female';
        }

        students[index].first_name = document.getElementById('FName').value;
        students[index].last_name = document.getElementById('LName').value;
        students[index].email = document.getElementById('EM').value;
        students[index].mobile = document.getElementById('Phone').value;
        students[index].level = document.getElementById('lvl').value;
        students[index].id = document.getElementById('ID').value;
        students[index].gpa = document.getElementById('GPA').value;
        students[index].date = document.getElementById('Date').value;

        window.location.href = "students.html";

    }

    const deleteStudent = function () {
        students.splice(index, 1);
        alert("Student removed successfully!");
        // redirect to students page
        window.location.href = "students.html"; // todo fix redirection location reference
    }

    init();

    const submitButton = document.getElementById('submission-button');
    const resetButton = document.getElementById('reset-button');
    const deleteButton = document.getElementById('delete-button');

    deleteButton.addEventListener('click', deleteStudent)
    submitButton.addEventListener('click', submit)

    resetButton.addEventListener('click', init
        /* function () {
            document.getElementById('FName').value = '';
            document.getElementById('LName').value = '';
            document.getElementById('EM').value = '';
            document.getElementById('Phone').value = '';
            document.getElementById('lvl').value = '';
            document.getElementById('ID').value = '';
            document.getElementById('GPA').value = '';
            document.getElementById('Dept').value = '';
            document.getElementById('Date').value = '';
            if (document.getElementById('Active').checked.checked) {
                students[index].status = 'active';
            }
            else {
                students[index].status = 'inactive';
            }
            if (document.getElementById('Male').checked.checked) {
                students[index].gender = 'male';
            }
            else {
                students[index].gender = 'female';
            }
    
            students[index].first_name = document.getElementById('FName').value;
            students[index].last_name = document.getElementById('LName').value;
            students[index].email = document.getElementById('EM').value;
            students[index].mobile = document.getElementById('Phone').value;
            students[index].level = document.getElementById('lvl').value;
            students[index].id = document.getElementById('ID').value;
            students[index].gpa = document.getElementById('GPA').value;
            students[index].date = document.getElementById('Date').value;
        } */
    );
}

