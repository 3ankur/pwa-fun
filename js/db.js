
//for indexDB
db.enablePersistence()
.catch(err=>{
    if(err.code === 'failed-precondition'){
        //multipal tabs open
    }
    else if(err.code === 'unimflimented'){
        // browser not supported
    }
})

//console.log("here  ",db);
db.collection('todoList').onSnapshot((snapshot)=>{
   // console.log(snapshot.docChanges());

   snapshot.docChanges().forEach(change=>{

    if(change.type === 'added'){

            renderTodoItem(change.doc.data(),change.doc.id);
    }

    if(change.type === 'removed'){
        removeTodoItem(change.doc.id);
    }

   })
})

// add new todo

const form =document.querySelector('form');
form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    let newTodo = {
        title :form.title.value,
        description: form.description.value,
        createdAt: new Date()
    }

    db.collection('todoList').add(newTodo).catch((err)=>{
        console.log(err)
    })
    form.title.value ='';
    form.description.value='';
})


function deleteTodoItem(id){
        db.collection(`todoList`).doc(id).delete().catch(e=>{
            console.log(e);
        })
}