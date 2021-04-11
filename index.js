const input = document.getElementById('input')
const close = document.querySelector('.close')

function showCloseIcon(){
    if(input.value == ""){
        close.style.display = "none"
    } else {
        close.style.display = "flex"
    }
}

input.addEventListener('keyup', showCloseIcon)
  

close.addEventListener('click', function(){
    input.value = ""
})