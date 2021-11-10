let category=document.getElementsByClassName('category');



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

