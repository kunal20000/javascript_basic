const submitBtn = document.getElementById("submit-btn");
// write your code here
// const form = document.querySelector('form');
// form.addEventListener('click',(event)=>{
//     event.preventDefault();
// })
submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
})

const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");
let output = document.querySelector(".output");

firstDiv.addEventListener("click", (event) => {

    output.innerText += "first div called";
});

secondDiv.addEventListener("click", (event) => {
    // write your code here
    event.stopPropagation();
    output.innerText += "second div called -- ";
});