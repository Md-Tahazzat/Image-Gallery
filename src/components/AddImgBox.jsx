import React from "react";
import { useDropzone } from "react-dropzone";
import { getGalleryContext } from "./ContextProvider";

const AddImgBox = () => {
  const { imageItems, setImageItems } = getGalleryContext();

  const uploadHandler = (file) => {
    console.log(file);
    const formData = new FormData();
    formData.append("image", file[0]);

    fetch(
      "https://api.imgbb.com/1/upload?key=18ddd86d254c9e3de081b003453ca635",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const url = data?.data?.url;
        if (url) {
          setImageItems([...imageItems, { id: url, url }]);
        }
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: uploadHandler,
  });

  return (
    <div
      {...getRootProps()}
      className="box min-h-[216px] hover:bg-slate-300 duration-150 flex flex-col items-center justify-center"
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-10 h-10"
          src="data:image/png;base64,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"
          alt=""
        />
        <p className="text-base">Add Images</p>
      </div>
    </div>
  );
};

export default AddImgBox;
