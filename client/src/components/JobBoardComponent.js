import React from "react";
import { useHistory } from "react-router-dom";

const JobBoardComponent = ({ job, handleTagClick }) => {
  const history = useHistory();

  const tags = [job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }
  return (
    <div className="flex  bg-white shadow-md m-4 p-6 rounded">
      <div>
        <img className="h-12 w-12" src={job.logo} alt={job.company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-blue-500">
          {job.company}
          {job.isNew && (
            <span className="bg-blue-500 text-blue-100 font-bold m-2 py-1 px-2 rounded-full">
              New
            </span>
          )}
          {job.isFeatured && (
            <span className="bg-gray-800 text-white font-bold m-2 py-1 px-2 rounded-full">
              Featured
            </span>
          )}
        </h3>
        <h2
          className="font-bold text-xl cursor-pointer"
          onClick={() =>
            history.push(
              `/jobdetail/${job.id}/${job.company}/${job.position}/${job.location}/${job.description}`
            )
          }
        >
          {job.position}
        </h2>
        <p className="text-gray-700">
          {job.contract} · {job.location}
        </p>
      </div>
      <div className="flex items-center justify-end ml-auto">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className="text-blue-500 bg-blue-100 font-bold m-2 p-2 rounded"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
