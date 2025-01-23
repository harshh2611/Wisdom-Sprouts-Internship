/*var n =2;
 
for (let i = 0; i <= 10; i++) 
    {
    console.log(n+" "+ i + " = "+(n*i))
    
}*/

//######################FACTORIAL##########################

/*let num1 = 7, fact =1;
while (num1>0)
{
    fact = fact*(num1)
    num1--;
}
    console.log(fact)*/

//##########################Random Number#################################

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let randomInt = getRandomInt(1, 10);
  console.log(randomInt);

//#########################################################################











