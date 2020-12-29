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
//toggle Swahili Language
document.getElementById('Language').addEventListener('click',
function(){
    var contentEnglish = document.querySelector(".contentEnglish");
    contentEnglish.classList.toggle("show");
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

/*navigation*/
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

      /*text to speech*/
      function textToAudio() {
        let msg = document.getElementById("text-to-speech").textContent;
        
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        
        speech.text = msg;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        
        window.speechSynthesis.speak(speech);
    }