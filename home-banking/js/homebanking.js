//Declaración de variables
var nombreUsuario = "Daenerys Targaryen";
var saldoCuenta = 750000; 
var limiteExtraccion = 5000;
var sueldoMensual;
var pagarServicio;
var transferirDinero;
var serviciosVarios;
var Agua = 350;
var Telefono = 425;
var Luz = 210;
var Internet = 570;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
}

// Declaracion de funciones 
function sumar(sueldoMensual){
    saldoCuenta += sueldoMensual;
    return saldoCuenta;
}

function restar(extraerDinero){
    saldoCuenta -= extraerDinero;
    return saldoCuenta;
}

function haySaldoDisponible(monto) {
    if (saldoCuenta<=monto) {
        alert("Fondos insuficientes");
        return false;
    }else {
        return true;
    }
}

function billetesCien (monto){
    if (monto%100 == "0"){
        return true;
    } else{
        alert("Solo puede extraer billetes de 100");
        return false;
    }
}	

function verificarLimite(monto){
    if(monto<=limiteExtraccion){
        return true;
    }else {
        alert("El monto a extraer es mayor a su limite permitido");
        return false;
    }
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    limiteExtraccion = parseInt(prompt("Modificar el limite de extracción"));
    if (! isNaN(limiteExtraccion )){
        var montoAModificar = limiteExtraccion;
        actualizarLimiteEnPantalla();
        alert("Su nuevo limite de extracción es " + montoAModificar);
    }
}

function extraerDinero() { 
    var extraerDinero = parseInt(prompt("Ingrese el monto a extraer"));
    if (! isNaN(extraerDinero )){
            if (verificarLimite(extraerDinero) && haySaldoDisponible(extraerDinero) && billetesCien (extraerDinero)) {
                 var saldoanterior = saldoCuenta;
                 var saldo = restar(extraerDinero);
                 actualizarSaldoEnPantalla();
                 alert("Has retirado:  " + extraerDinero + "\n" + "Saldo anterior: " + saldoanterior + "\n" + "Saldo actual: " + saldo);
             }  
        }
}

function depositarDinero() {
    var depositarDinero = parseInt(prompt("Ingrese el monto a depositar"));
    if (! isNaN(depositarDinero )){
    var saldoanterior = saldoCuenta;
    var saldo = sumar(depositarDinero);
    actualizarSaldoEnPantalla();
    alert("Has depositado:  " + depositarDinero + "\n" + "Saldo anterior: " + saldoanterior + "\n" + "Saldo actual: " + saldo);
    }
}

function pagarServicio() {
    serviciosVarios = prompt("Ingresá el número que corresponda con el servicio que queres pagar: \n1. Agua\n2. Teléfono\n3. Luz\n4. Internet");
    var saldoanterior = saldoCuenta;
    switch(serviciosVarios) {
        case "1":
            if (haySaldoDisponible(Agua)){
                saldoCuenta = restar(Agua);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Agua." + "Saldo Anterior: " + saldoanterior + "\n" + "Dinero descontado: " + Agua + "\n" + "Saldo Actual: " + saldoCuenta);
            }
          break;
        case "2":
            if (haySaldoDisponible(Telefono)){
                saldoCuenta = restar(Telefono);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Telefono." + "Saldo Anterior: " + saldoanterior + "\n" + "Dinero descontado: " + Telefono + "\n" + "Saldo Actual: " + saldoCuenta);
            }
          break;
         case "3":
            if (haySaldoDisponible(Luz)){
                saldoCuenta = restar(Luz);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Luz." + "Saldo Anterior: " + saldoanterior + "\n" + "Dinero descontado: " + Agua + "\n" + "Saldo Actual: " + saldoCuenta);
            }
            break;
        case "4":
            if (haySaldoDisponible(Internet)){
                saldoCuenta = restar(Internet);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Internet." + "Saldo Anterior: " + saldoanterior + "\n" + "Dinero descontado: " + Internet + "\n" + "Saldo Actual: " + saldoCuenta);
            }
            break;
        default:
            alert("No ha seleccionado ningun servicio");
      }
}

function transferirDinero() {
    var cuentaAmigaUno = "1234567";
    var cuentaAmigaDos = "7654321";
    var transferirDinero = parseInt(prompt("Ingrese el monto a transferir"));
    if (! isNaN(transferirDinero)){
            if (haySaldoDisponible(transferirDinero)){
                var cuenta = prompt("Ingrese el numero de cuenta");
                if(cuentaAmigaUno === cuenta || cuentaAmigaDos === cuenta){
                   if(cuentaAmigaUno === cuenta){
                    saldoCuenta = restar(transferirDinero);
                    actualizarSaldoEnPantalla();
                    alert("Se han transferido: " + transferirDinero + "\n" + "Cuenta Destino: " + cuentaAmigaUno);
                } else {
                    saldoCuenta = restar(transferirDinero);
                    actualizarSaldoEnPantalla();
                    alert("Se han transferido: " + transferirDinero + "\n" + "Cuenta Destino: " + cuentaAmigaDos);
                   }
                } else {
                    alert("Solo puede transferir dinero a una cuenta amiga");
                }
            }  
        }
        }

function iniciarSesion() {
    var nombreUsuario = (prompt("Ingrese su usuario"));
    var contraseña = (prompt("Ingrese su clave"));
    if (nombreUsuario == "DTargaryen" && contraseña == "1234"){
        alert("Bienvenido/a Daenerys Targaryen ya puedes comenzar a realizar operaciones");
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    } else {
        alert("Usuario" + nombreUsuario + "y/o Clave incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
        saldoCuenta -= saldoCuenta;
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}