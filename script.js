let buttonTag=document.querySelector('form');
buttonTag.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    let height=Number(document.querySelector('#height').value)/100;
    let waight=Number(document.querySelector('#weight').value);
    let bmiValue=Number(waight/(height**2)).toFixed(2);
    // console.log(bmiValue)
    
    // console.log( waight ,height);

    let result=document.querySelector('#Result');

    if(bmiValue < 18){
        result.innerHTML=`BMI Value is: ${bmiValue} you are under weight`;
        result.style.color='red';
    }
    
    else if(bmiValue <= 24){
        result.innerHTML=`BMI Value is: ${bmiValue} you are Normal weight`;
         result.style.color='green';
    }
     else if(bmiValue <= 30){
        result.innerHTML=`BMI Value is: ${bmiValue} you are over weight`;
         result.style.color='yellow';
        
    }
    else{
        
        result.innerHTML=`BMI Value is: ${bmiValue} you are obese !`;
        result.style.color='blue'
    }
    






})

// console.log(buttonTag);





// let formTag =document.querySelector('form');

// formTag.addEventListener('submit' ,(e)=>{
// e.preventDefault()    
 

// let height=Number(document.querySelector('#height').value)/100;
// let weight=Number(document.querySelector('#weight').value);
// // console.log(weight,height);

// let bmiValue=Number( (weight/height**2).toFixed(2));
// // console.log(typeof bmiValue)

// let result=document.querySelector('#Result');

// if(bmiValue < 18){
//     result.innerHTML=` BMI value is : ${bmiValue}  you are under waight `
//     result.style.color='red';
// }
// else if(bmiValue <= 24){
//     result.innerHTML=` BMI value is : ${bmiValue}  you are Normal waight `
//      result.style.color='green';
// }

// else if(bmiValue <= 30){
//     result.innerHTML=` BMI value is : ${bmiValue}  you are over waight `
//      result.style.color='yellow';
// }
// else{

//   result.innerHTML=` BMI value is : ${bmiValue}  you are obase `
//    result.style.color='orange';

// }










// });



// console.log(formTag);

