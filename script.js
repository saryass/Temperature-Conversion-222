const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const noInput = document.getElementById('noInput');
const submitBTN = document.getElementById('submitBTN');

submitBTN.onclick = function (){
    if(input1.value !=='') {

        let x=Number(input1.value);
        const answerF = (9/5*x)+32;
        input2.value=answerF.toFixed(2) ;
    }

    else if(input2.value !=='') {
        
        let x=Number(input2.value);
        const answerC= 5/9 *(x-32);
        input1.value=answerC.toFixed(2); 
    }
    else {
        window.alert('هیچ داخڵ نەکردووە گوڵم')
    }
}
