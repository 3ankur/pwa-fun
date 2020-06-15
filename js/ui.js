const itemsDiv = document.querySelector(".recipes");

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

//render item

const renderTodoItem = (data,id) =>{

  const html= `
  <div class="card-panel recipe white row" data-id="${id}">
  <img src="/img/todo.png" alt="recipe thumb">
  <div class="recipe-details">
    <div class="recipe-title">${data.title}</div>
    <div class="recipe-ingredients">${data.description}</div>
  </div>
  <div class="recipe-delete" onclick="deleteTodoItem('${id}')">
    <i data-id="${id}" class="material-icons">delete_outline</i>
  </div>
</div>
  `;


  itemsDiv.innerHTML+= html;
}

const removeTodoItem = (id) =>{
  
  const item  = document.querySelector(`.recipe[data-id=${id}]`);
  item.remove();
}