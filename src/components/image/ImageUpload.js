import React from "react";

const ImageUpload = ({ onChange = () => {}, imageupload = "" }) => {
  //   const handleUploadImage = (e) => {
  //     console.log(e.target.files);
  //   };

  return (
    <label className="w-full h-[200px] overflow-hidden relative border border-gray-200 border-dashed rounded-xl cursor-pointer flex items-center justify-center">
      <input type="file" className="hidden" onChange={onChange} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
      {imageupload && (
        <img
          src={imageupload}
          alt="img-campaign"
          className="w-full h-full object-cover"
        />
      )}
    </label>
  );
};

export default ImageUpload;
