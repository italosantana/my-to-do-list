var ul = document.getElementById("myList");
var li;
var itemId;
var item;
var tasks = [];
addTask = function(){
   
    if(document.getElementById("task").value != ""){

        item = document.getElementById("task");
        tasks.push(item.value);
        sessionStorage.setItem("Atividade", JSON.stringify(tasks));

        itemId = ul.childElementCount;
    
        li = createItemEl(item.value, itemId);
        li.appendChild(createRemoveTaskBtn(itemId))
        ul.appendChild(li);
        item.value = "";
   }
}

removeTask = function(itemId){
    for( i = 0 ; i < ul.children.length ; i++){

        if(ul.children[i].getAttribute("index") == itemId ){

            ul.children[i].remove();

        }
    }
}

createItemEl = function(itemValue,itemId){
    let li = document.createElement("li");
    
    li.setAttribute("index", itemId);
    
    li.appendChild(document.createTextNode(itemValue));

    return li;
}

createRemoveTaskBtn = function(itemId){
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeTask("+itemId+")"); 
    btn.innerHTML = "X";
    return btn;
}

let Atividade  = null;

if (typeof(Storage) !== "undefined") {    
    
    tasks = sessionStorage.getItem("Atividade");

   

    if(tasks != null){

       tasks = JSON.parse(tasks);
       console.log(tasks);
      // document.getElementById("task").innerHTML = Atividade;

        tasks.forEach(e => {
            itemId = ul.childElementCount;
            li = createItemEl(e, itemId);
            li.appendChild(createRemoveTaskBtn(itemId))
            ul.appendChild(li);      
        })
    } else {
        tasks = [];
    }
}