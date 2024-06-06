import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to get data");
    }

    return res.json();
  } catch (error) {
    console.log("error loding topic", error);
  }
};

const TopicList = async () => {
  const { topic } = await getTopic();

  return (
    <>
      {topic &&
        topic.map((value) => (
          <div
            key={value._id}
            className="p-4 border border-slate-400 flex justify-between items-start my-3 gap-5"
          >
            <div>
              <h1 className="font-bold text-2xl">{value.title}</h1>
              <p>{value.description}</p>
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={value._id}/>
              <Link href={`/editTopic/${value._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default TopicList;
