let students;
if (localStorage.length != 0) {
    students = JSON.parse(localStorage.student);
    let studentList = document.getElementById('studentsTable');

    studentList.addEventListener('load', () => {
        let idx = 1;
        students.forEach(student => {
            let row = document.createElement('tr');
            let id = document.createElement('td');
            let name = document.createElement('td');
            let gpa = document.createElement('td');
            let dept = document.createElement('td');
            let gender = document.createElement('td');
            let birthDate = document.createElement('td');
            let status = document.createElement('td');
            let statSelect = document.createElement('select');
            let statOption1 = document.createElement('option');
            let statOption2 = document.createElement('option');
            statOption1.value = 'active';
            statOption1.text = 'Active';
            statOption2.value = 'inactive';
            statOption2.text = 'Inactive';
            statSelect.id = 'status' + idx;
            statSelect.appendChild(statOption1);
            statSelect.appendChild(statOption2);
            status.appendChild(statSelect);
            id.innerHTML = students[0].id;
            name.innerHTML = students[0].first_name + student[0].last_name;
            gpa.innerHTML = students[0].gpa;
            dept.innerHTML = students[0].department;
            gender.innerHTML = students[0].gender;
            birthDate.innerHTML = students[0].date;
            status.innerHTML = students[0].status;
            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(gpa);
            row.appendChild(dept);
            row.appendChild(gender);
            row.appendChild(birthDate);
            row.appendChild(status);
            studentList.appendChild(row);
            idx++;
        });
    });

    let edit = document.getElementById('edit');
    edit.addEventListener('click', () => {
        let idx = 1;
        students.forEach(student => {
            let statSelect = document.getElementById('status' + idx);
            student.status = statSelect.value;
            idx++;
        });
        alert('Edit Successful');
    });
}