let boxCreat = document.forms.boxCreat;
boxCreat.show.addEventListener('click', () => {
    boxCreat.buttonUp.disabled = event.target.checked ? false : true;
    boxCreat.buttonUp.style.backgroundColor = event.target.checked ? '#239923' : '#47d447';
})
boxCreat.buttonUp.addEventListener('click', () => {
    let boxOne = document.getElementById('boxOne');
    let boxTwo = document.getElementById('boxTwo');
    if (boxCreat.firstName.value === '' || boxCreat.secondName.value === '' || boxCreat.selectchoose.value === 'Choose'){
        boxCreat.buttonUp.disabled = true;
    }
    else {
        document.querySelector('.firstSecond').textContent = boxCreat.firstName.value + ' ' + boxCreat.secondName.value;
        document.querySelector('.formemail').textContent = boxCreat.emailform.value;
        document.querySelector('.position').textContent = boxCreat.selectchoose.value;
        boxOne.style.display = 'none';
        boxTwo.style.display = 'block';
    }
})       
document.getElementById('buttonRadio').addEventListener('click', () => {
    document.getElementById('manPhoto').style.display = event.target.value == 'woman'? 'none' : 'block';
})

let boxFinish = document.forms.boxFinish;
boxFinish.submitbutton.addEventListener('mouseover', () => {
    event.target.style.color = 'white';
    event.target.style.backgroundColor = '#70e470';
})
boxFinish.submitbutton.addEventListener('mouseout', () => {
    event.target.style.color = '#70e470';
    event.target.style.backgroundColor = 'white';
})
