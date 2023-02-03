let heading1 = document.querySelector('h1')
const changeColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    
    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

setInterval(()=>{
    changeColor(heading1);
}, 700);


let text = ["Eu te amo", "I Love you", "Te quiero", "Ich Liebe Dich", "Je t'aime", "Ti voglio bene", "Я тебя люблю", "愛してる", "사랑해"]
let counter = 0;
setInterval(()=>{
    heading1.innerHTML = text[counter];
    counter++;
    if(counter >= text.length)
        counter = 0;
},700)