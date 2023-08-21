const CalculadoraIMC = {
    registros: [],

    calcularIMC: function(peso, altura) {
        const alturaMetros = altura * altura;
        const imc = peso / alturaMetros;
        return imc;
    },
    
    obtenerCategoria: function(imc) {
        if (imc < 16.00) {
            return "Peso bajo, necesitas valorar signos de desnutrición.";
        } else if (imc <= 16.99) {
            return "Tienes delgadez moderada.";
        } else if (imc <= 18.49) {
            return "Tienes delgadez aceptable.";
        } else if (imc <= 24.99) {
            return "Tienes un peso normal.";
        } else if (imc <= 29.99) {
            return "Tienes OBESIDAD GRADO I. Riesgo alto para desarrollar enfermedades cardiovasculares.";
        } else if (imc <= 34.99) {
            return "Tienes OBESIDAD GRADO II. Riesgo alto para desarrollar enfermedades cardiovasculares.";
        } else if (imc <= 40.00) {
            return "Tienes OBESIDAD GRADO III. Riesgo muy alto para desarrollar enfermedades cardiovasculares.";
        } else {
            return "No existe clasificación.";
        }
    },

    agregarRegistro: function(nombre, peso, altura, imc, categoria) {
        this.registros.push({ nombre, peso, altura, imc, categoria });
    },

    buscarPorNombre: function(nombre) {
        return this.registros.find(persona => persona.nombre === nombre);
    },

    filtrarPorCategoria: function(categoria) {
        return this.registros.filter(persona => persona.categoria === categoria);
    },

    mostrarRegistrosEnConsola: function() {
        console.log("Registros almacenados:");
        this.registros.forEach(registro => {
            console.log("Nombre:", registro.nombre);
            console.log("Peso:", registro.peso);
            console.log("Altura:", registro.altura);
            console.log("IMC:", registro.imc.toFixed(2));
            console.log("Categoría:", registro.categoria);
            console.log("-------------------------");
        });
    },

    iniciarCalculadora: function() {

        const maxRegistros = 1
        
        for (let i = 0; i < maxRegistros; i++) {
            let nombre = prompt("Bienvenido a la calculadora de índice de masa corporal, ¿Cuál es su nombre?");
            
            if (!nombre) {
                break;
            }
     
            let peso = parseFloat(prompt(nombre + ", ingresa tu peso en kg."));
            let altura = parseFloat(prompt(nombre + ", Ingresa tu altura en cm y con punto. Ej: 1.56"));
            const imc = this.calcularIMC(peso, altura);
            const categoria = this.obtenerCategoria(imc);
            
            this.agregarRegistro(nombre, peso, altura, imc, categoria);
            
            alert(nombre + ", tu IMC es: " + imc.toFixed(2) + "\n" + categoria);
        }
        
        this.mostrarRegistrosEnConsola();
    }
};

CalculadoraIMC.iniciarCalculadora();