import React from "react";

const card = ({ name, email, id, username }) => {
  return (
    <div div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot photo" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{username}</p>
      </div>
    </div>
  );
};

export default card;
