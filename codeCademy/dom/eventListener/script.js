function getRandomColor(){ //generating a random color to set background!
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.body.style.textAlign = 'center';

let bgChanger = document.getElementById('bgChanger');
bgChanger.style.borderRadius = '5px';
bgChanger.style.padding = '5px';
bgChanger.style.transitionDuration = '.4s'


bgChanger.addEventListener('click', function(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    bgChanger.innerHTML = "Now, the background color is: " + newColor
    wheelChanger.innerHTML = "Now, the background color is: " + newColor
});

bgChanger.addEventListener('mouseover', function(){
    bgChanger.style.backgroundColor = "#000"
    bgChanger.style.color = "#fff"
});

bgChanger.addEventListener('mouseout', function(){
    bgChanger.style.backgroundColor = "#fff"
    bgChanger.style.color = "#000"
});



let wheelChanger = document.getElementById('wheelChanger');
wheelChanger.style.borderRadius = '5px';
wheelChanger.style.padding = '5px';
wheelChanger.style.transitionDuration = '.4s'

wheelChanger.addEventListener('wheel', function(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    wheelChanger.innerHTML = "Now, the background color is: " + newColor
    bgChanger.innerHTML = "Now, the background color is: " + newColor
});
wheelChanger.addEventListener('mouseover', function(){
    wheelChanger.style.backgroundColor = "#000"
    wheelChanger.style.color = "#fff"
});
wheelChanger.addEventListener('mouseout', function(){
    wheelChanger.style.backgroundColor = "#fff"
    wheelChanger.style.color = "#000"
});