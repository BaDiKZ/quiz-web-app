

const optionButtons = document.querySelectorAll('.option')
.forEach(button => {
    button.addEventListener('click', () => {
        let choosenOption = choosenOptionAsNumber(Array.from(button.classList)[1]);

        changeWebsite();
    })
});
export const exportedOption = choosenOption;
function changeWebsite()
{
    const path = 'pages/htmlQuiz.html';
    window.location.href = path;
}

function choosenOptionAsNumber(choosenOption)
{
    if(choosenOption === 'html'){
        return 0;
    }
    else if(choosenOption === 'angler'){
        return 1;
    }
    else if(choosenOption === 'cats'){
        return 2;
    }
    else if(choosenOption === 'dogs'){
        return 3;
    }
    else{
        return console.error('imposible');
    }

}
