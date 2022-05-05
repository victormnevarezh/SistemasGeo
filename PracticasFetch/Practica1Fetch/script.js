var paises= document.getElementById("paises");
        fetch("datos.json")
        .then( function(response){
            console.log(response);
            response.json().then(function(datos){
                datos.forEach(registro => {
                    console.log(registro)
                    let nombre= document.createElement("p");
                    nombre.textContent = registro.country + " casos: " + registro.cases;
                    paises.appendChild(nombre);
                });
                
            })
        });