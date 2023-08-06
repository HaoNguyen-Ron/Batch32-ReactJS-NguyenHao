import * as ActionTypes from './actionTypes';

const defaultState = {
    missions: [],
    isLoadingAdd: false
};

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MISSION: {
          
            return { ...state, isLoadingAdd : true};
        }

        case ActionTypes.ADD_MISSION_SUCCESS: {
            const newData = [
              ...state.missions,
              {
                id: Math.floor(Date.now()),
                name: action.payload,
              }
            ];
            return { ...state, missions: newData, isLoadingAdd : false};
        }

        case ActionTypes.ADD_MISSION_FAILED: {
          
          return { ...state, isLoadingAdd : false};
      }
      default:
        return state;
    }
  };
  
  export default counterReducer;