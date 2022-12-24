let form=document.querySelector("form");
let search=document.querySelector(".btn")
let input= document.querySelector(".input")
// console.log(btn);

search.addEventListener("click", ()=>{
    form.classList.toggle("active");
    input.focus();
})