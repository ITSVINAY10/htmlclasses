
let popup = document.getElementById("popup");
function openpop(){
  popup.classList.add("open-popup");
  
}
function closePopup(){
  popup.classList.remove("open-popup");
}

let countValue = document.getElementById('count')
const textValue = document.getElementById('Text')
console.log(countValue.textContent);
console.log(textValue.textContent)
let c= 0;
function incr ()
{

  c++;
  
   if(c>20)
    {
      alert("The maximum range is 20")

    }

   else{
    if(c % 2== 0){
      
      textValue.textContent = "Even";
      countValue.textContent = c;
      
      
      
    }
    else{
      
      textValue.textContent = "Odd";
      countValue.textContent = c;
      
    }
 
   }
  
   changeBackgroundColor();
}

function decr ()
 
{
  c--;
  if(c>=0)
{
  if(c %2 == 0)
  {
    textValue.textContent='Even'
      countValue.textContent=c;
      
      

  }
  
  else
  {
    textValue.textContent="Odd"
      console.log("Even");
      countValue .textContent=c;
      
      

  }
  
}
else
{
  alert("The least count is 0 only")
  
}

}

function reset ()
{
    c=0
    countValue.textContent=c
    
}

function updateDisplay() {
  if (c % 2 == 0) {
      textValue.textContent = "Even";
  } else {
      textValue.textContent = "Odd";
  }
  countValue.textContent = c;
}


/*
myfun2(){
    const inp = document.getElementById('inp');
    alert(inp.value)
    document.getElementById('para2').textContent=inp.value
    document.getElementById('para2').classList.toggle('dark')
    document.getElementById('para2').style.fontSize='78px'
}
*/



