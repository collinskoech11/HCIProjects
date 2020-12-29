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