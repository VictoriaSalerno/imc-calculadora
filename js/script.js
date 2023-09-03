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

        localStorage.setItem("registros", JSON.stringify(this.registros));
    },

    cargarRegistrosDesdeLocalStorage: function() {
        const registrosGuardados = localStorage.getItem("registros");
        if (registrosGuardados) {
            this.registros = JSON.parse(registrosGuardados);
        }
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
                const formulario = document.getElementById("calculadoraForm");
                const resultadoDiv = document.getElementById("resultado");
          

                formulario.addEventListener("submit", (event) => {
                    event.preventDefault();
                    
                    const nombre = document.getElementById("nombre").value;
                    const peso = parseFloat(document.getElementById("peso").value);
                    const altura = parseFloat(document.getElementById("altura").value);
                    const imc = this.calcularIMC(peso, altura);
                    const categoria = this.obtenerCategoria(imc);
                    this.agregarRegistro(nombre, peso, altura, imc, categoria);

                    const resultadoHTML = `
                        <h2>Resultados para ${nombre}:</h2>
                        <p>IMC: ${imc.toFixed(2)}</p>
                        <p>Categoría: ${categoria}</p>
                    `;
                    resultadoDiv.innerHTML = resultadoHTML;

                    formulario.reset();
                
           this.mostrarRegistrosEnConsola()
           
                })

        }
            }
        

CalculadoraIMC.cargarRegistrosDesdeLocalStorage();
CalculadoraIMC.iniciarCalculadora();