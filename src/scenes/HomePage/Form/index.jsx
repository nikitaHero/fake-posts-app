import React from "react";

export default ({ onSubmit, onTextAreaChange, onInputChange, body, title }) => {
  return (
    <div className="border border-grey px-3 py-3 mb-10">
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide  text-xs  mb-2 text-gray-700"
            for="grid-password"
          >
            Type Title here ...
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Title ..."
            value={title}
            onChange={e => onInputChange(e.currentTarget.value)}
          />
        </div>
      </div>
      <label className="block">
        <span className="text-gray-700">Type text here ...</span>
        <textarea
          className="py-3 px-4 border border-grey mb-5 form-textarea mt-1 block bg-gray-200"
          rows="3"
          placeholder="Enter some long form content."
          value={body}
          onChange={e => onTextAreaChange(e.currentTarget.value)}
        ></textarea>
      </label>
      <button
        onClick={onSubmit}
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Post!
      </button>
    </div>
  );
};
