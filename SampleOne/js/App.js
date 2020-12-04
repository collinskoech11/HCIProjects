document.getElementById('Home').addEventListener('click',
    function() {
        document.querySelector('.HomeCon').style.display = 'block';
        document.querySelector('.ContactCon').style.display = 'none';
        document.querySelector('.AboutCon').style.display = 'none';
    })
document.getElementById('Contact').addEventListener('click',
    function(){
        document.querySelector('.HomeCon').style.display = 'none';
        document.querySelector('.ContactCon').style.display = 'block';
        document.querySelector('.AboutCon').style.display = 'none';
    })
document.getElementById('About').addEventListener('click',
function(){
    document.querySelector('.HomeCon').style.display = 'none';
    document.querySelector('.ContactCon').style.display = 'none';
    document.querySelector('.AboutCon').style.display = 'block';
})