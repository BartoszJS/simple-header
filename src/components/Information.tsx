import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
  open: boolean;
  onClick: () => void;
}

const Information = ({ open, onClick }: Props) => {
  return (
    <div className='my-div m-4'>
      <div className='header flex' onClick={onClick}>
        <div className='cursor-pointer mt-6 mx-4 w-full text-lg'>
          Lorem ipsum dolor sit amet?
        </div>
        <div
          className={`${
            open ? "rotate-180 " : "rotate-0"
          } mt-6 flex justify-center items-center text-3xl cursor-pointer duration-150 `}
        >
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
      <div
        className={`content m-3 ${open ? "expanded" : ""}`}
        aria-expanded={open}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        facere velit quasi, mollitia ea voluptatum cum fugit provident
        perspiciatis ipsa quas voluptates dignissimos laudantium dolorem.
        Laudantium velit voluptatibus aliquam. Repudiandae?
      </div>
    </div>
  );
};

export default Information;
