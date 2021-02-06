import React from "react";

const DetailJob = (props) => {
  const { params } = props.match;

  return (
    <>
      <div className="place-self-center m-40">
        <h3 className="font-bold text-xl"> {params.position}</h3>
        <span>
          {params.company} · {params.location}
        </span>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            marginTop: 10,
            borderColor: "#000000",
          }}
        />
        <div className="m-10">{params.description}</div>
      </div>
    </>
  );
};

export default DetailJob;
