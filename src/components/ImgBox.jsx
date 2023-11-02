import React, { useEffect, useRef, useState } from "react";

const ImgBox = ({ ind }) => {
  const boxRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // get the box width
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.style.height = `${width}px`;
    }

    /*
    * add event listener so that component re-render when user
    resize the window to have to the box height same as its width.
    */
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`box ${ind === 1 ? "large-img-box " : "bg-slate-300 w-full "}`}
    >
      img-{ind}
    </div>
  );
};

export default ImgBox;
