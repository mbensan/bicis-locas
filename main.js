function validateForm () {
  // your code here

  // 1. Me traigo los valores del formulario
  const name = $("#name").val();
  const email = $("#input-email").val();

  // 2. Obtengo las primeras letras
  const primera_name = name[0];

  // 3. Patrón para validar email
  const pattern =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

  // 4. Valido el nombre
  if (name.length < 3 || name.length > 8) {
    console.log('El nombre debe tener entre 3 y 8 caracteres');
  }
  else if (primera_name.toUpperCase() != primera_name) {
    console.log('El nombre debe comenzar con una mayúscula');
  }
  // 5. Validamos el formato del email con nuestro patrón
  if (!pattern.test(email)) {
    console.log("El email debe ser válido", pattern.test(email), email);
  }
}
