function operaciones() {
    var a;
    var b;
    var res;

    alert("Esta opcion mostrara la suma, resta, multiplicacion y division de dos numeros .");

    a = parseInt(prompt ("escribe el primer numero:"));
    b = parseInt(prompt ("escriba el segundo numero:"));

    res = a+b;
    alert("el total de la suma es: "+res);

    res = 0;
    res = a-b;
    alert("el total de la resta es: "+res)

    res = 0;
    res = a*b;
    alert("el total de la multiplicación es: "+res)

    res = 0;
    res = a/b;
    alert("el total de la división es: "+res)
}
function mayor(){
    var a;
    var b;

    alert("Esta opcion se  dira cuál de los numeros ingresados es el mayor.");

    a = parseInt(prompt ("escriba el primer numero: "));
    b = parseInt(prompt ("escriba el segundo numero: "));

    if (a>b){
        alert("El numero "+a+" es el mayor.");
    } else {
        alert("El numero "+b+" es el mayor.");
    }
}
function menor(){
    var a;
    var b;
    var c;
    
    alert("Esta opcion se  dira cuál de los numeros ingresados es el menor ");

    a = parseInt(prompt ("escriba el  primer numero a comparar: "));
    b = parseInt(prompt ("escriba el segundo numero a comparar: "));
    c = parseInt(prompt ("escriba el tercer numero a comparar: "));
    
    if (a<b & a<c){
       alert("El numero "+a+" es el menor.");
    }
    if (b<a & b<c){
        alert("El numero "+b+" es el menor.");
     }
    if (c<a & c<b){
        alert("El numero "+c+" es el menor.");
     }
}
function parImpar(){
    var a;

    alert("Esta opcion dira si el numero ingresado es par o impar.");

    a = parseInt(prompt ("escriba un numero: "));

    if (a % 2){
        alert("El numero es impar.");
    }else{
        alert("El numero es par.");
    }
}
function numeroCuadrado(){
    var a;
    var res;

    alert("Esta opcion le dara el resultado al elevar al cuadrado su numero.");

    a = parseInt(prompt ("Escriba un numero: "));
    res = a*a;
    alert ("Su numero al cuadrado es: "+res);
}
function areaTriangulo(){
    var a;
    var b;
    var res;

    alert("Esta opcion le mostrara el area de un triangulo después de que escriba los valores.");

    b = parseFloat(prompt ("Ingrese la base: "));
    a = parseFloat(prompt ("Ingrese la altura: "));
    res = (b*a)/2

    alert("El area del triuangulo es: "+res);
}
function metrosCentimetros(){
    var a;
    
    alert("Esta opcion convertira los metros en centimetros.");

    a = parseInt(prompt("Escriba el valor en metros: "));

    alert("El valor en centimetros es: "+(a*100));
}
function anoNacimiento(){
    var a;

    alert("Esta opcion le dira su año de nacimiento.");

    a = parseInt(prompt("Escriba su edad: "));
    a = 2022 - a;
    alert("Usted nacio en el año: "+a);
}
function interesBanco(){
    var a;
    var b;
    var i;

    alert("Esta opcion dira cuanto interes genera su capital en un banco.");

    a = parseInt(prompt ("Escriba su capital: "));
    b = parseInt(prompt ("Escriba el numero de años: "));

    i = ((a/100)*(b*12))*2;

    alert("El interes generados a través de estos años es de: "+i);

}
function promedioColegio(){

    alert("Esta opcion dira el promedio de sus notas y si usted aprueba o reprueba.");

    var a = parseFloat(prompt("Escriba la nota N.1: "));
    var b = parseFloat(prompt("Escriba la nota N.2: "));;
    var c = parseFloat(prompt("Escriba la nota N.3: "));;
    var d = parseFloat(prompt("Escriba la nota N.4: "));;
    var e = parseFloat(prompt("Escriba la nota N.5: "));;

    var p = (a+b+c+d+e)/5

    if (p<3){
        alert("Usted reprobo, su promedio es de: "+p);
    }else {
        alert("Usted aprobo, su promedio es de: "+p);
    }


}
function descuentoManzanas(){

    alert("Esta opcion dira si tiene o no descuento en la compra y el total a pagar.");

    var m = 4500;
    var k = parseInt(prompt("Escriba los kilos de manzanas: "));;
    var d;
    
    d = k*m;
    if (k<=2){
        alert("Usted no tiene descuento.");
    }
    if (k>2 & k<=5){
        alert("Usted tiene un descuento del 10% eso equivale a "+(d/100)*10);
    }
    if (k>5 & k<=10){
        alert("Usted tiene un descuento del 15% eso equivale a "+(d/100)*15);
    }
    if (k>10){
        alert("Usted tiene un descuento del 20% eso equivale a "+(d/100)*20);
    }
}