import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import useForm from "../hooks/useForm";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {
  const { addTask } = useContext(TaskContext);

  const navigator = useNavigate()

  const { formData, handleChange, reset } = useForm({
    title: "",
    description: "",
  });

  function submit(e) {
    e.preventDefault();
    addTask(formData);
    reset();
    alert("Task Created!");
    navigator("/home")
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create Task</h1>
      <TaskForm formData={formData} handleChange={handleChange} onSubmit={submit} />
    </div>
  );
}
