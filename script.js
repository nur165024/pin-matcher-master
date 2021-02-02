document.getElementById('errorMessage').style.display = 'none';
document.getElementById('successMessage').style.display = 'none';

document.getElementById('generateNumber').addEventListener('click',function(){
    let generate = (Math.random() * 10000 + ' ').split('.');
    if(generate[0].length >= 4){
        document.getElementById('putGenerateNumber').value = generate[0];
    }
});

function dis(val){
    if(val === 'c'){
        document.getElementById('enterValidNumber').value = '';
    }else if(val === '<'){
        let enterNumber = document.getElementById('enterValidNumber').value;
        let Arraydata = Array.from(enterNumber);
        let lastData = Arraydata[Arraydata.length - 1];
        // document.getElementById('enterValidNumber').value.lastData = hide;
    }else{
        document.getElementById('enterValidNumber').value +=val;        
    }
}

let clickCount = 0;
document.getElementById('submitValidNumber').addEventListener('click',function(){
    let putGenerateNumber = document.getElementById('putGenerateNumber').value;
    let enterValidNumber = document.getElementById('enterValidNumber').value;
    
    if(putGenerateNumber === enterValidNumber){
        document.getElementById('putGenerateNumber').value = '';
        document.getElementById('enterValidNumber').value = '';
        document.querySelector('.action-left').innerHTML = '';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
    }else{
        clickCount += 1;
        document.querySelector('.action-left').innerHTML = clickCount + ' try left';
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('errorMessage').style.display = 'block';
    }
});