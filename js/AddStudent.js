let fname = document.querySelector('.first-name');
let lname = document.querySelector('.last-name');
let email = document.querySelector('.email');
let mobile = document.querySelector('.mobile-number');
let level = document.querySelector('.level');
let id = document.querySelector('.id');
let gpa = document.querySelector('.gpa');
let department = document.querySelector('.department');
let active_status = document.getElementById('status1');
let inactive_status = document.getElementById('status2');
let date = document.querySelector('.date');
let m_gender = document.getElementById('gender1');
let f_gender = document.getElementById('gender2');
let submit = document.querySelector('#submit');
let reset = document.querySelector('#reset');
let students;
if (localStorage.length != 0) {
    students = JSON.parse(localStorage.student);
}
else {
    students = [];
}
function clear_data() {
    fname.value = '';
    lname.value = '';
    email.value = '';
    mobile.value = '';
    level.value = '';
    id.value = '';
    gpa.value = '';
    department.value = '';
    date.value = '';
}
function submit_data() {
    let new_student = {
        first_name: fname.value,
        last_name: lname.value,
        email: email.value,
        mobil_number: mobile.value,
        level: level.value,
        id: id.value,
        gpa: gpa.value,
        department: department.value,
        date: date.value,
    };
    if (active_status.checked) {
        new_student.status = 'active';
    }
    else if (inactive_status.checked) {
        new_student.status = 'inactive';
    }
    if (m_gender.checked) {
        new_student.gender = 'male';
    }
    else if (f_gender.checked) {
        new_student.gender = 'female';
    }
    students.push(new_student);
    localStorage.student = JSON.stringify(students);
    window.alert('You have added a new student successfully');
    clear_data();
}