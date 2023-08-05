import * as ActionTypes from './actionTypes';

const defaultState = {
    missions: [],
};

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MISSION: {
            const newData = [
              ...state.missions,
              {
                id: Math.floor(Date.now()),
                name: action.payload,
              }
            ];
            return { ...state, missions: newData};
        }
      default:
        return state;
    }
  };
  
  export default counterReducer;