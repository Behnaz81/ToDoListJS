let numberOfTasks = 0

document.getElementById("addTaskForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const newTask = document.getElementById("task");

    if(newTask.value !== "") {
    
        if(numberOfTasks === 0){
            document.getElementById("noTask").remove();
        }

        numberOfTasks += 1;

        const tableBody = document.getElementById("tableBody");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td scope=\"row\">${numberOfTasks}</td>
            <td>${newTask.value}</td>
            <td><button class=\"btn btn-danger\">Delete</button></td>
        `;

        tableBody.appendChild(row);

        newTask.value = "";
    }
})