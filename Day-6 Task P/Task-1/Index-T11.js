// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
  message = "welcome boss"; 
  //we already declared message again we cannot declare it so we need to remove let. 
}
else
{
  message = "Go away";
}
  console.log(message);


 