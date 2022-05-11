import Navbar from "./components/Narbar";
import Travel from "./components/Travel";
import data from  "./data.js"

function App() {
    const travel = data.map((item) => {
        return (
            <Travel
                key={item.id}
                title = {item.title}
                location = {item.location}
                 google = {item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                 img = {item.imageUrl}


            />
        )
    })
    console.log(travel)
  return (
      <div>
      <Navbar/>
          {travel}

      </div>
  )
}
export default App;
