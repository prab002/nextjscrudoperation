import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
const TopicList = () => {
  return (
    <div className="p-4 border border-slate-400 flex justify-between items-start my-3 gap-5">
      <div>
        <h1 className="font-bold text-2xl">topic title</h1>
        <p>descrpition</p>
      </div>
      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
};

export default TopicList;
