import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="py-4 px-8 rounded-md border-[2px] border-blue-400 border-solid blue-shadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
