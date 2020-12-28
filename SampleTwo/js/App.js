document.getElementById("mode").addEventListener('click',
    function(){
        var container = document.querySelector(".container");
        container.classList.toggle('dark');
    })

//toggle English language 
document.getElementById('Language').addEventListener('click',
function(){
    var contentKiswahili = document.querySelector(".contentKiswahili");
    contentKiswahili.classList.toggle("show");
});
//toggle French Language
document.getElementById('Language').addEventListener('click',
function(){
    var contentEnglish = document.querySelector(".contentEnglish");
    contentEnglish.classList.toggle("hide");
});
//display features
document.getElementById('btnSuper').addEventListener('click',
    function(){
        var btn = document.querySelector(".btn");
        btn.style.display ="block";
    })
    document.getElementById('btnSuper').addEventListener('click',
    function(){
        var bto = document.querySelector("#btnSuper");
        btn.style.display ="none";
    })


    