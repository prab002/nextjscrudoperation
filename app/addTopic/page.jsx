"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTpic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("titile and description is required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic"
        onChange={(title) => setTitle(title.target.value)}
        value={title}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="desription"
        onChange={(desc) => setDescription(desc.target.value)}
        value={description}
      />
      <button
        type="submit"
        className="px-2 py-2 bg-green-400 text-white font-bold w-fit "
      >
        ADD TOPIC
      </button>
    </form>
  );
};

export default AddTpic;
