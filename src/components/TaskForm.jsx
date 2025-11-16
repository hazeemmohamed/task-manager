export default function TaskForm({ formData, handleChange, onSubmit }) {
  return (
    <form
      className="bg-white border border-gray-200 p-6 w-[50%] rounded shadow space-y-4"
      onSubmit={onSubmit}
    >
      <div>
        <label className="font-medium">Title</label>
        <input
          type="text"
          name="title"
          className="w-full border p-2 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="font-medium">Description</label>
        <textarea
          name="description"
          className="w-full border p-2 rounded"
          value={formData.description}
          onChange={handleChange}
          
        ></textarea>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}
