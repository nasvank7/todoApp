import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    if (editIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editIndex ? editValue : item
      );
      setData(updatedData);
      setEditIndex(null);
      setEditValue("");
    } else {
      setData([...data, desc]);
      setDesc("");
    }
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(data[index]);
  };

  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container h- mx-auto px-8 flex flex-row items-center justify-center  mt-4">
          <input
            type="text"
            className=" w-[50%] h-[40px] text-black mb-4"
            value={editIndex !== null ? editValue : desc}
            onChange={(e) => (editIndex !== null ? setEditValue(e.target.value) : setDesc(e.target.value))}
          />
          <button onClick={handleAdd} className="p-2 h-[40px] bg-slate-500 text-white">
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
        <div className="container mx-auto px-8">
          <ul>
            {data.map((item, index) => (
              <div key={index} className="flex flex-row items-center justify-center gap-x-6 py-4">
                <li className="text-white">{item}</li>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-green-500 p-2 text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 p-2 text-white"
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
