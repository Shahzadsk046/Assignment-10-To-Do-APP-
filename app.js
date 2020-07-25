var list = document.getElementById("list")

function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // create li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);

    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.setAttribute("class","btn")
    
    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.setAttribute("class","btn")

    li.appendChild(delBtn);
    li.appendChild(editBtn)

    list.appendChild(li);
    todo_item.value = "";
    console.log(li)
}

function  deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = "";
}

function editItem(e){
    var editVal = prompt("Enter edit value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editVal;
}