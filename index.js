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
            "id": 1,
            "img": "IPA.png",
            "nombre": "IPA",
            "color": "6  SRM",
            "amargor": "43 IBUS",
            "aroma": "CITRICA",
            "alcohol": "4,9°",
            "tamaño": "1 litro",
            "precio": 400
        },
        
        {
            "id": 2,
            "img": "APA.png",
            "nombre": "APA",
            "color": "11 SRM",
            "amargor": "45 IBUS",
            "aroma": "CITRICA",
            "alcohol": "5.7°",
            "tamaño": "1 litro",
            "precio": 400
        },
        
        {
            "id": 3,
            "img": "STOUT.png",
            "nombre": "STOUT",
            "color": "40 SRM",
            "amargor": "28 IBUS",
            "aroma": "TOSTADO",
            "alcohol": "5.3°",
            "tamaño": "1 litro",
            "precio": 400
        },
        
        {
            "id": 4,
            "img": "SESION.png",
            "nombre": "SESSION IPA",
            "color": "8 SRM",
            "amargor": "40 IBUS",
            "aroma": "CITRICA",
            "alcohol": "4°",
            "tamaño": "1 litro",
            "precio": 400
        },
        
        {
            "id": 5,
            "img": "NEIPA.png",
            "nombre": "NEIPA",
            "color": "10 SRM",
            "amargor": "32 IBUS",
            "aroma": "FRUTADA",
            "alcohol": "5°",
            "tamaño": "1 litro",
            "precio": 400
        },

        {
            "id": 6,
            "img": "honey2.png",
            "nombre": "HONEY",
            "color": "6  SRM",
            "amargor": "14 IBUS",
            "aroma": "MALTA",
            "alcohol": "6°",
            "tamaño": "1 litro",
            "precio": 400
        },

        {
            "id": 7,
            "img": "redhoney.png",
            "nombre": "RED HONEY",
            "color": "18  SRM",
            "amargor": "14 IBUS",
            "aroma": "MALTA",
            "alcohol": "6.8°",
            "tamaño": "1 litro",
            "precio": 400
        },

        {
            "id": 8,
            "img": "scotish.png",
            "nombre": "SCOTISH",
            "color": "18  SRM",
            "amargor": "18 IBUS",
            "aroma": "MALTA",
            "alcohol": "6.3°",
            "tamaño": "1 litro",
            "precio": 400
        },
        
        {
            "id": 9,
            "img": "IPA.png",
            "nombre": "IPA",
            "color": "6  SRM",
            "amargor": "43 IBUS",
            "aroma": "CITRICA",
            "alcohol": "4,9°",
            "tamaño": "2 litros",
            "precio": 700
        },
        
            {
            "id": 10,
            "img": "APA.png",
            "nombre": "APA",
            "color": "11 SRM",
            "amargor": "45 IBUS",
            "aroma": "CITRICA",
            "alcohol": "5.7°",
            "tamaño": "2 litros",
            "precio": 700
        },
        
        {
            "id": 11,
            "img": "STOUT.png",
            "nombre": "STOUT",
            "color": "40 SRM",
            "amargor": "28 IBUS",
            "aroma": "TOSTADO",
            "alcohol": "5.3°",
            "tamaño": "2 litros",
            "precio": 700
        },
        
        {
            "id": 12,
            "img": "SESION.png",
            "nombre": "SESSION IPA",
            "color": "8 SRM",
            "amargor": "40 IBUS",
            "aroma": "CITRICA",
            "alcohol": "4°",
            "tamaño": "2 litros",
            "precio": 700
        },
        
        {
            "id": 13,
            "img": "NEIPA.png",
            "nombre": "NEIPA",
            "color": "10 SRM",
            "amargor": "32 IBUS",
            "aroma": "FRUTADA",
            "alcohol": "5°",
            "tamaño": "2 litros",
            "precio": 700
        },

        {
            "id": 14,
            "img": "honey2.png",
            "nombre": "Honey",
            "color": "6  SRM",
            "amargor": "14 IBUS",
            "aroma": "MALTA",
            "alcohol": "6°",
            "tamaño": "2 litros",
            "precio": 700
        },

        {
            "id": 15,
            "img": "redhoney.png",
            "nombre": "RED HONEY",
            "color": "18  SRM",
            "amargor": "14 IBUS",
            "aroma": "MALTA",
            "alcohol": "6.8°",
            "tamaño": "2 litros",
            "precio": 700
        },

        {
            "id": 16,
            "img": "scotish.png",
            "nombre": "SCOTISH",
            "color": "18  SRM",
            "amargor": "18 IBUS",
            "aroma": "MALTA",
            "alcohol": "6.3°",
            "tamaño": "2 litros",
            "precio": 700
        }
    ]
    
    const total = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
    console.log(total);

    // filtro de busqueda

    let filtro = prompt("¿Qué cerveza estás buscando?").toUpperCase();

    let filtrados = productos.filter(elemento => elemento.nombre.includes(filtro));
    console.log(filtrados);




