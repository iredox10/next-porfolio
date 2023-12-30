import Link from "next/link";
import { FaFolder, FaGithub, FaLink } from "react-icons/fa";
const Card = ({projectName,description,tools,ghLink,wbLink}) => {
  return (
    <div className="bg-[#0E0E0D] p-5">
      <div className="flex justify-between">
        <FaFolder className="text-4xl  text-yellow-500  " />
        <div className="flex gap-5">
          <Link href={ghLink || ''} className="p-2">
            <FaGithub className="text-yellow-500 hover:text-white" />
          </Link>
          <Link href={wbLink || ''} className="p-2">
            <FaLink className="text-yellow-500 hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="my-2">
        <h1 className="capitalize font-bold my-5 text-2xl">{projectName}</h1>
        <p>{description}</p>
      </div>
      <div className="flex  gap-3 capitalize">
        {tools.map((tool, index) => (
          <div key={index} className="">
            <p className="text-white/40">{tool.split(",")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
