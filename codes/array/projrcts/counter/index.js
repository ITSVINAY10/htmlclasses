

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
      alert("This is maximum range is 20")

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
      console.log("Odd");
      countValue .textContent=c;

  }
  
}
else
{
  alert("The least decrement is 0 only")
}
}

function reset ()
{
    c=0
    countValue.textContent=c
    
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



/*
let popup = document.getElementById("popup");
function openpop(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}

const ele=document.getElementById('x')
const numvalue=document.getElementById('number')
let c = 0
function incr ()
{
  c++;
  if(c>20){
      alert("The Maximum increment is 20  only")
  }
      else{
      if(c%2==0){
        numvalue.textContent='Even'
          ele.textContent=c;
      }
      else{
        numvalue.textContent="odd"
          ele.textContent=c;
      }
  }
  
}
function decr ()
{
  c--;
  if(c>=0)
{
  if(c%2==0)
  {
    numvalue.textContent='Even'
      ele.textContent=c;

  }
  else
  {
    numvalue.textContent="Odd"
      console.log("Odd");
      ele.textContent=c;

  }
  
}
else
{
  alert("The least decrement is 0 only")
}
}
function reset ()
{
  c = 0;
  numvalue.textContent='Reset'
  numvalue.textContent="Even"
 ele.textContent=c;
} */

