import React from 'react';
import {Task} from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';


const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* {TODO: Aplicar un for/map para hacer rendering de una lista} */}
            <TaskListComponent task={defaultTask}></TaskListComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
