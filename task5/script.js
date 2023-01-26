const input = document.getElementById('usertext')
const textP = document.getElementById('duplicateField') 

input.addEventListener('input', (event) => {
    textP.textContent = event.target.value
})

document.querySelector('button').onclick = myClick;
function myClick(){
    event.preventDefault();
    textP.textContent = " "
    let a = document.getElementById('usertext').value;
    console.log(a);
    document.getElementById("usertext").value = ""
}
