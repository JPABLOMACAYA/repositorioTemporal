// Llamando a la función getJSON se obtiene chistes random de la API, los que son mostrados en un título h2 (id= chiste) apenas se carga la página. 
$(document).ready(function () 
{
    $.getJSON("https://api.chucknorris.io/jokes/random", function (dataIn) 
    {
        $('#chiste').text(dataIn.value);
    });
// Además, esta función es nuevamente invocada al ocurrir el evento de tipo click, asociado al botón actualizar (id= nuevoChiste).
    $('#nuevoChiste').click(function () 
    {
        $.getJSON("https://api.chucknorris.io/jokes/random", function (dataIn) 
        {
            $('#chiste').text(dataIn.value);
        });
    });
});

