function hiddenDiv() {
    var x = document.getElementById("hidden");
    var y = document.getElementById("down");
    var z = document.getElementById("up");
    // console.log(x.style.display)
    if(x.style.display === "none"){
        x.style.display="block";
        y.style.display = "block"
        z.style.display = "none";
    }else{
        x.style.display="none";
        y.style.display = "none";
        z.style.display = "block"

    }
}


function bar (id) {
    
        var div=document.getElementById(id);
        var width = div.clientWidth;

        if (width<180){
           div.style.width = (width+1)+ "px";
        }   
}
function barDec (id) {
    
    var div=document.getElementById(id);
    var width = div.clientWidth;

    if (width>0){
       div.style.width = (width-1)+ "px";
    }   
}

function number(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function numberDec(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if(value>=0){
        document.getElementById('number').value = value;
    }
    
}

