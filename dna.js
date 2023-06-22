function filtrar_adn(cadena_adn) {
    const bases_canonicas = new Set(['A', 'T', 'C', 'G']); // con New Set se crea una coleccion de letras canonicas de adn
    let adn_filtrado = '';

    for (let base of cadena_adn) {//haciendo cadenas de texto pequenas
        if (bases_canonicas.has(base)) { //pregunta si tiene alguna de las bases canonicas
            adn_filtrado += base;
        }
    }

    return adn_filtrado;
}

// Ejemplo de uso
const cadena_adn = 'KJOnmg';
const adn_filtrado = filtrar_adn(cadena_adn);
console.log(adn_filtrado);  

module.exports = filtrar_adn;