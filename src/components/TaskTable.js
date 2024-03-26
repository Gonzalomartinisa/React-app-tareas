import { TaskRow } from "./TaskRow";

export const TaskTable = ({ task, toogleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return task
      .filter((tasks) => tasks.done === doneValue)
      .map((tasks) => (
        <TaskRow tasks={tasks} key={tasks.name} toogleTask={toogleTask} />
      ));
  };

  return (
    <table className='table table-dark table-striped'>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
