import React from 'react'

function Input(props) {
    const { addProps, placeholder, ...inputProps } = props;
  
    return (
      <div>
        <label className="relative block cursor-text w-full">
          <input
            type="text"
            className={` text-xs peer  outline-none px-4 pt-2 bg-transparent ${addProps}`}
            required
            {...inputProps}
          ></input>
          <span className="absolute top-0 left-0 px-4  flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
            {placeholder}
          </span>
        </label>
      </div>
    );
  }

export default Input
