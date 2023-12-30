import Card from "../components/Card"
import Heading from "../components/Heading"

const page = ()=>{
    return (
      <div className="px-32">
        <Heading text={"Portfolio"} />
        <div className="grid grid-cols-3 gap-10 my-5">
          <Card
            projectName={"English To Hausa Computer Dictionary"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi amet numquam autem accusamus "
            }
            tools={["express", "MongoDb", "Reactjs", "Tailwindcss"]}
          />
          <Card
            projectName={"English To Hausa Computer Dictionary"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi amet numquam autem accusamus "
            }
            tools={["express", "MongoDb", "Reactjs", "Tailwindcss"]}
          />{" "}
          <Card
            projectName={"English To Hausa Computer Dictionary"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi amet numquam autem accusamus "
            }
            tools={["express", "MongoDb", "Reactjs", "Tailwindcss"]}
          />{" "}
          <Card
            projectName={"English To Hausa Computer Dictionary"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi amet numquam autem accusamus "
            }
            tools={["express", "MongoDb", "Reactjs", "Tailwindcss"]}
          />{" "}
          <Card
            projectName={"English To Hausa Computer Dictionary"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi amet numquam autem accusamus "
            }
            tools={["express", "MongoDb", "Reactjs", "Tailwindcss"]}
          />{" "}
          <Card
            projectName={"English To Hausa Computer Dictionary"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi amet numquam autem accusamus "
            }
            tools={["express", "MongoDb", "Reactjs", "Tailwindcss"]}
          />
        </div>
      </div>
    );
}

export default page