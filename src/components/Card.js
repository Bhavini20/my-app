import "../styles/Card.css"

const Card=({cardImage, cardThumb, cardTitle, cardStatus, cardDesc})=>{
  return <div className="card">
    <img src={cardImage} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className="card__thumb" src={cardThumb} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">{cardTitle}</h3>            
                  <span className="card__status">{cardStatus}</span>
                </div>
              </div>
              <p className="card__description">{cardDesc}</p>
            </div>
  </div>
}

export default Card;