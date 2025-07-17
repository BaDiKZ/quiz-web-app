const optionButtons = document.querySelectorAll('.option')
.forEach(button => {
    const choosenOption = button.classList;
    console.log(choosenOption);
    button.addEventListener('click', () => {
         changeWebsite();
    })
});

function changeWebsite()
{
    const path = 'pages/htmlQuiz.html';
    window.location.href = path;
}
