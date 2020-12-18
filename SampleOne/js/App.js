//toggle home page 
document.getElementById('Home').addEventListener('click',
    function() {
        document.querySelector('.HomeCon').style.display = 'block';
        document.querySelector('.ContactCon').style.display = 'none';
        document.querySelector('.ResumeCon').style.display = 'none';
        document.querySelector('.PortfolioCon').style.display = 'none';
    })
//toggle contact page
document.getElementById('Contact').addEventListener('click',
    function(){
        document.querySelector('.HomeCon').style.display = 'none';
        document.querySelector('.ContactCon').style.display = 'block';
        document.querySelector('.ResumeCon').style.display = 'none';
        document.querySelector('.PortfolioCon').style.display = 'none';
    })
//toggle resume page
document.getElementById('Resume').addEventListener('click',
function(){
    document.querySelector('.HomeCon').style.display = 'none';
    document.querySelector('.ContactCon').style.display = 'none';
    document.querySelector('.ResumeCon').style.display = 'block';
    document.querySelector('.PortfolioCon').style.display = 'none';
})
//toggle portfolio page
document.getElementById('Portfolio').addEventListener('click',
function(){
    document.querySelector('.HomeCon').style.display = 'none';
    document.querySelector('.ContactCon').style.display = 'none';
    document.querySelector('.ResumeCon').style.display = 'none';
    document.querySelector('.PortfolioCon').style.display = 'block';
})
//toggle English language 
document.getElementById('lan').addEventListener('click',
function(){
    var homeFrench = document.querySelector(".homeFrench");
    homeFrench.classList.toggle("show");
    var resumeFrench = document.querySelector(".resumeFrench");
    resumeFrench.classList.toggle("show");
    var portfolioFrench = document.querySelector(".portfolioFrench");
    portfolioFrench.classList.toggle("show");
    var contactFrench = document.querySelector(".contactFrench");
    contactFrench.classList.toggle("show");
    
})
//toggle French Language
document.getElementById('lan').addEventListener('click',
function(){
    var homeEnglish = document.querySelector(".homeEnglish");
    homeEnglish.classList.toggle("hide");
    var resumeEnglish = document.querySelector(".resumeEnglish");
    resumeEnglish.classList.toggle("hide");
    var portfolioEnglish = document.querySelector(".portfolioEnglish");
    portfolioEnglish.classList.toggle("hide");
    var contactEnglish = document.querySelector(".contactEnglish");
    contactEnglish.classList.toggle("hide");
})
document.getElementById('dark').addEventListener('click',
function(){
    var dark = document.querySelector(".container");
    dark.classList.toggle('container-dark');
})
window.onload=function(){setTimeout(showPopup,5000)};
	function showPopup(){
		const pop = document.querySelector('.popup');
		pop.classList.toggle("popupup");
	};