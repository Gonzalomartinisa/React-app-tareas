export const TaskRow = ({ tasks, toogleTask }) => {
  return (
    <tr key={tasks.name}>
      <td className="d-flex justify-content-between">
        <input
          type="checkbox"
          value={tasks.done}
          onChange={() => toogleTask(tasks)}
        />
        {tasks.name}
      </td>
    </tr>
  );
};
