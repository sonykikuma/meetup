import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App'
import EventDetail from './pages/EventDetail'


const router = createBrowserRouter([
	{path:"/", element:<App/>},
	{path:"/events/:eventId", element:<EventDetail/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)