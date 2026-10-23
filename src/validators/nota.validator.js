import { body, param, validationResult } from "express-validator";
 
const responderErrores = (req, res, next)=> {// Crea un meddleware reutilizabel
    const errores = validationResult(req); //Reune lo errores anteriores

    if(!errores.isEmpty()){ // Comprueba si fallo alguna regla
        return res.status(400).json({ errores: errores.array()})  
    }
    next();
};

export const validarCrearNota = [ // Reglas exclusivas para POST.
    body("titulo").trim().isLength({ min: 3, max: 60 }) // Limpia y mide el título.
      .withMessage("El título debe tener entre 3 y 60 caracteres"), // Mensaje si falla.
    body("contenido").trim().isLength({ min: 1, max: 280 }) // Exige contenido.
      .withMessage("El contenido debe tener entre 1 y 280 caracteres"), // Explica el límite.
    body("categoria").isIn(["clase", "tarea", "idea"]) // Acepta tres valores.
      .withMessage("Categoría no válida"), // Mensaje de categoría.
    responderErrores, // Aplica la respuesta común.
  ]; // Cierra la cadena de validaciones.

  
  export const validarActualizarNota = [
    body("titulo").optional().trim().isLength({ min: 3, max: 60 }),
    body("contenido").optional().trim().isLength({ min: 1, max: 280 }),
    body("categoria").optional().isIn(["clase", "tarea", "idea"]),
    responderErrores,
  ];

  export const validarNotaId = [
    param("id")
      .isInt({ min: 1 })
      .withMessage("El id no es válido")
      .toInt(),
    responderErrores,
  ];