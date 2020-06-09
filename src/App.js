import React, { useEffect } from 'react';
// import mapboxgl from "mapbox-gl";
import './App.css';
import { useDispatch } from 'react-redux';
import {fetchData} from './redux/actions'
import Map from './components/Map';
import Sidebar from './components/Sidebar';

function App() {

  const dispatch = useDispatch()

  // fetching the geoJSON data
  useEffect(() => {
    dispatch(fetchData('drivebuddy-GPS-data.json'))
  }, [])

  return (
    <div className="App">
      <Map/>
      <Sidebar/>
    </div>
  )
}

export default App;
