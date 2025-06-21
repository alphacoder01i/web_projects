let disp=document.getElementById("display");
let ls=document.getElementById("ul");
let e;
function addtask(){
    if(disp.value===''){
        alert("you must write something");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=disp.value;
        ls.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata();
    }
    disp.value='';
    
}

ls.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",ls.innerHTML);
}

function  showlist(){
    ls.innerHTML=localStorage.getItem("data");
}
showlist();

function suggestion(x){
    let Inp = document.getElementById("search");
    
    let InpVal = Inp.value.toLowerCase();

    let ul = document.getElementById("ul");

    // FETCHING CHILDRENS & MANUPLATING
    
    let ul_childrens = ul.querySelectorAll("li");

    
    ul_childrens.forEach((e)=>{
        let text = e.innerText.toLowerCase();

        let isMatching = text.includes(InpVal); 

        if(!isMatching) {
            e.style.display = "none"
            }
            else{
                
                e.style.display = "block"
            }

        if(InpVal=="") e.style.display="block"
        

        
    })
    
}






