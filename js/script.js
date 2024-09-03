        // Datos de ejemplo
        const experiencias = [
            { puesto: "Desarrollador Web", empresa: "Tecnoparque SENA", periodo: "2021 - 2022", descripcion: "Desarrollo de aplicaciones web utilizando HTML, CSS y JavaScript." },
            { puesto: "Soporte Tecnico", empresa: "UFPSO", periodo: "2022 - 2023", descripcion: "Instalación y mantenimiento de hardware y software.." }
        ];

        const educacion = [
            { titulo: "Técnico en programación de software", institucion: "SENA", año: "2020" },
            { titulo: "Estudiante ingenieria de software", institucion: "IBEROAMERICANA", año: "2022 - Presente" }
        ];

        // Función para añadir experiencias
        function añadirExperiencias() {
            const listaExperiencia = document.getElementById('lista-experiencia');
            experiencias.forEach(exp => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${exp.puesto}</strong> en ${exp.empresa}<br>
                                ${exp.periodo}<br>
                                ${exp.descripcion}`;
                listaExperiencia.appendChild(li);
            });
        }

        // Función para añadir educación
        function añadirEducacion() {
            const listaEducacion = document.getElementById('lista-educacion');
            educacion.forEach(edu => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${edu.titulo}</strong><br>
                                ${edu.institucion}, ${edu.año}`;
                listaEducacion.appendChild(li);
            });
        }

        // Llamar a las funciones cuando se cargue la página
        window.onload = function() {
            añadirExperiencias();
            añadirEducacion();
        };