import React from 'react'

const Heading = ({text}) => {
  return (
    <div className="relative">
      <h1 className="before:absolute before:w-28 before:h-1  before:bg-secondary-color before:bottom-[-.5rem] capitalize text-4xl font-bold">
        {text}
      </h1>
    </div>
  );
}

export default Heading