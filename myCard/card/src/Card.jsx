import reactIcon from "./assets/react.svg"

function Card(){
    return(
    <div className="card">
            <img className="card-image" src={reactIcon} alt="profile picture"/>
            <h2 className="card-title" >Darek</h2>
            <p className="card-text">Writing code</p>
    </div>
    
    );
}

export default Card