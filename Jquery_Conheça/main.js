$(document).ready(function () {
    // Adicionar tarefa ao clicar no botão
    $("#add-button").click(function () {
        const taskInput = $("#task-input");
        const taskText = taskInput.val();
        if (taskText) {
            const taskList = $("#tasks");
            const li = $("<li>").text(taskText);
            taskList.append(li);
            taskInput.val('');
        }
    });

    // Alternar a classe "completed" ao clicar em um item da lista
    $("#tasks").on("click", "li", function () {
        $(this).toggleClass("completed");
    });
});