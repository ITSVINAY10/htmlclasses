const myDiv = document.getElementById('main')
let c = 0;
function createData ()
{
    const todoDiv = document.createElement("div") //<div></div>
	todoDiv.classList.add("todo")
	const para = document.createElement("p") //<p></p>
    para.textContent = ++c; //<p></p>

    // <div id="main"><p>hello world</p></div>
    const deleteButton = document.createElement("button")
    deleteButton.textContent = '❌';
    
    deleteButton.addEventListener('click', function() {
        myDiv.removeChild(todoDiv);
    });
  
    todoDiv.append(para,deleteButton)
    myDiv.appendChild(todoDiv)
    document.getElementById('addButton').addEventListener('click', createData );
}