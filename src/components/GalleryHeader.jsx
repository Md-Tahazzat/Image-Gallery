import React from "react";

const GalleryHeader = () => {
  return (
    <div className="w-full flex items-center justify-between h-[8vh] border-b-2 border-slate-300">
      {/* TODO: have make the delete button functional $ selected files dynamic */}
      <div>3 Files Selected</div>
      <button>Delete files</button>
    </div>
  );
};

export default GalleryHeader;
