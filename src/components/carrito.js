//declarando el arreglo para guardar los cursos seleccionados
let arregloCarrito = [];
//accedemos al tbody especificando el id de la tabla donde se encuentra 
const bodyCarrito = document.querySelector('#lista-carrito tbody');

export function agregarCurso(e){
    if(e.target.classList.contains('button-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement; 
        console.log(cursoSeleccionado); 
        //llamamos a la funcion para leer los datos del curso
        leerDatosCurso(cursoSeleccionado);
    }        
}

function leerDatosCurso(curso){
    //convertimos la informacion del curso en un objeto
    const objetoCurso = {
        //clave - valor
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('button').getAttribute('data-id')
    }
    arregloCarrito.push(objetoCurso);
    console.log(arregloCarrito);
    carritoHTML();

}

//Iterar el arreglo de los cursos en la tabla html
function carritoHTML(){
    //iterando un arreglo (map(), foreach(), for, while, do while)
    arregloCarrito.map(curso => {
        //creando una fila (tr)
        const fila = document.createElement('tr');
        //dibujando las celdas de cada fila
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar_curso" data-id=${curso.id}>Eliminar</a>
            </td>
        `;
        //insertando las filas en <tbody>
        bodyCarrito.appendChild(fila)
    })
}