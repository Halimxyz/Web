let students;
if (localStorage.student != 0) {
    students = JSON.parse(localStorage.student);
    document.getElementById("fname").value = students[0].first_name;
    document.getElementById("lname").value = students[0].last_name;
    document.getElementById("Sid").value = students[0].id;
    let selectvalue = document.getElementById("SELdeprt").value;
    let submit = document.getElementById('submit');
    submit.onclick = function () {
        if (student[0].level != 3) {
            window.alert('Error, this student should be at level 3 to assign the department');
        }
        else {
            students[0].department = selectvalue;
        }
    }
}