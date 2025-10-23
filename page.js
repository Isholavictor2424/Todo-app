
const name = localStorage.getItem("username");
$("#helloName").text(`Hello, ${name}!😊`);
function addTodo() {
    const todoInput = $("#todo-input").val();
    if (todoInput.trim() === "") {
        alert("Please enter a todo item.");
        return;
    }
    let deleteIcon = `<img class="delete" src="delete.png" style="height: 20px; margin-left: 10px;" alt="">`;
    let icon = ` <img class= "checkbox" src="uncheck.png" style="height: 20px;" alt="">`
    let todoCard = `<li class = "todo-card">${icon} ${todoInput} ${deleteIcon}</li>`;
    if (todoInput) {
        $("#todo-list").append(todoCard);
        $("#todo-input").val('');
    }
}

function deleteTodo() {
    $(document).on("click", ".delete", function () {
        $(this).parent().remove();
    });
}

deleteTodo();


$("#todo-form").on("submit", function (event) {
    event.preventDefault();
    addTodo();
});

// $("img").click(function (){
//     const currentSRC = $(this).attr("src");

//     if (currentSRC ==="uncheck.png"){
//         $(this).attr("src","checkbox.png");
//     } else {
//         $(this).attr("src","checkbox.png");
//     }
// })

$(document).on("click", ".checkbox", function () {
    const currentSRC = $(this).attr("src");

    if (currentSRC === "uncheck.png") {
        $(this).attr("src", "checkbox.png");
    } else {
        $(this).attr("src", "uncheck.png");
    }
})
$("#reset").click(function(){
    $("#todo-list").empty();
})