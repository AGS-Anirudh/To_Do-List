let input=document.getElementById("input");
let Tasks=document.querySelector(".tasks");
let AddBtn =document.getElementById("adding");

AddBtn.addEventListener('click',() =>{
    const item =document.createElement('div');
    item.classList.add('todoitems');
    item.innerHTML= `
    <h1>${input.value}</h1>
    <div class="item-btn">
    
    <i class="fa-regular fa-2x fa-circle-check check"></i>
    <i id="delete" class="fa-solid fa-2x fa-trash-can delete"></i>
 
    </div>
    `
    Tasks.appendChild(item);
    input.value=" ";
})
let dustbin=document.querySelector(".delete");
let checkbox=document.querySelector(".check");
Tasks.addEventListener('click',(e) => {
    if(e.target.classList.contains('delete'))
    {
    e.target.parentElement.parentElement.remove();
    }
    else{
        e.target.parentElement.parentElement.classList.add('checked');
    }
})

