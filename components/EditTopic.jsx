"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router

const EditTopic = ({ id, title, desc }) => {
  const [newTitle, setNewTitle] = useState(title); // Fix state variable name
  const [newDesc, setDesc] = useState(desc); // Fix state variable name
  const router = useRouter(); // Fix import: next/router instead of next/navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription: newDesc }), // Correct variable name
      });
      if (!res.ok) {
        throw new Error("Failed to update");
      }
      router.push("/");
      router.refresh; // Use router.push instead of route.push
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)} // Fix function name
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Description" // Fix typo: description
        value={newDesc}
        onChange={(e) => setDesc(e.target.value)} // Fix function name
      />
      <button
        type="submit"
        className="px-2 py-2 bg-green-400 text-white font-bold w-fit "
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopic;
