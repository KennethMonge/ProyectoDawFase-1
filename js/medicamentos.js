document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var saveForm = document.getElementById('save-form');
    saveForm.addEventListener('submit', function (event) {
        event.preventDefault();
        saveData();
    });

    fetchData();
});

function openCreate() {
    document.getElementById('modal-title').textContent = 'Crear Medicamento';
    document.getElementById('id').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('Dosis').value = '';
    document.getElementById('Fecha-Inicio').value = '';
    document.getElementById('Notas-Descripcion').value = '';
    M.Modal.getInstance(document.getElementById('save-modal')).open();
}

function openEdit(id, nombre, tipo, dosis, fechaInicio, notasDescripcion) {
    document.getElementById('modal-title').textContent = 'Editar Medicamento';
    document.getElementById('id').value = id;
    document.getElementById('nombre').value = nombre;
    document.getElementById('tipo').value = tipo;
    document.getElementById('Dosis').value = dosis;
    document.getElementById('Fecha-Inicio').value = fechaInicio;
    document.getElementById('Notas-Descripcion').value = notasDescripcion;
    M.Modal.getInstance(document.getElementById('save-modal')).open();
}

function saveData() {
    var id = document.getElementById('id').value;
    var nombre = document.getElementById('nombre').value;
    var tipo = document.getElementById('tipo').value;
    var dosis = document.getElementById('Dosis').value;
    var fechaInicio = document.getElementById('Fecha-Inicio').value;
    var notasDescripcion = document.getElementById('Notas-Descripcion').value;

    // Aquí puedes realizar la lógica para guardar los datos en tu base de datos o en alguna otra estructura de datos
    console.log('Datos guardados:');
    console.log('ID:', id);
    console.log('Nombre:', nombre);
    console.log('Tipo:', tipo);
    console.log('Dosis:', dosis);
    console.log('Fecha de inicio del tratamiento:', fechaInicio);
    console.log('Notas/Descripción:', notasDescripcion);

    M.toast({ html: 'Datos guardados correctamente', classes: 'rounded' });
    M.Modal.getInstance(document.getElementById('save-modal')).close();
}

function fetchData() {
    // Aquí puedes realizar la lógica para obtener los datos de tu base de datos o de alguna otra fuente
    // Luego puedes llenar la tabla con los datos obtenidos
    // Puedes simular esta acción con datos estáticos para pruebas

    var data = [
        { id: 1, nombre: 'Medicamento 1', tipo: 'Tipo 1', dosis: 'Dosis 1', fechaInicio: '2024-03-20', notasDescripcion: 'Descripción 1' },
        { id: 2, nombre: 'Medicamento 2', tipo: 'Tipo 2', dosis: 'Dosis 2', fechaInicio: '2024-03-21', notasDescripcion: 'Descripción 2' },
        { id: 3, nombre: 'Medicamento 3', tipo: 'Tipo 3', dosis: 'Dosis 3', fechaInicio: '2024-03-22', notasDescripcion: 'Descripción 3' }
    ];

    var tbody = document.getElementById('tbody-rows');
    tbody.innerHTML = '';

    data.forEach(function (item) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.tipo}</td>
            <td>${item.dosis}</td>
            <td>${item.fechaInicio}</td>
            <td>${item.notasDescripcion}</td>
            <td>
                <a onclick="openEdit(${item.id}, '${item.nombre}', '${item.tipo}', '${item.dosis}', '${item.fechaInicio}', '${item.notasDescripcion}')" class="btn-floating waves-effect blue tooltipped" data-tooltip="Editar">
                    <i class="material-icons">edit</i>
                </a>
                <a onclick="deleteRow(${item.id})" class="btn-floating waves-effect red tooltipped" data-tooltip="Eliminar">
                    <i class="material-icons">delete</i>
                </a>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function deleteRow(id) {
    // Aquí puedes realizar la lógica para eliminar el registro con el id proporcionado
    console.log('Eliminar registro con ID:', id);
    M.toast({ html: 'Registro eliminado correctamente', classes: 'rounded' });
    fetchData(); // Actualizar la tabla después de eliminar un registro
}
