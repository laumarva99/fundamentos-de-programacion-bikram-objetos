//1.

const Coche = {
    marca: "Renault",
    modelo: "Clio",
    matricula: "1234ABC"
};

console.log(Coche);

//2.

const Casa = {
    codPostal: "46025",
    calle: "Doctor Fleming",
    portal: 7,
    piso: 4
}

console.log(Casa);

//3.

const FullStackDeveloper = {
    lenguajes: ["JavaScript", "HTML", "CSS"],
    proyectos: ["Web personal", "Tienda online"]
};

console.log(FullStackDeveloper);

//4.

const Perro = {
    nombre: "Dana",
    raza: "Ratopilbull",
    color: "Marrón",
    edad: 4,

    ladrar: function () {
        console.log("¡Guau, guau!");
    },

    popo: function () {
        return Math.random() * 3;
    }
};

console.log(Perro);
Perro.ladrar();
console.log(Perro.popo());

// 5.

const Portatil = {
    marca: "HP",
}
const marcaPortatil = Portatil.marca;

console.log(marcaPortatil);

//6.

const Portatil2 = {
    marca: "Asus",
}
const marcaPortatil2 = Portatil2["marca"];

console.log(marcaPortatil2);

//7.

const Concierto = {
    grupos: [
        "La Raiz",
        "Metrika",
        "Aspencat"
    ],
}
const grupos = Concierto.grupos;

console.log(grupos);

//8.

const Led = {
    rojo: 255,
    verde: 120,
    azul: 50,
};

const RGB = [Led.rojo, Led.verde, Led.azul];

console.log(RGB);

//9.

const Portatil = {
    marca: "Asus",
    modelo: "J674"
}
Portatil.modelo = "P345";

console.log(Portatil);

//10.

const Concierto = {
    cartelera: [
        "La Raiz",
        "Metrika",
        "Aspencat"
    ],
}

Concierto.cartelera.push("Guns N' Roses");

console.log(Concierto.cartelera);

//11.

const Concierto = {
    fecha: new Date("2026-10-15")
};

const newDate = new Date("2026-11-20");

Concierto.fecha = newDate;

console.log(Concierto);
console.log(newDate);

//12.

const Impresora = {
    marca: "HP",
    imprimiendo: {
        nombreArchivo: "documento.pdf",
        copias: 2,
        numPaginas: 10
    },
};

Impresora.imprimiendo = {
    nombreArchivo: "facturas.pdf",
    copias: 1,
    numPaginas: 15
};

console.log(Impresora);

//13.

const Noticia = {
    titular: "A pocos días de Halloween",
    cuerpo: "Las calles se llenan de niños disfrazados pasando puerta por puerta a por su apreciados caramelos"
};

console.log(Noticia);

//14.

const Persona = {
    nombre: "Laura",
    apellidos: "Martínez Valera",
    edad: 27
};
console.log(Persona);


//15.

const Avion = {
    numPasajeros: 120,

    despegar: function () {
        console.log("despegando");
    },

    volar: function () {
        console.log("llegando al destino");
    },

    aterrizar: function () {
        console.log("aterrizando");
    }
};

console.log(Avion);
Avion.despegar();
Avion.volar();
Avion.aterrizar();

//16.

const Paquete = {
    contenido: [
        "Libro",
        "Maceta",
        "Reloj"
    ]
};

console.log(Paquete);

//17.

const Pais = {
    numHabitantes: 48036890,
    continente: "Europa",
    gentilicio: "español"
};

console.log(Pais);

//18.

const O_Error = {
    codigo: 208,
};
const codError = O_Error.codigo;

console.log(codError);

//19.

const Grupo = {
    integrantes: [
        "Laura",
        "Alba",
        "Jorge"
    ],

};

const integrantes = Grupo.integrantes;

console.log(integrantes);

//20.

const Impresora = {
    tinta: 75
};
const nivelesTinta = Impresora.tinta;

console.log(nivelesTinta);

//21.

const Pantalla = {
    pixeles: [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255]
    ],
};
const pixeles = Pantalla.pixeles;

console.log(pixeles);

//22.

const Movil = {
    especificaciones: {
        marca: "Xiaomi",
        memoria: "128 GB",
        camara: "60 MP"
    },
};

const especificaciones = Movil["especificaciones"];
console.log(especificaciones);

//23.

const Grupo = {
    numIntegrantes: 10
};
Grupo.numIntegrantes = 5;

console.log(Grupo.numIntegrantes);

//24.

const Pantalla = {
    dimensiones: "2300x1400"
};
Pantalla.dimensiones = "1920x1080";

console.log(Pantalla.dimensiones);

//25.

const Led = {
    encendido: false
};
Led.encendido = !Led.encendido;

console.log(Led.encendido);

//26.

const Movil = {
    temperatura: "25º"
};
Movil.temperatura = "20º";

console.log(Movil.temperatura);