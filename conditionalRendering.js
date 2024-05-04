// De como obtener un elemento del DOM | HTML

// Tarjetas de usuarios
// Condicionales ternarios
// ? :

let age = 16;

// Declaracion de una linea
let userDrive;
if(age >= 18){
    userDrive = "You can drive";
} else {
    userDrive = "You cannot drive";
}
function drive(){
    console.log("You can drive")
}

function drivent(){
    console.log("You cant drive")
}

let userCanDrive = age >= 18 ? "You can drive" : "You cannot drive";

// undefined == false
function renderCard(username, role, description, linkedInLink, githubLink) {
  const appElement = document.getElementById("app");
  appElement.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${username ? username : "Your name goes here"}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                    ${role ? role : "Role in company"}
                </h6>
                <p class="card-text">
                    ${description ? description : "Some description"}
                </p>
                <a href=${linkedInLink ? linkedInLink : ""} class="card-link">LinkedIn</a>
                <a href=${githubLink ? githubLink : ""} class="card-link">Github</a>
            </div>
        </div>
    `;
}

window.onload = () => {
    renderCard("Jose Morrone", "TA", "Un programador fullstack :)", "https//:linkdedin.com",  "https://github.com/josemi19");
    renderCard();
}
