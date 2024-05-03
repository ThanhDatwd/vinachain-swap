import { EyeIcon } from "@/assets/icons/EyeIcon";
import React, { useState, useRef, useEffect } from "react";
interface IProps {
  content: string | React.ReactNode;
}
const Tooltip2 = ({ content }:IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("click", handleMouseMove);

    return () => {
      window.removeEventListener("click", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      onClick={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
       <div
          onClick={() => {
            
          }}
        
          className={`border relative rounded p-2 w-fit cursor-pointer hover:bg-gray200 z-[1]`} 
        >
          <EyeIcon />
        </div>
      {isVisible && (
        <div
        className=" translate-x-1/2 -translate-y-1/2"
          ref={tooltipRef}
          style={{
            position: "absolute",
            top: position.y + 10,
            left: position.x + 10,
            backgroundColor: "#F5F5F5",
            boxShadow: "0px 0px 6px 0px #00000040",
            border: "1px solid #bdc5d133",
            borderRadius: "12px",
            padding: "8px",
            zIndex: 999,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip2;