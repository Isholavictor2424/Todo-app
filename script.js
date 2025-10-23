

function addTodo() {
    const todoInput = $("#todo-input").val();
    let deleteIcon = `<img class="delete" src="delete.png" style="height: 20px; margin-left: 10px;" alt="">`;
    let icon = ` <img class= "checkbox" src="uncheck.png" style="height: 20px;" alt="">`
    let todoCard = `<li class = "todo-card">${icon} ${todoInput} ${deleteIcon}</li>`;
    if (todoInput) {
        $("#todo-list").append(todoCard);
        $("#todo-input").val('');
    }
}

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
