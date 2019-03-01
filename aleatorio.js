var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var boton = document.getElementById("boton");
var azar = 0;
boton.addEventListener("click", aleatorio);

function aleatorio()
{
  azar = Math.ceil(Math.random()*(10 -  0));
  document.write(azar + "<br />");
}
for (var i = 0; i < 5 ; i++)
{
  aleatorio();
}
