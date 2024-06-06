import EditTopic from "@/components/EditTopic";

const getTopicsByID = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};

const EditPage = async ({ params }) => {
  const { id } = params;
  
  try {
    const { topic } = await getTopicsByID(id);
    console.log(topic); // Log the fetched topic to verify data
  
    // Extract title and description from the fetched topic
    const { title, description } = topic;
  
    return (
      <div>
        <EditTopic id={id} title={title} desc={description} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error gracefully, display an error message, or redirect the user
    return <div>Error: Failed to fetch data</div>;
  }
};

export default EditPage;
