import React, { useEffect, useState } from "react";

const MyComp = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    const myInter = setInterval(() => {
      Increment();
    }, 500);
    return () => clearInterval(myInter);
  }, []);
  function Increment() {
    setTest((a) => a + 1);
  }

  return (
    <div>
      <p>test: {test}</p>
    </div>
  );
};

export default MyComp;
