import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import useForm from "../hooks/useForm";
import TaskForm from "../components/TaskForm";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, updateTask } = useContext(TaskContext);

  const existing = tasks.find((t) => t.id === id);

  const { formData, setFormData, handleChange } = useForm(existing);

  function submit(e) {
    e.preventDefault();
    updateTask(id, formData);
    alert("Task Updated!");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Task</h1>
      <TaskForm formData={formData} handleChange={handleChange} onSubmit={submit} />
    </div>
  );
}
