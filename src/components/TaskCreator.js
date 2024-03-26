import { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Ingrese la tarea"
          value={newTaskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary">Guardar</button>
      </div>
    </form>
  );
};
