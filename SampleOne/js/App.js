/**REsume Services Portfolio */
document.getElementById('Home').addEventListener('click',
    function() {
        document.querySelector('.HomeCon').style.display = 'block';
        document.querySelector('.ContactCon').style.display = 'none';
        document.querySelector('.ResumeCon').style.display = 'none';
        document.querySelector('.ServicesCon').style.display = 'none';
        document.querySelector('.PortfolioCon').style.display = 'none';
    })
document.getElementById('Contact').addEventListener('click',
    function(){
        document.querySelector('.HomeCon').style.display = 'none';
        document.querySelector('.ContactCon').style.display = 'block';
        document.querySelector('.ResumeCon').style.display = 'none';
        document.querySelector('.ServicesCon').style.display = 'none';
        document.querySelector('.PortfolioCon').style.display = 'none';
    })
document.getElementById('Resume').addEventListener('click',
function(){
    document.querySelector('.HomeCon').style.display = 'none';
    document.querySelector('.ContactCon').style.display = 'none';
    document.querySelector('.ResumeCon').style.display = 'block';
    document.querySelector('.ServicesCon').style.display = 'none';
    document.querySelector('.PortfolioCon').style.display = 'none';
})
document.getElementById('Services').addEventListener('click',
function(){
    document.querySelector('.HomeCon').style.display = 'none';
    document.querySelector('.ContactCon').style.display = 'none';
    document.querySelector('.ResumeCon').style.display = 'none';
    document.querySelector('.ServicesCon').style.display = 'block';
    document.querySelector('.PortfolioCon').style.display = 'none';
})
document.getElementById('Portfolio').addEventListener('click',
function(){
    document.querySelector('.HomeCon').style.display = 'none';
    document.querySelector('.ContactCon').style.display = 'none';
    document.querySelector('.ResumeCon').style.display = 'none';
    document.querySelector('.ServicesCon').style.display = 'none';
    document.querySelector('.PortfolioCon').style.display = 'block';
})
document.getElementById('Language').addEventListener('click',
function(){
    var French = document.querySelector(".homeFrench");
    French.classList.toggle("show");
})
document.getElementById('Language').addEventListener('click',
function(){
    var French = document.querySelector(".homeEnglish");
    French.classList.toggle("hide");
})