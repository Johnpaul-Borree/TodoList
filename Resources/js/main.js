function todo() {
  var textBox = document.getElementById('textBox').value;
  var text = document.createTextNode(textBox);
  if (textBox){
  var newTask = document.createElement('li');
      newTask.appendChild(text);
    uncomplete = document.getElementById('uncompleted');
    uncomplete.insertBefore(newTask, uncomplete.firstChild);
  }
}

var submit = document.getElementById('submit').addEventListener('click', function(){
   todo();
   textBox.value = "";
},false);
