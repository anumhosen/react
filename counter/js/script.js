const disp = document.getElementById("display");
const btn = document.getElementById("button");
let counter = 0;

btn.addEventListener("click", count);

function count(){
    counter ++;
    disp.innerHTML = counter;
}

// btn.onclick =()=>{
//     counter ++;
//     disp.innerHTML = counter;
// }

