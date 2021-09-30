const toDoForm = document.querySelector('#toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#toDoList');

const DELICON_CN = "fas fa-eraser";
const TODOS_KEY = "toDos";

let toDos = [];

function loadToDos() {
  const currentToDos = localStorage.getItem(TODOS_KEY);
  if (currentToDos !== null) {
    const parsedToDos = JSON.parse(currentToDos);
    
    parsedToDos.forEach(loadedToDo => {
      paintToDo(loadedToDo);
    })
  }
}

function deleteToDo(event) {
  const delBtn = event.target.parentNode;
  const delList = delBtn.parentNode;

  // toDoList.removeChild(delList);
  delList.remove();

  let newToDos = [];
  // toDos.forEach(toDo => {
  //   if (`${toDo.id}` !== delList.id) {
  //     newToDos.push(toDo);
  //   }
  // })

  newToDos = toDos.filter(toDo => {
    return `${toDo.id}` !== delList.id;
  })
  toDos = newToDos;
  saveToDos();
}

function saveToDos() {
  const stringifiedToDos = JSON.stringify(toDos);
  localStorage.setItem(TODOS_KEY, stringifiedToDos);
}

function paintToDo(toDoObj) {
  const list = document.createElement('li');
  const liSpan = document.createElement('span');
  const liBtn = document.createElement('button');
  const delIcon = document.createElement('i');
  // const liId = toDos.length + 1;
  const liId = toDoObj.id;
  liBtn.addEventListener('click', deleteToDo);

  liSpan.innerText = toDoObj.text;

  delIcon.className = DELICON_CN;
  liBtn.appendChild(delIcon);
  
  list.appendChild(liSpan);
  list.appendChild(liBtn);
  list.id = liId;

  toDoList.appendChild(list);

  toDos.push(toDoObj);

  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const toDoValue = toDoInput.value;
  toDoInput.value = '';
  const toDoId = Date.now();

  const toDoObj = {
    text: toDoValue,
    id: toDoId
  };
  
  paintToDo(toDoObj);
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleToDoSubmit);
}

init();