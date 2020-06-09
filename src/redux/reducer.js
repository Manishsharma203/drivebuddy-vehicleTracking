import {FETCH_REQUEST,FETCH_SUCCESS,FETCH_FAILURE,ADD_VEHICLE_LOCATION} from './actions'

var initialState={
    data:{},
    locations:[]
}

export const reducers=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_SUCCESS:
            return {...state,
                data:action.payload
            } 
        case ADD_VEHICLE_LOCATION:
            let Alldata=state.data
            console.log('Alldata', Alldata)
            let coordinates=[]
            if(action.payload===Alldata._id){
                Alldata.locations.forEach(e=>coordinates.push(e.location.coordinates))
            }
            return {...state,
                locations:coordinates
            }
        case FETCH_REQUEST:
            console.log(action.query)
            break;
        case FETCH_FAILURE:
            console.log(action.query)
            break;
        default:
            return state;
    }
}