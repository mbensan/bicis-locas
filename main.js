function validateForm () {
  // your code here
  // 0. Remuevo los span.error de las validaciones anteriores
  $('.error').remove()

  // 1. Me traigo los valores del formulario
  const name = $("#name").val();
  const lastname = $("#lastname").val();
  const email = $("#input-email").val();

  // 2. Obtengo las primeras letras
  const primera_name = name[0];
  const primera_lastname = lastname[0];

  // 3. Patrón para validar email
  const pattern =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

  // 4. Valido el nombre
  if (name.length < 3 || name.length > 8) {
    $('#name').parent().append('<span class="error">El nombre debe tener entre 3 y 8 caracteres</span>')
  }
  else if (primera_name.toUpperCase() != primera_name) {
    $('#name').parent().append('<span class="error">El nombre debe comenzar con una mayúscula</span>')
  }
  // 5. Valido el apellido
  if (lastname.length < 3 || lastname.length > 8) {
    $('#lastname').parent().append('<span class="error">El apellido debe tener entre 3 y 8 caracteres</span>')
  }
  else if (primera_lastname.toUpperCase() != primera_lastname) {
    $('#lastname').parent().append('<span class="error">El apellido debe comenzar con una mayúscula</span>')
  }
  // 6. Validamos el formato del email con nuestro patrón
  if (!pattern.test(email)) {
    $('#input-email').parent().append('<span class="error">Debe ingresar un correo válido</span>')
  }
  // 7. Validamos el select
  if($('select').val() == '0'){
    $('select').parent().append('<span class="error">Debe elegir un tipo de bici</span>');
  }
}

$('#name, #lastname, #input-email, select').on('keyup', validateForm)
