window.addEventListener('load',()=>{
    const form = document.querySelector('#todo-form');
    const input = document.querySelector('#todo-input');
    const list = document.querySelector('#todo-tasks');
    
    form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todo = input.value;
    if(!todo){
        return;
    }

//Create Elements
const todo_div = document.createElement("div")
todo_div.classList.add("todo")
list.appendChild(todo_div);

const todo_div_content = document.createElement("div")
todo_div_content.classList.add("content")
todo_div.appendChild(todo_div_content);

const todo_input = document.createElement("input")
todo_input.classList.add("text")
todo_input.type = "text";
todo_input.value =todo;
todo_input.setAttribute("readonly" ,"readonly");
todo_div_content.appendChild(todo_input);

const todo_div_actions = document.createElement("div")
todo_div_actions.classList.add("actions")
todo_div.appendChild(todo_div_actions);

const todo_button_edit = document.createElement("button");
todo_button_edit.classList.add("Edit");
todo_button_edit.innerHTML ="Edit";

const todo_button_delete = document.createElement("button");
todo_button_delete.classList.add("Delete");
todo_button_delete.innerHTML ="Delete";

const todo_button_completed = document.createElement("button");
todo_button_completed.classList.add("Completed");
todo_button_completed.innerHTML ="Completed";

todo_div_actions.appendChild(todo_button_edit);
todo_div_actions.appendChild(todo_button_delete);
todo_div_actions.appendChild(todo_button_completed);
todo_button_edit.addEventListener('click',()=>{
    if(todo_button_edit.innerText.toLowerCase() == "edit"){
        todo_input.removeAttribute("readonly");
        todo_input.focus();
        todo_button_edit.innerText = "Save";
        todo_input.style.textDecoration = "none";

    }else{
        todo_input.setAttribute("readonly" , "readonly");
        todo_button_edit.innerText = "Edit";
    }
});

//delete a list item
todo_button_delete.addEventListener('click',()=>{
    if(confirm("Are you sure you want to delete this task?")){
        list.removeChild(todo_div);
    }

});
//remove a item when clicking on completed button
todo_button_completed.addEventListener('click' ,()=>{
    todo_input.style.textDecoration= "line-through";
    todo_input.setAttribute("readonly" ,"readonly");
})

input.value = " ";
    })
});
