//-------------------Stars----------------------

let html = '';
const starsCointainer = document.body.querySelector('.stars');
let stars = null;

for(let i = 0;i < 50;i++) // generowanie gwiazdek
{
    html += '<span class="star">&#9830</span>';
}

starsCointainer.innerHTML = html;

stars = document.body.querySelectorAll('.star');
stars.forEach(star => {
    star.style.top = Math.floor(Math.random() * 101) + '%';
    star.style.left = Math.floor(Math.random() * 101) + '%';
});
//--------------------Script-------------------
let choosenOption = null;
let options = ['html','angler','cats','dogs'];

const optionButtons = document.querySelectorAll('.option')
.forEach(button => {
    button.addEventListener('click', () => {
        choosenOption = choosenOptionAsNumber(button.title);
        localStorage.setItem('choosen',choosenOption);
        changeWebsite();
    })
});

function changeWebsite()
{
    const path = 'pages/htmlQuiz.html';
    window.location.href = path;
}

function choosenOptionAsNumber(title)
{
    for(let i = 0;i < options.length;i++){
        if(options[i] === title){
            return i;
        }
    }
}

