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
            <td class=\"title\">${newTask.value}</td>
            <td><input class=\"form-check-input complete\" type=\"checkbox\"></td>
            <td><button class=\"btn btn-danger deleteTask\">Delete</button></td>
        `;

        tableBody.appendChild(row);

        newTask.value = "";

        row.querySelector(".deleteTask").addEventListener("click", function() {
            row.remove();
            numberOfTasks -= 1;

            if(numberOfTasks === 0) {
                const rowNoTask = document.createElement("tr");
                rowNoTask.innerHTML = "<td colspan=\"3\" class=\"text-center fw-bold\" id=\"noTask\">No task to display.</td>";
                tableBody.appendChild(rowNoTask);
            } else {
                updateRows();
            }
        });

        const checklist = row.querySelector(".complete");

        checklist.addEventListener("click", function() {
            checklist.disabled = true;
            row.querySelector(".title").classList.toggle("text-decoration-line-through")

        })
    }
});

function updateRows() {
    const rows = document.querySelectorAll("#tableBody tr");
    let count = 1;

    rows.forEach(row => {
        if(row.querySelector("td")) {
            row.querySelector("td").textContent = count;
            count++;
        }
    });
}