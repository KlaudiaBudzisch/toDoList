const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('div.task-number span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
const deleteBtn = document.querySelector('button.remove');

const removeIcon = `<i id="remove" class="fas fa-times"></i>`;
const doneIcon = `<i id="done" class="fas fa-check"></i>`;

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

const doneTask = (e) => {
    e.target.classList.toggle("clicked");
}

const addTask = (e) => {
    e.preventDefault()
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + removeIcon + doneIcon;
    ul.appendChild(task);
    input.value = "";
    taskNumber.textContent = listItems.length;

    task.querySelector('#remove').addEventListener('click', removeTask);
    task.querySelector('#done').addEventListener('click', doneTask);
}

const deleteAll = function () {
    ul.innerHTML = "";
    input.value = "";
    taskNumber.textContent = listItems.length;
}


form.addEventListener('submit', addTask);
deleteBtn.addEventListener('click', deleteAll);


// pdf conventer

var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('#content').html(), 50, 30, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.save('to-do-list-file.pdf');
});