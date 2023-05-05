//Pop up login
const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formBox = document.querySelector(".formBox"),
    formCloseBtn = document.querySelector(".form_close"),
    singupBtn = document.querySelector("#singup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");


formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"))

pwShowHide.forEach(icon => {
    icon.addEventListener('click', () => {
        let getPwInput = icon.parentElement.querySelector('input');
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace('fa-regular fa-eye-slash', "fa-regular fa-eye")
        }else{
            getPwInput.type = "password";
            icon.classList.replace('fa-regular fa-eye', "fa-regular fa-eye-slash")
        }
    })
})

singupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formBox.classList.add("active");
})
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formBox.classList.remove("active");
})


//Barra de pesquisa
let searchBtn = document.querySelector('.openBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');

searchBtn.onclick = function execute(){
    searchBox.classList.add('active')
}
closeBtn.onclick = function close(){
    searchBox.classList.remove('active')
} 

//blog show more, show less
var delay = 260;
function changeText() {
    var label = document.getElementById("myLabel");
    if (label.innerHTML === "Ver mais") {
      label.innerHTML = "Ver menos";
    } else {
        setTimeout(function() {
            label.innerHTML = "Ver mais";
          }, delay);
    }
  }