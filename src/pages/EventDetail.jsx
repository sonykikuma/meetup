import Header from '../components/Header'
import useFetch from '../useFetch'

import {useParams} from 'react-router-dom'

const EventDetail = ()=>{
  const {data, loading, error} = useFetch("https://be-meetup.vercel.app/events"
   // "https://5d499519-f135-42d8-932c-a39183dee00d-00-2j05h1p06nmly.sisko.replit.dev/events"
                                          )
//console.log(data)
  
const eventId = useParams()
console.log( eventId)

  const eventData = data?.find(event => event._id === eventId.eventId)
console.log(eventData)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  
  return(<div className='bg-light'>
  <Header/>
    <hr/>
    <main className=' container'>
      <div className='py-3 row'>
        <div className='col-md-8'>
       <h3 className='fw-bold'>{eventData?.title}</h3> 
        <p>Hosted By: <br/>    <strong>{eventData?.host}</strong>
</p>
        <img src={eventData?.eventImageUrl} alt="" className='img-fluid' style={{ width: '90%', height: '400px', objectFit: 'cover' }}/>
          <h5 className='py-4 fw-bold'>Details:</h5>
          <p>{eventData?.details}</p>
          <h5 className='py-2 fw-bold'>Additional Information:</h5>
          <p><strong>Dress Code:</strong> {eventData?.dressCode}</p>
          <p><strong>Age Restriction:</strong> {eventData?.ageRestriction}</p>
          <h5 className='py-2 fw-bold'>Event Tags</h5>
          {eventData?.eventTags.map((etag,index)=> (<>
          <button key={index} className='btn btn-danger mx-2'>
            {etag}</button></>))}
                                                    
        </div>


        {/* right side */}
        <div className='col-md-4'>
          <div className='card style={{width:"30%"}} border-0'>
            <div className='px-4 d-flex align-items-center'>
              <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
            </svg></div>
              <div>
          <p className='card-text px-4 py-3 '> {eventData?.eventDay} <span>{formatDate(eventData?.eventDate)}</span> at {eventData?.startTime} to<br/>
            {eventData?.eventDay} <span>{formatDate(eventData?.eventDate)}</span> at {eventData?.endTime}
          </p></div>
            </div>
            
   <div className='px-4 d-flex align-items-center'>
<div>            
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg></div>
          <div> 
            <p className='px-4 py-3'>
 Venue <br/>{eventData?.address}</p></div>
   </div>

           <div className='px-4 d-flex '> 
             <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
               <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
             </svg></div>
             <div>
            <p className='px-4 '>
               {eventData?.pricing}</p></div>
             </div>
            
          </div>
          <h5 className='fw-bold pt-5 '>Speakers:    ({eventData?.speakers.length})</h5>
          <div className='row pt-2'>
              {eventData?.speakers.map(espeaker=> (
    <div className='col-md-6'>
    <div className='card mb-2 shadow-lg border-0'>
    <div className='rounded-circle mt-3' style={{ overflow: 'hidden', width: '100px', height: '100px', margin: 'auto' }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNhwZDdl4GUVw8va4YS9KVB7gZYaCDRlhItc_k53duCgk35QEufsw9VUcrmdgC6ulKWQ&usqp=CAU" alt="" className=' img-fluid' />
    </div>
    <div className='text-center mt-2 pb-2'>
      <strong>{espeaker}</strong><br/>
      XYZ Specialist
    </div>
      </div>
      </div>

              ))}
          </div>
        </div>
      </div>
    </main>
  </div>)
}

export default EventDetail