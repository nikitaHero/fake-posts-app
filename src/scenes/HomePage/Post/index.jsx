import React from "react";

export default ({ data, onRemove }) => {
  return (
    <>
      <div className=" w-full lg:max-w-full lg:flex mb-2 flex-grow">
        <div className=" w-full border border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {data.title}
            </div>
            <p class="text-gray-700 text-base">{data.body}</p>
          </div>
          <button
            data-id={data.id}
            onClick={onRemove}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            RemoveMe!
          </button>
        </div>
      </div>
    </>
  );
};
