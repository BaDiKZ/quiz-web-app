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

