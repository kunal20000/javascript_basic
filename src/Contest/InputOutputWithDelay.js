const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const toggleBtn = document.getElementById("toggleinputs");
const countPara = document.getElementById('count');
const textOutput = document.getElementById('textoutput');

let timeoutId;
input2.disabled = true;
input2.style.display = 'none';

toggleBtn.addEventListener('click', ()=>{
    countPara.textContent = "";
    textOutput.textContent = '';

    if(input2.disabled=== true){
        input2.disabled = false;
        input2.style.display = 'block';

    }else{
        input2.disabled = true;
        input2.style.display = 'none';
    }
})

input1.addEventListener('keyup', ()=>{
    countPara.textContent = '';
    textOutput.textContent='';
    const inputValue = input1.value;
    countPara.textContent = `${inputValue.length} characters`;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=>{
        textOutput.textContent = inputValue;
        input1.value ='';
        countPara.textContent = '';

    }, 4000);
})

input2.addEventListener('keyup', ()=>{
    countPara.textContent ='';
    textOutput.textContent='';
    const inputValue = input2.value;
    const words = inputValue.split(/\s+/).filter(word=>word.trim().length>0);

    countPara.textContent = `${words.length} words`;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=>{
       textOutput.textContent =  inputValue;
       input2.value = '';
       countPara.textContent = '';
    }, 4000)
})