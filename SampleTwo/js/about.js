// toggle KIswahili content
document.getElementById('languageKo').addEventListener('click',
    function(){
        var eng = document.querySelector('.Englishcontent');
        eng.style.display= 'none';
    })

    document.getElementById('languageKo').addEventListener('click',
    function(){
        var eng = document.querySelector('.Kiswahilicontent');
        eng.style.display= 'block';
    })


// toggle english language
    document.getElementById('LanguageEo').addEventListener('click',
    function(){
        var eng = document.querySelector('.Kiswahilicontent');
        eng.style.display= 'none';
    })

    document.getElementById('LanguageEo').addEventListener('click',
    function(){
        var eng = document.querySelector('.Englishcontent');
        eng.style.display= 'block';
    })


//toggle dark mode

document.getElementById('Dmode').addEventListener('click',
    function(){
        var con = document.querySelector('.modeCon');
        con.classList.toggle('dark');
    })

//toggle light mode
document.getElementById('Lmode').addEventListener('click',
    function(){
        var con = document.querySelector('.modeCon');
        con.classList.remove('dark');
    })