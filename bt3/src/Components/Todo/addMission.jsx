import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMissionAction } from "store/todolist/action";

const Add = () => {
    const [mission, setMission] = useState('');
    const dispatch = useDispatch();

    const onChange = (e) => {
        setMission(e.target.value)
    };

    const onAddMission = () => {
        dispatch(addMissionAction(mission));
        setMission('')
    }

    return (
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Add your routine here" 
                aria-label="Recipient's username" 
                aria-describedby="button-addon2" 
                value={mission}
                onChange={onChange}
            />
            <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={onAddMission}>Add</button>
        </div>
    );
}

export default Add;
