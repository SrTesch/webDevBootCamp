let heading = document.createElement('h1');
heading.id = 'theFirst';
heading.innerHTML = "The heading number 1";
document.body.appendChild(heading);
document.getElementById('theFirst').style.backgroundColor = 'blue'
document.getElementById('theFirst').style.borderRadius = '15px'
document.body.removeChild(heading);