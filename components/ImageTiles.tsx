import Image from "next/image";
import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";

interface ImageInfo {
  url: string;
  description: string;
}

interface ImageTilesProps {
  images: ImageInfo[];
}

const ImageTile: React.FC<ImageInfo> = ({ url, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative group cursor-pointer overflow-hidden">
      <Image
        src={url}
        alt={description}
        width={600} // Set the width of the image
        height={540} // Set the height of the image
        className="object-cover w-full h-[250px] transition-transform duration-300 transform scale-100 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <FaSearchPlus className="text-white text-3xl" onClick={openModal} />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10">
          <div className="max-w-screen-lg p-4">
            {/* Your modal content */}
            <Image
              src={url}
              alt={description}
              width={800} // Set the width of the modal image
              height={480} // Set the height of the modal image
              className="object-cover w-full h-full"
            />
            <button className="text-white bg-orange-500 self-center w-full py-3 text-[20px]" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ImageTiles: React.FC<ImageTilesProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mx-[150px]">
      {images.map((image, index) => (
        <ImageTile
          key={index}
          url={image.url}
          description={image.description}
        />
      ))}
    </div>
  );
};

export default ImageTiles;
