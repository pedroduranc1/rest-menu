export function filtrarPlatosPorTipo(menu, tipoComida) {
  // Verificamos si el tipo de comida existe en el menú
  
  if (menu?.hasOwnProperty(tipoComida)) {
    return menu[tipoComida];
  } else {
    // Si el tipo de comida no existe, retornamos un arreglo vacío
    return [];
  }
}
