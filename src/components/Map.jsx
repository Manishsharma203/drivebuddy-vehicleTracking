import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useSelector } from 'react-redux';

export default function Map() {

    const locations = useSelector(state => state.locations)

    // initial viewport configuration for ReactMapGL
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '600px',
        longitude: 0,
        latitude: 0,
        zoom: 2
    })
    // viewport configuration for ReactMapGL updates on rendering
    useEffect(() => {
        if (locations.length > 0) {
            setViewport(viewport => ({
                ...viewport,
                longitude: locations[0][0],
                latitude: locations[0][1],
                zoom:17
            })
            )
        }
        console.log(viewport)
        return (() => {
            setViewport(viewport)
        })
    }, [locations])

    // initialising marker variable for changing the coordinates of Marker component at set intervals
    const [marker, setMarker] = useState([])

    useEffect(() => {
        let i = 0;
        let intervalId = setInterval(function () {
            if (i === locations.length) {
                clearInterval(intervalId);
            }
            else {
                setMarker(locations[i])
                i++
            }

        }, 1000);
    }, [locations])

    console.log('marker', marker)

    let REACT_APP_MXACCESSTOKEN='pk.eyJ1IjoibWFuaXNoMDE2IiwiYSI6ImNrYjI5N2toYTBrZ3QzMm1pcGRtbXQ4ZzkifQ.eHhGnS2gNhK5LMg7-4TsWA'


    return (
        <div className='ml-5'>
            <ReactMapGL
                mapboxApiAccessToken={REACT_APP_MXACCESSTOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
                transitionDuration={4000}
            >

                <Marker style={{
                    display: 'block',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    padding: '0'
                }}
                className='leaflet-marker-pane'
                    latitude={marker[1] || 0}
                    longitude={marker[0] || 0}
                    draggable={true}
                >
                    <span className="iconify text-danger" data-icon="el:car" data-inline="false" style={{fontSize:'20px'}}></span>
                </Marker>

            </ReactMapGL>
        </div>
    )
}
