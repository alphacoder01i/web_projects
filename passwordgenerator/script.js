let slider=document.getElementById('slider');
let len=document.getElementById('len');
let passbox=document.getElementById('passbox');
let lowercase=document.getElementById('lowercase');
let uppercase=document.getElementById('uppercase');
let symbol=document.getElementById('symbol');
let digit=document.getElementById('digit');
let bton=document.getElementById('bton');
let upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lower='abcdefghijklmnopqrstuvwxyz';
let sym='~!@#$%^&*';
let num='0123456789';
let copy =document.getElementById('copy');
let passbook=document.getElementById('passbook');

copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(passbox.value);
    copy.src="copied-removebg-preview.png";
});


len.textContent = slider.value;
slider.addEventListener('input',()=>{
    len.textContent = slider.value;
})

bton.addEventListener('click',()=>{
    passbox.value=generatePassword();
})


function generatePassword(){
    let password = "";
   
   let allchar = "";
        allchar += lowercase.checked ? lower:""; 
        allchar += uppercase.checked ? upper:"";
        allchar += symbol.checked ? sym:"";  
        allchar += digit.checked ? num:""; 

    if(allchar==""||allchar.length==0){
        return password;
    }

 
    let i=1;
    while(i<=slider.value){
        
        password+=allchar[Math.floor(Math.random()*allchar.length)];
        i++;
    }
    password=password.split('').sort(()=>Math.random()-0.5).join('');
    return password;
}

