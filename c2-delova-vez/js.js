let x = prompt("Zadej bod X ");
let y = prompt("Zadej bod Y ");
let z = x * x + y * y;
    
if (Math.sqrt(z) < 5) {
    document.write("<span style = \"background-color: red;\"> Bod [" + x + ", " + y + "] je v dosahu delove veze.</span>");
} else
    document.write("<span style = \"background-color: green;\"> Bod [" + x + ", " + y + "] neni v dosahu delove veze.</span>");

    
