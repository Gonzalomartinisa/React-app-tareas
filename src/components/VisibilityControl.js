export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

    const handledelete = () => {
        if(window.confirm('Quiere borrar la tarea')){
            cleanTasks()
        }
    }

    return(
      
      <div className="d-flex justify-content-between bg-secondary p-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Mostrar tareas</label>
      <button onClick={handledelete} className="btn btn-danger btn-sm">
        Borrar
      </button>
    </div>
    )
}