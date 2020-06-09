import axios from "axios"

// action types
export const FETCH_REQUEST="FETCH_REQUEST"
export const FETCH_SUCCESS="FETCH_SUCCESS"
export const FETCH_FAILURE="FETCH_FAILURE"
export const ADD_VEHICLE_LOCATION='ADD_VEHICLE_LOCATION'

export const fetchReq=(query='')=>({
    type:FETCH_REQUEST,
    query
})

export const fetchSuccess=payload=>({
    type:FETCH_SUCCESS,
    payload
})

export const fetchFailure=(query='')=>({
    type:FETCH_REQUEST,
    query
})

export const addVehicleLocation=payload=>({
    type:ADD_VEHICLE_LOCATION,
    payload
})

export const fetchData=(url)=>{
    return dispatch=>{
        dispatch(fetchReq('fetching request'))
        return axios.get(url)
        // .then(res=>console.log(res))
        .then(res=>dispatch(fetchSuccess(res.data)))
        .catch(err=>dispatch(fetchFailure(err)))
    }
}