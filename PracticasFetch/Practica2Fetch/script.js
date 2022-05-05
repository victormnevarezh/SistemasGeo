var paises= document.getElementById("paises");
fetch("paises.json",
{
    mode:"cors",
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})
.then( function(response){
    console.log(response);
    response.json().then(function(datos){
        let contador = 1;
        datos.forEach(registro => {
            let renglon = document.createElement("div");
            renglon.className = "row border bg-light";
            paises.appendChild(renglon)

            let columna = document.createElement("div");
            columna.className = "col-12";
            renglon.appendChild(columna);

            let nombre = document.createElement("p");
            nombre.className = "m-2"
            nombre.textContent = contador + ") "+registro.CountryName;
            columna.appendChild(nombre)

            contador++;


        });
        
    })
});