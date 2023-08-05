import { useSelector, useDispatch } from 'react-redux';

const List = () => {
    const missions = useSelector((state) => state.todoReducer.missions);
    return missions.length > 0 ? (
        missions.map((m) => <ListItem key={m.id} content={m.name} id={m.id} />)
      ) : (
        <>
          <ListItem
            classes="text-danger"
            content="Không có nhiệm vụ"
          />
        </>
      );
    }

export default List;
function ListItem({ content }) {
    return (
    <div className="input-group mb-3">
        <input
            type="text"
            className="form-control"
            placeholder='Mission 1'
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            disabled
            defaultValue={content}
        />
        <button className="btn btn-outline-danger" type="button" id="button-addon2">
            <i className="fa-solid fa-trash-can"></i>
        </button>
    </div>

    );
}