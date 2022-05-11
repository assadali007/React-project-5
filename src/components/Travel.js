import rectangle from  '../image/Rectangle 77.png'
import path from '../image/Fill 219.png'

export default function Travel(props) {
   return (
       <section className="travel-container">

       <img className="travel-container-image" src={`../image/${props.img}`}/>

          <div className="travel-container-content">

              <div className ="travel-path-description">

                 <img className="path-image" src={path}/>

                  <h4 className="path-image-heading">{props.location}</h4>

                 <h5 className="google-map"><a href={props.google} target="_blank">View on Google Maps</a></h5>

              </div>

              <h1 className="travel-container-heading">{props.title}</h1>

              <span className="travel-date">{props.startDate} - {props.endDate}</span>

              <p className="travel-container-content-description">{props.description}</p>
          </div>

       </section>


   )
}