const CARD_CONTAINER = document.querySelector("#card-container");

const MYINFO = [{
    username: "RBD",
    formacion: "¿Que hay detras ?",
}];

function createElements(){
    const cardObj = {
        name_section: document.createElement("h3"),
        formacion_section: document.createElement("p"),
    }
    return cardObj;
};

function renderCard(cardObj) {
    const card = docuent.createElement("div");
    card.append(
        cardObj.name_section,
        cardObj.formacion_section,
    );
    card.className = "div-creado";
    CARD_CONTAINER.appendChild(card);
}

function insertData(obj, persona) {
    obj.name_section.textContent = persona.username;
    obj.formacion_section.textContent = persona.formacion
    renderCard(obj);
}

MYINFO.forEach((user) => {
    const cardData = createElements();
    insertData(cardData, user);
  });