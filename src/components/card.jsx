import "./card.css";

function Card(){
    const myInfo = {
        nombre: "Ma. Azucena Peredo Aguilar",
        formacion: "Lic. en Biología y MRes en Tecnología Biomolecular",
    };
    return (
        <div className="cardP">
            <h2>{myInfo.nombre}</h2>
            <p>{myInfo.formacion}</p>
        </div>
    )
    
}

export default Card;