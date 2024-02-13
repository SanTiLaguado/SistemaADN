function encontrarCulpable() {
    const personas = ["pedro", "juan", "diego"];
    const cromosomas = ["00000101010101010101", "00101010101101110111", "00100010010000001001"];
    const secuenciaIngresada = document.getElementById("secuenciaIngresada").value;
    let mejorCoincidencia;
    let maxSimilitud = 0;

    for (let i = 0; i < cromosomas.length; i++) {
        const cromosoma = cromosomas[i];
        let similitud = 0;

        for (let j = 0; j < secuenciaIngresada.length; j++) {
            if (secuenciaIngresada[j] === cromosoma[j]) {
                similitud++;
            }
        }

        const porcentajeSimilitud = (similitud / secuenciaIngresada.length) * 100;

        if (porcentajeSimilitud > maxSimilitud) {
            maxSimilitud = porcentajeSimilitud;
            mejorCoincidencia = i;
        }
    }

    let culpable = cromosomas[mejorCoincidencia];
    let parentezco = maxSimilitud.toFixed(2) + "%";
    let nombreculpable = "";

    if (culpable === cromosomas[0]) {
        nombreculpable = "PEDRO";
    } else if (culpable === cromosomas[1]) {
        nombreculpable = "JUAN";
    } else if (culpable === cromosomas[2]) {
        nombreculpable = "DIEGO";
    }

    if (parentezco === "0.00%") {
        document.getElementById("resultado").innerHTML = "Ninguna de las personas registradas es culpable, el parentezco es de: " + parentezco;
    } else {
        console.log(culpable, nombreculpable);
        document.getElementById("resultado").innerHTML = "El culpable es " + nombreculpable + " con un parentezco de " + parentezco;
    }
}
