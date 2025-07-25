let rand = Math.floor(Math.random()*100+1);
console.log(rand)
let attempt=0;

function guessGame(){
    let input = document.getElementById("num").value;
    if(rand==input) 
       document.writeln("Your won the Game \n Your Attempt:"+attempt)
    else if(rand>input){
        document.getElementById("result").innerText="too lower";
        attempt++;
    }
    else if(rand<input){
        document.getElementById("result").innerText="too high";
        attempt++;
    }
}