import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { tasks, deleteTask } = useContext(TaskContext);
  const [search, setSearch] = useState("");

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 mx-auto">
      <div className="flex justify-between  gap-2 mb-4">
        <input
          className=" border-gray-300 border w-[50%] p-2  rounded"
          placeholder="Search tasks..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link
          to="/create"
          className="bg-green-600  text-white px-6 py-2 rounded">
          + New Task
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((task) => (
            <tr key={task.id}>
              <td className="border border-gray-200 p-2">{task.title}</td>
              <td className="border border-gray-200 p-2">{task.description}</td>
              <td className="border border-gray-200 p-2 space-x-2">
                <Link
                  to={`/edit/${task.id}`}
                  className="text-white bg-blue-500 px-2 py-1 rounded "
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-600 text-white rounded px-2 py-1 cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
