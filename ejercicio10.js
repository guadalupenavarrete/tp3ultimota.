
        function TablasFor(){
    var multiplicando=1;
    var multiplicador=1;
    for (multiplicando = 1; multiplicando <= 10 ; multiplicando++) {
        for (multiplicador = 1; multiplicador <= 10 ; multiplicador++) {
            var resultado = multiplicando * multiplicador;
            document.write("<dd>");
            document.write( multiplicando + " X " + multiplicador + " = " + resultado);
            document.write("</dd>");		
        }
        document.write('<br>' );
    }
}

TablasFor();
