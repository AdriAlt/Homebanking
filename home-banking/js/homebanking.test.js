var expect = chai.expect;

describe("Testeando funcion restar()", function() {
    it("Cuando extraigo dinero, se modifica el saldo de mi cuenta ", function(){
       // var restaTest = restar(10000);
        expect(restar(10000)).to.equal(740000);

        //expect(restoTest.horarios.length).to.equal(2)
    })
    // it("Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual", function() {
    //     var restoTest = new Restaurant();
    //     restoTest.horarios = ["12:00", "15:00", "17:30"];
    //     var horarioTest = "21:00";
    //     restoTest.reservarHorario(horarioTest);
    //     expect(restoTest.horarios.length).to.equal(3);
    // })
    // it("Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.", function() {
    //     var restoTest = new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]);
    //     var horarioTest = restoTest.horarios.length;
    //     restoTest.reservarHorario();
    //     expect(restoTest.horarios.length).to.equal(horarioTest);
    // })
})
    