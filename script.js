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
let more = document.querySelector('#more'), 
    view = document.querySelector(".view"),
    isActivated = false,
    originalText = more.textContent;

more.addEventListener("click", () => {
  if (!isActivated) {
    view.classList.add("show");
    more.textContent = "Ver menos";
  } else {
    view.classList.remove("show");
    more.textContent = originalText;
  }
  
  isActivated = !isActivated;
});
let more2 = document.querySelector('#more2'), 
    view2 = document.querySelector(".view2"),
    isActivated2 = false,
    originalText2 = more2.textContent;

more.addEventListener("click", () => {
  if (!isActivated2) {
    view.classList.add("show");
    more.textContent = "Ver menos";
  } else {
    view.classList.remove("show");
    more.textContent = originalText2;
  }
  
  isActivated2 = !isActivated2;
});






/* 
let more = document.querySelector('#more'), 
    view = document.querySelector(".view")
more.addEventListener("click", () => view.classList.add("show")) */

/* 

more.addEventListener("click", () => {
    view.classList.add("show");
    more.textContent = "Ver menos";});

more.addEventListener("click", () => {
    view.classList.remove("show");
    more.textContent = "Ver mais";}); */