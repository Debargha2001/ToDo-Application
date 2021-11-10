let category=document.getElementsByClassName('category');
let taskCards = document.getElementsByClassName('checkboxes');
let description =document.getElementsByClassName('description');

// assigning colors to the category of tasks
const categoryColor = function(){
    let categoryName = ['Personal','Work','School','Cleaning','Other'];
    let categoryColor = ['#006080','#eb33ff','#cc3300','#F48024','#804000'];
    for(var i=0;i<category.length;i++){
        category[i].style.backgroundColor = categoryColor[categoryName.indexOf(category[i].innerText)];
    }
}
// calling the function
categoryColor();

// function to add line-through to the checked tasks
const strikeThrough = function(){
    for(let i=0;i<taskCards.length;i++){
        taskCards[i].addEventListener('click',function(){
            if(taskCards[i].checked==true){
                description[i].style.textDecoration = 'line-through';
            }
        });
    }
}

// calling the function
strikeThrough();

// adding eventListener for click event
let deletetaskBtn = document.getElementById('del-task');
deletetaskBtn.addEventListener('click',function(event){
    let checked_boxes = document.querySelectorAll('input[type=checkbox]:checked');
    let checked_boxs_arr = Array.from(checked_boxes);
    let checked_ids = checked_boxs_arr.map(box => {
        return box.getAttribute('value');
    });
    $.post('/delete-tasks',{checked:checked_ids},function(){
        window.location.href='/';
    });
}); 

