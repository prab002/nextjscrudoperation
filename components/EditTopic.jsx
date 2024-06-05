const EditTopic = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic"
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="desription"
      />
      <button className="px-2 py-2 bg-green-400 text-white font-bold w-fit ">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopic;
