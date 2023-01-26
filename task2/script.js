const  consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', function() {
    
  alert('Это вывод информации в консоль')  
})


document.querySelector('#alert').addEventListener('click', 
  (event) => {
    alert('Это подсказка');
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    alert('Это окно для ввода текста');
})