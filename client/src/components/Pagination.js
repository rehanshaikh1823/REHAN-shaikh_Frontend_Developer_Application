// import ReactPaginate from "react-paginate";

// import React from "react";

// const Pagination = () => {
//   const [pageNumber, setPageNumber] = useState(0);

//   const jobsPerPage = 5;
//   const pagesVisited = pageNumber * jobsPerPage;

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   const pageCount = Math.ceil(jobs.length / jobsPerPage);
//   const displayJobs = jobs
//     .slice(pagesVisited, pagesVisited + jobsPerPage)
//     .map((job) => {
//       return (
//         <div className="user">
//           {filteredJobs.map((x) => (
//             <JobBoardComponent
//               job={x}
//               key={x.id}
//               handleTagClick={handleTagClick}
//             />
//           ))}
//           <JobBoardComponent
//             job={job}
//             key={job.id}
//             handleTagClick={handleTagClick}
//           />
//         </div>
//       );
//     });

//   return (
//     <div>
//       {displayJobs}
//       <ReactPaginate
//         previousLabel="Previous"
//         nextLabel="Next"
//         pageCount={pageCount}
//         onPageChange={changePage}
//         containerClassName={"paginationBttns"}
//         previousLinkClassName={"pretviousBttn"}
//         nextLinkClassName={"nextBttn"}
//         disabledClassName={"paginationDisabled"}
//         activeClassName={"paginationActive"}
//       />
//     </div>
//   );
// };

// export default Pagination;
