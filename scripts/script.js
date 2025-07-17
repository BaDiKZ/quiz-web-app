const optionButtons = document.querySelectorAll('.option')
.forEach(button => {
    button.addEventListener('click', () => {
         changeWebsite();
    }) 
});

function changeWebsite()
{
    const path = 'pages/htmlQuiz.html';
    window.location.href = path;
}
