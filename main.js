const palabras = ["Romeo", "Julieta", "Romeo", "Julieta", "Pedrito", "Pepito"]

// countInstances
// countValues
// countArrayInstances
function countArrayElements(array) {
  let counter = {};
  for (let i = 0; i < array.length; i++) {
    if (counter[array[i]]) {
      counter[array[i]]++;
    } else {
      counter[array[i]] = 1;
    }
  }
  return counter;
}

// Indice de masa corporal
function calculateBMI(weight, height) {
  return weight / (height * height);
}


function sumRange(range) {
  let summation = 0;
  for (let i = 1; i <= range; i++) {
    summation += i;
  }
  return summation;
}

// En la programacion solo hay dos cosas realmente dificiles
// Invalidacion de cache()
// Nombrar variables
function circleArea(radius) {
  return Math.PI * radius * radius;
}

// Devuelve el conteo de ocurrencias de v en a
function ocurrencesInArray(array, value) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      counter++;
    }
  }
  return counter;
}

// Callbacks y Asincronismo
// -----------
// Solucionar -> el problema | Tarea 
// Mejorar -> La estructura y legibilidad del codigo
// Optimizar -> Mejorar el rendimiento

// Que recibe una nota
// Y retorna el grado/calificacion en escala educativa
function gradingScore(score) {
  // Guard Clausule
  // Clausula de retorno
  // Early return
  // Whatever tiene muchos nombres
  if(score >= 95) return "A+";
  else if(score >= 90) return "A";
  else if(score >= 85) return "B+";
  else if(score >= 80) return "B";
  else if(score >= 75) return "C+";
  else if(score >= 70) return "C";
  else if(score >= 65) return "F+";
  else return "F";
  // switch(score){
  //   case 95:
  //     return "A+";
  //   case 90:
  //     return "A";
  //   case 85:
  //     return "B+";
  //   case 80:
  //     return "B";
  //   case 75:
  //     return "C+";
  //   case 70:
  //     return "C";
  //   case 60:
  //     return "F";
  // }
}

// Probando
console.log(gradingScore(80));

// Recordemos que console.log() Herramienta para debugear y programa


// Magic Strings
// Textos magicos
const USER_TYPES = {
  admin: "admin",
  moderator: "moderator",
  user: "user",
}

const currentUser = "josemialgo";


function getUserRole(userType) {
  if (userType === USER_TYPES.admin) {
    return "Administrator";
  } else if (userType === USER_TYPES.moderator) {
    return "Moderator";
  } else if (userType === USER_TYPES.user) {
    return "Regular User";
  } else {
    return "Unknown Role";
  }
}

const ERROR_CODES = {
  username: {
    code: "ERR001",
    msg: "Invalid username"
  },
  password: {
    code: "ERR002",
    msg:"Password must be at least 8 characters long"
  },
  emailInUse: {
    code: "ERR003",
    msg: "Email address is already in use"
  },
  default: "Unknown Error"
}

function getErrorMessage(errorCode) {
  if (errorCode === ERROR_CODES.username.code) {
    return ERROR_CODES.username.msg;
  } else if (errorCode === ERROR_CODES.password.code) {
    return ERROR_CODES.password.msg;
  } else if (errorCode === ERROR_CODES.emailInUse.code) {
    return ERROR_CODES.emailInUse.msg;
  } else {
    return ERROR_CODES.default;
  }
}

