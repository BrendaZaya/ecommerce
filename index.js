    // Validar edad
function validarEdad() {
    if (confirm("Te damos la bienvenida. Para poder acceder a este contenido, necesitamos validar tu edad. ¿Sos mayor de 18?") == true) {
        alert("Te damos la bienvenida");
    } else {
        alert("Lo sentimos, no podés ingresar");
    }
}
    validarEdad()

    // arrays de productos

    const productos = [
        {
            id: 1,
            nombre: "IPA",
            amargor: "ALTO",
            ibu: "82",
            aroma: "CITRICA",
            ABV: "6,5%",
            tamaño: "500 cc",
            precio: 260
        },
        
        {
            id: 2,
            nombre: "KOLSCH",
            amargor: "MODERADO",
            ibu: "21",
            aroma: "FRUTADA",
            ABV: "4,5%",
            tamaño: "500 cc",
            precio: 220
        },
        
        {
            id: 3,
            nombre: "STOUT",
            amargor: "MEDIO",
            ibu: "42",
            aroma: "TOSTADA",
            ABV: "6,5%",
            tamaño: "500 cc",
            precio: 240
        },
        
        {
            id: 4,
            nombre: "RED IPA",
            amargor: "ALTO",
            ibu: "70",
            aroma: "CITRICA",
            ABV: "6,0%",
            tamaño: "500 cc",
            precio: 260
        },
        
        {
            id: 5,
            nombre: "BARLEY WINE",
            amargor: "MEDIO",
            ibu: "54",
            aroma: "CARAMELO",
            ABV: "11%",
            tamaño: "500 cc",
            precio: 240
        },

        {
            id: 6,
            nombre: "PORTER",
            amargor: "BAJO",
            ibu: "32",
            aroma: "CHOCOLATE",
            ABV: "6,5%",
            tamaño: "500 cc",
            precio: 240
        },

        {
            id: 7,
            nombre: "HONEY",
            amargor: "BAJO",
            ibu: "20",
            aroma: "CITRICA",
            ABV: "6%",
            tamaño: "500 cc",
            precio: 220
        },

        {
            id: 8,
            nombre: "RED HONEY",
            amargor: "BAJO",
            ibu: "15",
            aroma: "ACARAMELADO",
            ABV: "4,5%",
            tamaño: "500 cc",
            precio: 220
        },
        
        {
            id: 9,
            nombre: "IRISH",
            amargor: "MEDIO",
            ibu: "24",
            aroma: "MALTA",
            ABV: "5,3%",
            tamaño: "500 cc",
            precio: 220
        },
        
        {
            id: 10,
            nombre: "GOLDEN ALE",
            amargor: "BAJO",
            ibu: "22",
            aroma: "FRUTAL",
            ABV: "5%",
            tamaño: "500 cc",
            precio: 220
        },
        
        {
            id: 11,
            nombre: "APA",
            amargor: "MEDIO",
            ibu: "34",
            aroma: "LÚPULO",
            ABV: "5,5%",
            tamaño: "500 cc",
            precio: 240
        },
        
        {
            id: 12,
            nombre: "CREAM STOUT",
            amargor: "MODERADO",
            ibu: "32",
            aroma: "CAFÉ",
            ABV: "8%",
            tamaño: "500 cc",
            precio: 260
        },
        
        {
            id: 13,
            nombre: "NEIPA",
            amargor: "ALTO",
            ibu: "62",
            aroma: "LÚPULO",
            ABV: "8,5%",
            tamaño: "500 cc",
            precio: 260
        },

        {
            id: 14,
            nombre: "AMERICAN STOUT",
            amargor: "MEDIO",
            ibu: "42",
            aroma: "CANELA",
            ABV: "6%",
            tamaño: "500 cc",
            precio: 240
        },

        {
            id: 15,
            nombre: "PILSEN",
            amargor: "BAJO",
            ibu: "18",
            aroma: "MALTA",
            ABV: "5%",
            tamaño: "500 cc",
            precio: 220
        }
    ]
    
    // precio total de todos los productos

    const total = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
    console.log(total);

    // filtro de busqueda

    let filtro = prompt("¿Qué cerveza estás buscando?").toUpperCase();

    let filtrados = productos.filter(elemento => elemento.nombre.includes(filtro));
    console.log(filtrados);




