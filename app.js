let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add button disabled

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

//add new item to the list

addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class = "item-btn">
            <i class ="fa-solid fa-square-check"></i>
            <i class="fa-solid fa-circle-xmark"></i>
        <div>
        `
        tasks.appendChild(newItem);
        input.value ='';
    } else {
        alert(' PLEASE ENTER A TASK!!')
    }

})

//Delete from list

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-circle-xmark')){
        e.target.parentElement.parentElement.remove();
    }
});

//Mark item as Completed

tasks.addEventListener('click', (a) => {
    if(a.target.classList.contains('fa-square-check')){
        a.target.parentElement.parentElement.classList.toggle('completed')
    }
});

//Edit item
// <i class="fa-solid fa-pen-to-square"></i>


