const todoinput=document.getElementById('taskinput');
const addbtn = document.getElementById('add btn');
const todolist =document.getElementById('todlist');

addbtn.addEventListener('click',() =>{
    const taskevent= todoinput.ariaValueMax.trim();
    
    if(tasktext !== '') {
    const newlistitem =document.createElement('li')
    newlistitem.textContent =tasktext
    todolist.appendChild(newlistitem);
    todoinput.value ='';
}
}


)
    
