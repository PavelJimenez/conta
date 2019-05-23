function op1()
{
    var num1= document.getElementById("numMPD").value;
    var num2= document.getElementById("numMDOD").value;
    var resultado= parseInt(num1) + parseInt(num2);
    
    document.getElementById("numCostoPrimo").value = resultado;
    document.getElementById("numCostoPrimo1").value = resultado;
}
function op2()
{
    var num1= document.getElementById("numCostoPrimo").value;
    var num2= document.getElementById("GGDFD").value;
    var num3= document.getElementById("numCD").value;
    var resultado= parseInt(num1) + parseInt(num2) + parseInt(num3);
    
    document.getElementById("numCDP").value = resultado;
    document.getElementById("numCDP1").value = resultado;
    document.getElementById("numCDP2").value = resultado;
}
function op3()
{
    var num1= document.getElementById("numMPI").value;
    var num2= document.getElementById("numMDOI").value;
    var num3= document.getElementById("numGGDFI").value;
    var resultado= parseInt(num1) + parseInt(num2) + parseInt(num3);
    
    document.getElementById("numCI").value = resultado;
}
function op4()
{
    var num1= document.getElementById("numGDV").value;
    var num2= document.getElementById("numGDA").value;
    var resultado= parseInt(num1) + parseInt(num2);
    
    document.getElementById("numCDD").value = resultado;
    document.getElementById("numCDD1").value = resultado;
}
function op5()
{
    var num1= document.getElementById("numCDP1").value;
    var num2= document.getElementById("numCDD1").value;
    var resultado= parseInt(num1) + parseInt(num2);
    
    document.getElementById("numCTDO").value = resultado;
}
function op6()
{
    var num1= document.getElementById("numCDP2").value;
    var num2= document.getElementById("numUP").value;
    var resultado= parseInt(num1) / parseInt(num2);
    
    document.getElementById("numCUDP").value = resultado;
}