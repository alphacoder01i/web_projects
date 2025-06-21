let display=0;
let div=document.getElementById('hidden3');
function k(){
    if(display==1){
        div.style.display = "flex";
        display=0; 
       }
        else{
        div.style.display = "none";
        display=1;  
        }
    }

let aaap=document.getElementById('apps');
let gap=document.getElementById('gapp');
dis=0;
function ap(){
    if(dis==1){
        aaap.style.display = "block";
        gap.style.marginRight="-5px";
        dis=0; 
       }
    else{
        aaap.style.display = "none";
        gap.style.marginRight="15px";
        dis=1;  
    }
}

function performSearch() {
    var query = document.getElementById('search').value;
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.open(url, '_blank');
}

document.getElementById('search').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
    }
});
