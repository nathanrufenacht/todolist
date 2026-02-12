const API = "/api/tasks";
let selectedTaskId = null;

function showMessage(msg, type = "success") {
    const el = document.getElementById("message");
    el.innerText = msg;
    el.className = type;
}

async function loadTasks() {
    const res = await fetch(API);
    const tasks = await res.json();

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        const li = document.createElement("li");
        li.classList.add(tasks[i].priority);

        if (tasks[i].id === selectedTaskId) {
            li.classList.add("selected");
        }

        // Task text
        const textSpan = document.createElement("span");
        textSpan.innerText = tasks[i].text;
        textSpan.className = "task-text";

        textSpan.onclick = () => {
            selectedTaskId = tasks[i].id;
            document.getElementById("taskText").value = tasks[i].text;
            document.getElementById("taskPriority").value = tasks[i].priority;
            document.getElementById("updateBtn").disabled = false;
            showMessage("Editing task...");
            loadTasks();
        };

        // Priority badge
        const priorityTag = document.createElement("span");
        priorityTag.innerText = tasks[i].priority.toUpperCase();
        priorityTag.className = `priority-tag ${tasks[i].priority}`;

        // Debug ID
        const idSpan = document.createElement("span");
        idSpan.innerText = ` (ID: ${tasks[i].id})`;
        idSpan.className = "debug-id";

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.id = "delete-btn";
        deleteBtn.onclick = () => deleteTask(tasks[i].id);

        li.appendChild(textSpan);
        li.appendChild(priorityTag);
        li.appendChild(idSpan);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    }
}

async function addTask() {
    const text = document.getElementById("taskText").value.trim();
    const priority = document.getElementById("taskPriority").value;

    const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, priority })
    });

    const data = await res.json();

    if (res.status === 201) {
        showMessage("Task Created");
        clearFields();
        loadTasks();
    } else {
        showMessage(data.message, "error");
    }
}

async function updateTask() {
    const text = document.getElementById("taskText").value.trim();
    const priority = document.getElementById("taskPriority").value;

    if (!selectedTaskId) {
        showMessage("Select a task first", "error");
        return;
    }

    const res = await fetch(`${API}/${selectedTaskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, priority })
    });

    const data = await res.json();

    if (res.status === 200) {
        showMessage("Task Updated");
        clearFields();
        loadTasks();
    } else {
        showMessage(data.message, "error");
    }
}

async function deleteTask(id) {
    const res = await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    const data = await res.json();

    if (res.status === 200) {
        showMessage("DELETED");
        loadTasks();
    } else {
        showMessage(data.message, "error");
    }
}

function clearFields() {
    selectedTaskId = null;
    document.getElementById("taskText").value = "";
    document.getElementById("taskPriority").value = "low";
    document.getElementById("updateBtn").disabled = true;
    showMessage("Fields Cleared");
    loadTasks();
}

loadTasks();
