   document.getElementById('todo-form').addEventListener('submit', function(e) {
       e.preventDefault();
       addTask();
   });

   function addTask() {
       const taskInput = document.getElementById('task-input').value;
       const dateInput = document.getElementById('date-input').value;

       // Validate input
       if (taskInput === '' || dateInput === '') {
           alert('Please enter both task and date.');
           return;
       }

       const todoList = document.getElementById('todo-list').getElementsByTagName('tbody')[0];
       const newRow = todoList.insertRow();

       newRow.innerHTML = `
           <td>${taskInput}</td>
           <td>${dateInput}</td>
           <td>Pending</td>
           <td><button onclick="deleteTask(this)">Delete</button></td>
       `;

       document.getElementById('task-input').value = '';
       document.getElementById('date-input').value = '';
   }

   function deleteTask(button) {
       const row = button.parentNode.parentNode;
       row.parentNode.removeChild(row);
   }

   document.getElementById('delete-all-button').addEventListener('click', function() {
       const todoList = document.getElementById('todo-list').getElementsByTagName('tbody')[0];
       todoList.innerHTML = '<tr><td colspan="4">No task found</td></tr>'; 
   });
   