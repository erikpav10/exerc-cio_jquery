$(document).ready(function() {
    const $taskInput = $("#task-input");
    const $addButton = $("#add-button");
    const $taskList = $("#task-list");

    $addButton.on("click", addTask);
    
    $taskInput.on("keyup", function(event) {
        if (event.key === "Enter") {
        addTask();
        }
    });

    $taskList.on("click", "li", function() {
        $(this).toggleClass("completed");
    });

    function addTask() {
        const taskText = $taskInput.val().trim();

        if (taskText !== "") {
        const existingTask = $taskList.find("li").filter(function() {
            return $(this).text() === taskText && !$(this).hasClass("completed");
        });
        
        if (existingTask.length > 0) {
            alert("Tarefa duplicada: Esta tarefa já está na lista como não concluída.");
        } else {
            const $listItem = $("<li></li>").text(taskText);
            $taskList.append($listItem);
            $taskInput.val("");
        }
        }
    }
});
