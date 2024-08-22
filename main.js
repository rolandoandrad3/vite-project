import 'bootstrap/dist/css/bootstrap.min.css';
import './public/assets/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { agregarCurso } from './src/components/carrito';

document.addEventListener('DOMContentLoaded', () => {
    const listadoCursos = document.querySelector('#lista-cursos');
        listadoCursos.addEventListener('click', agregarCurso); 
} )
