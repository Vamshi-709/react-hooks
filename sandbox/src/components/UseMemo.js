import React, { useState, useEffect, useMemo, useRef } from "react";

function UseMemo() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

 // const sqrt = getSqrt(number);
 const renders= useRef(1)
 const sqrt = useMemo(()=>getSqrt(number),[number]);
  useEffect(() => {
    renders.current = renders.current + 1;
  });
  const onClick = (e) => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        className="form-control w-25"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2 className="my-3">
        sqrt of {number} is {sqrt}
      </h2>
      <button className="btn btn-primary" onClick={onClick}>
        Click
      </button>
      Renders :{renders.current}
    </div>
  );
}
function getSqrt(n) {
  for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }
  console.log("expensive function called");
  return Math.sqrt(n);
}
export default UseMemo;
