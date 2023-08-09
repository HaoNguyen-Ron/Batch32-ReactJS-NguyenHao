
import Action from "Components/todo/action";
import Add from "Components/todo/addMission";
import List from "Components/todo/listMission";

const TodoPage = () => {
    return ( 
        <>
            <Add />
            <List/>
            <Action />
        </>
     );
}
 
export default TodoPage;