function sumar(){
    let num1= parseInt(document.getElementById("num1").value);
    let num2= parseInt(document.getElementById("num2").value);
    let suma = num1+num2;

    document.getElementById("resultado1").value= `${suma}`
};

function restar(){
    let num1= parseInt(document.getElementById("num1").value);
    let num2= parseInt(document.getElementById("num2").value);
    let resta = num1-num2;

    document.getElementById("resultado1").value= `${resta}`
};

function multiplicar(){
    let num1= parseInt(document.getElementById("num1").value);
    let num2= parseInt(document.getElementById("num2").value);
    let multiplicar = num1*num2;

    document.getElementById("resultado1").value= `${multiplicar}`
};

function dividir(){
    let num1= parseInt(document.getElementById("num1").value);
    let num2= parseInt(document.getElementById("num2").value);
    let division = num1/num2;

    document.getElementById("resultado1").value= `${division}`
};

function calcular(){
    let nombre =document.getElementById("producto").value;
    let cantidad=parseInt(document.getElementById("Cantidad").value);
    let precio_u=parseFloat(document.getElementById("precio").value);

    let subtotal=cantidad*precio_u;
    document.getElementById("subtotal").value=`${subtotal.toLocaleString()}`;

    let iva=subtotal*0.19;
    document.getElementById("iva").value =`${iva.toLocaleString()}`;

    let descuento=subtotal*0.10;
    document.getElementById("descuento").value=`${descuento.toLocaleString()}`;

    let total=subtotal+iva-descuento;
    document.getElementById("total").value=`${total.toLocaleString()}`;
};

function promedio(){

    let nota1 = parseFloat(document.getElementById("not1").value);
    let nota2 = parseFloat(document.getElementById("not2").value);
    let nota3 = parseFloat(document.getElementById("not3").value);

    let prom = (nota1+nota2+nota3)/3;

    document.getElementById("prooomedio").value = `${prom.toFixed(1)}`;
}

function cal_salario(){
    let horas= parseInt(document.getElementById("horas").value);
    let valor= parseFloat(document.getElementById("valor").value);

    let resultado = horas*valor;
    document.getElementById("salario").value =`${resultado.toFixed(2)}`;
}

function presupuesto(){
    let numero_inv= parseInt(document.getElementById("numero_invitados").value);
    let cost_comida= parseInt(document.getElementById("costo_comida").value);
    let cost_bebi= parseInt(document.getElementById("costo_bebida").value);
    let cost_dec= parseInt(document.getElementById("costo_decoracion").value);
    let cost_mus= parseInt(document.getElementById("costo_musica").value);
    let pro_per= parseInt(document.getElementById("propina").value);

    let comida_total = numero_inv*cost_comida;
    document.getElementById("comida_total").innerText=`${comida_total}`;

    let bebida_total = numero_inv* cost_bebi;
    document.getElementById("bebida").innerText=`${bebida_total}`;

    let decoracion= cost_dec
    document.getElementById("decora").innerText=`${decoracion}`;

    let musica_animacion= cost_mus
    document.getElementById("musiani").innerText=`${musica_animacion}`;

    let subtotal = comida_total + bebida_total + cost_dec + cost_mus;
    document.getElementById("su").innerText=`${subtotal}`;

    let propina = subtotal * (pro_per / 100);
    document.getElementById("pro").innerText=`${propina}`;

    let total_general = subtotal + propina
    document.getElementById("to_ge").innerText=`${total_general}`;

    let costo_por_invitado = total_general / numero_inv
     document.getElementById("cos_p_in").innerText=`${costo_por_invitado}`
}
