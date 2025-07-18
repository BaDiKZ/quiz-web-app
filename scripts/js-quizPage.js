const choosenOption = localStorage.getItem('choosen');
const quizzes = [
    [
    {
        question: 'Co oznacza skrót HTML?',
        answers: ['Hyper Trainer Marking Language', 'HyperText Markup Language', 'HyperText Markdown Language', 'Hyper Transfer Markup Language'],
        correct: 'HyperText Markup Language'
    },

    {
        question: 'Który tag służy do tworzenia nagłówka?',
        answers: ['<head>', '<h1>', '<title>', '<p>'],
        correct: '<h1>'
    },
    {
        question: 'Jak dodajesz obrazek w HTML?',
        answers: ['<img>', '<image>', '<pic>', '<src>'],
        correct: '<img>'
    },
    {
        question: 'Który atrybut otwiera link w nowej karcie?',
        answers: ['target="_self"', 'target="_blank"', 'open="true"', 'newtab'],
        correct: 'target="_blank"'
    },
    {
        question: 'Który tag tworzy listę numerowaną?',
        answers: ['<ul>', '<ol>', '<li>', '<list>'],
        correct: '<ol>'
    },
    {
        question: 'Jakiego tagu używasz do pogrubienia tekstu?',
        answers: ['<strong>', '<bold>', '<b>', '<em>'],
        correct: '<b>'
    },
    {
        question: 'Który element zawiera metadane strony?',
        answers: ['<head>', '<body>', '<meta>', '<footer>'],
        correct: '<head>'
    },
    {
        question: 'Który tag tworzy hiperłącze?',
        answers: ['<a>', '<link>', '<href>', '<url>'],
        correct: '<a>'
    },
    {
        question: 'Jak oznaczysz komentarz w HTML?',
        answers: ['<!-- komentarz -->', '// komentarz', '# komentarz', '/* komentarz */'],
        correct: '<!-- komentarz -->'
    },
    {
        question: 'Który atrybut obrazu zawiera tekst alternatywny?',
        answers: ['alt', 'title', 'desc', 'name'],
        correct: 'alt'
    }
    ],

    [
    {
        question: 'Jak nazywa się metoda łowienia z użyciem przynęty sztucznej?',
        answers: ['Spławik', 'Grunt', 'Spinning', 'Muchówka'],
        correct: 'Spinning'
    },
    {
        question: 'Czym mierzy się wagę ryby?',
        answers: ['Miarką', 'Wagą', 'Sonarem', 'Echosondą'],
        correct: 'Wagą'
    },
    {
        question: 'Jaką rybę łowi się najczęściej w Polsce?',
        answers: ['Łosoś', 'Karp', 'Pstrąg', 'Sum'],
        correct: 'Karp'
    },
    {
        question: 'Jak nazywa się miejsce do łowienia ryb?',
        answers: ['Rybak', 'Łowisko', 'Port', 'Stanowisko'],
        correct: 'Łowisko'
    },
    {
        question: 'Co to jest haczyk?',
        answers: ['Ciężarek', 'Zaczep', 'Część wędki', 'Element zestawu do łowienia'],
        correct: 'Element zestawu do łowienia'
    },
    {
        question: 'Jak nazywa się mała rybka używana jako przynęta?',
        answers: ['Larwa', 'Rosówka', 'Zanęta', 'Żywiec'],
        correct: 'Żywiec'
    },
    {
        question: 'Czym jest kołowrotek?',
        answers: ['Typem ryby', 'Przynętą', 'Częścią wędki', 'Rodzajem łodzi'],
        correct: 'Częścią wędki'
    },
    {
        question: 'Czym jest zanęta?',
        answers: ['Pokarm wabiący ryby', 'Rodzaj ryby', 'Technika łowienia', 'Typ spławika'],
        correct: 'Pokarm wabiący ryby'
    },
    {
        question: 'Która ryba ma wąsy?',
        answers: ['Pstrąg', 'Karp', 'Sum', 'Szczupak'],
        correct: 'Sum'
    },
    {
        question: 'Jaki sprzęt pokazuje ryby pod wodą?',
        answers: ['Radar', 'Lornetka', 'Echosonda', 'Mikroskop'],
        correct: 'Echosonda'
    }
    ],

    [
    {
        question: 'Ile żyć ma kot według przesądu?',
        answers: ['3', '7', '9', '12'],
        correct: '9'
    },
    {
        question: 'Czym kot najchętniej się bawi?',
        answers: ['Piłką', 'Kijem', 'Włóczką', 'Kością'],
        correct: 'Włóczką'
    },
    {
        question: 'Jak się nazywa dziki przodek kota domowego?',
        answers: ['Ryś', 'Puma', 'Kot nubijski', 'Gepard'],
        correct: 'Kot nubijski'
    },
    {
        question: 'Który kolor kota uchodzi za pechowy?',
        answers: ['Biały', 'Czarny', 'Szary', 'Rudy'],
        correct: 'Czarny'
    },
    {
        question: 'Co koty robią najwięcej czasu w ciągu dnia?',
        answers: ['Jedzą', 'Śpią', 'Polują', 'Myją się'],
        correct: 'Śpią'
    },
    {
        question: 'Jak kot się porozumiewa?',
        answers: ['Gwizdem', 'Szczekaniem', 'Mruczeniem', 'Krzykiem'],
        correct: 'Mruczeniem'
    },
    {
        question: 'Ile kot ma łap?',
        answers: ['2', '4', '6', '3'],
        correct: '4'
    },
    {
        question: 'Czym karmić kota?',
        answers: ['Kośćmi', 'Mlekiem krowim', 'Specjalną karmą', 'Zbożem'],
        correct: 'Specjalną karmą'
    },
    {
        question: 'Co robi kot, gdy zadowolony?',
        answers: ['Warczy', 'Szczeka', 'Mruczy', 'Piszczy'],
        correct: 'Mruczy'
    },
    {
        question: 'Która rasa kotów jest bezwłosa?',
        answers: ['Syjamski', 'Maine Coon', 'Sfinks', 'Perski'],
        correct: 'Sfinks'
    }
    ],

    [
    {
        question: 'Ile łap ma pies?',
        answers: ['2', '4', '3', '1'],
        correct: '4'
    },
    {
        question: 'Jaka karma jest dobra dla psa?',
        answers: ['Jakas', 'Jakas2', 'Jakas3', 'Jakas4'],
        correct: 'Jakas3'
    },
    {
        question: 'Który z tych psów to rasa mała?',
        answers: ['Owczarek niemiecki', 'Labrador', 'Chihuahua', 'Husky'],
        correct: 'Chihuahua'
    },
    {
        question: 'Czym pies wyraża radość?',
        answers: ['Warczy', 'Merda ogonem', 'Ucieka', 'Szczeka nisko'],
        correct: 'Merda ogonem'
    },
    {
        question: 'Ile zmysłów ma pies (tak jak człowiek)?',
        answers: ['5', '6', '4', '3'],
        correct: '5'
    },
    {
        question: 'Jaka jest średnia długość życia psa?',
        answers: ['3-5 lat', '8-12 lat', '15-20 lat', '20-30 lat'],
        correct: '8-12 lat'
    },
    {
        question: 'Jaką funkcję pełni pies przewodnik?',
        answers: ['Pilnuje domu', 'Pomaga osobom niewidomym', 'Poluje', 'Tropi zapachy'],
        correct: 'Pomaga osobom niewidomym'
    },
    {
        question: 'Które z tych zwierząt jest bliskim krewnym psa?',
        answers: ['Kot', 'Lis', 'Koń', 'Słoń'],
        correct: 'Lis'
    },
    {
        question: 'Co należy robić, żeby pies był posłuszny?',
        answers: ['Nic', 'Bić go', 'Tresować i nagradzać', 'Karmić dużo'],
        correct: 'Tresować i nagradzać'
    },
    {
        question: 'Która rasa znana jest z policyjnej służby?',
        answers: ['Golden Retriever', 'Chihuahua', 'Owczarek niemiecki', 'Buldog'],
        correct: 'Owczarek niemiecki'
    }
    ]
];
let number = 0;
const questionElement = document.querySelector('.question');
const answerElements = document.querySelectorAll('.answer');

//aktualizowanie tekstu i pytania
questionElement.textContent = quizzes[choosenOption][number].question;
for(let i = 0;i < 4;i++){
    answerElements[i].textContent = quizzes[choosenOption][number].answers[i];
}
number++;

const timer = setTimeout(() => { // zmiana pytania po 5sekundach
    changeQuestion();
},5000);  

//zmiana pytania po kliknieciu przycisku
answerElements.forEach(btn => {
    btn.addEventListener('click', () => {
        clearTimeout(timer);
        changeQuestion();
    });
});

function changeQuestion()
{
    console.log('changing');
    //sprawdzanie czy to nie koniec quizu
    if(number <= quizzes[choosenOption].length - 1){
        questionElement.textContent = quizzes[choosenOption][number].question;
        for(let i = 0;i < 4;i++){
         answerElements[i].textContent = quizzes[choosenOption][number].answers[i];
        }
        number++;
    }
    else{
        window.location.href = '../index.html';
    }



    
}