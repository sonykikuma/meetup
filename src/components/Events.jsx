import { useState } from "react"
import useFetch from '../useFetch'
import {Link} from 'react-router-dom'

const Events= ({searchTerm})=>{
  const {data, loading, error} = useFetch("https://be-meetup.vercel.app/events"
                                        //  https://5d499519-f135-42d8-932c-a39183dee00d-00-2j05h1p06nmly.sisko.replit.dev/events"
                                          )
const [eventType, setEventType] = useState("Both")
console.log(data)


// const filteredEvent = eventType === "Both" ? data : data.filter(event=> event.eventType === eventType)// it can be used only if eventype is just a value not an array

  const filteredEvent = eventType === "Both" ? data : data.filter(event=> event.eventType.includes(eventType)) // as eventype is an array 

  const searchedEvent = searchTerm
    ? filteredEvent.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) || event.eventTags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : filteredEvent;



  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  
  
  return (<>
  <div className="container py-2">
    <div className="d-flex justify-content-between">
    <h1 className="fw-bold">Meetup Events</h1>
    <div className="my-2 fw-light">
      <label htmlFor="eventType">select event type: </label>
      <select id="eventType"  onChange={(e)=>setEventType(e.target.value)}>
      <option value="Both">Both</option>
        <option value="Offline">Offline</option>
        <option value="Online">Online</option>

      </select>
      </div>
    </div>

    <div>
      {loading && 'loading...'}
      {error && <p>An error occured while fetching data.</p>}
      {data && <div className="row mt-3">
        {searchedEvent.map(event=>(
    <div key={event._id} className="col-md-4 mb-4">
        <Link to={`/events/${event._id}`} style={{ textDecoration: 'none' }}>
      <div className="card ">
        <img src={event.eventImageUrl} className="card-img img-fluid" alt="event" style={{height:"300px"}}/>
        <div className="card-img-overlay ">
          <div className="card-text bg-white rounded  btn ">{event.eventType} Event{event.eventType.includes("Both") ? "s" :""}</div>
        </div>
      </div>

      <p className="text-black"><span>{event.eventDay}</span> <span>{formatDate(event.eventDate)}</span> * <span>{event.startTime} IST</span><br/><strong>{event.title}</strong>
      </p>
        </Link>
    </div>
        ))}
      </div>}
    </div>
  </div>
  </>)
}
export default Events