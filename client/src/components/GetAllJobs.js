import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../GraphQL/Queries";
import JobBoardComponent from "./JobBoardComponent";
// import Pagination from "./Pagination";

function GetAllJobs() {
  const { error, loading, data } = useQuery(LOAD_JOBS);
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  const filterFunc = ({ level, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [level];

    if (languages) {
      tags.push(...languages);
    }
    return tags.some((tag) => filters.includes(tag));
  };
  const filteredJobs = jobs?.filter(filterFunc);
  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  useEffect(() => {
    if (data) {
      setJobs(data.getAllJob);
    } else if (error) {
      console.log(error);
    } else if (loading) {
      console.log(loading);
    }
  }, [data, error, loading]);

  return (
    <>
      <div className="flex bg-white shadow-md my-16 mx-10 p-6 rounded">
        {filters?.length > 0 &&
          filters.map((filter) => (
            <span
              onClick={() => handleFilterClick(filter)}
              className="text-blue-500 bg-blue-100 font-bold m-2 p-2 rounded"
            >
              {filter}
            </span>
          ))}
      </div>
      {jobs.length === 0 ? (
        <p>jobs are fetching</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoardComponent
            job={job}
            key={job.id}
            handleTagClick={handleTagClick}
          />
        ))
      )}
      {/* <Pagination /> */}
    </>
  );
}

export default GetAllJobs;
