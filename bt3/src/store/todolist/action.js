import * as ActionTypes from './actionTypes';

export const addMissionAction = () => ({
    type: ActionTypes.ADD_MISSION,
})
export const addMissionSuccessAction = (mission) => ({
    type: ActionTypes.ADD_MISSION_SUCCESS, // ACTION TYPE
    payload: mission, // PARAMETER
});

export const addMissionFailedAction = () => ({
    type: ActionTypes.ADD_MISSION_FAILED, // ACTION TYPE
});