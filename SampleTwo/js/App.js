document.getElementById("mode").addEventListener('click',
    function(){
        var container = document.querySelector(".container");
        container.classList.toggle('dark');
    })

//toggle English language 
document.getElementById('Language').addEventListener('click',
function(){
    var homeFrench = document.querySelector(".contentKiswahili");
    homeFrench.classList.toggle("show");
});
//toggle French Language
document.getElementById('Language').addEventListener('click',
function(){
    var homeEnglish = document.querySelector(".contentKiswahili");
    homeEnglish.classList.toggle("hide");
    
});
