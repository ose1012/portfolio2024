import React, { useState } from "react";
import "./Album.css";

interface ImageData {
  src: string;
}

const Album: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageData: ImageData[] = [
    {
      src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHW64x%2FbtsF7TrOAj4%2F9e3JOn0r0z51EWPctW2tck%2Fimg.png",
    },
    {
      src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQdcqF%2FbtsHMz6xVdz%2FeRZfGRZZZ3Bs3ZJ0EPC261%2Fimg.png",
    },
    {
      src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbqPUE9%2FbtsHLt0utjH%2FnRjAA1mAcdVThOAmhsjW4k%2Fimg.png",
    },
    {
      src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRCezC%2FbtsHKTkTVFg%2F3xqr1ReYxihxiIkgHEM7t0%2Fimg.png",
    },
    {
      src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVxowh%2FbtsHKpknZrj%2FEi3JEPIK7a5KknjkUkS330%2Fimg.png",
    },
    {
      src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbORM0j%2FbtsHMz6xQ21%2FkKKgytcQFdxbl5et8kIq71%2Fimg.png",
    },
    {
      src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWZHlM%2FbtsHKViHZCA%2FQM3ne4cBbQVE2F8oNjdxz0%2Fimg.png",
    },
  ];

  const openFullscreen = (src: string) => {
    setSelectedImage(src);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div
        className={`fullscreen ${selectedImage ? "open" : ""}`}
        onClick={closeFullscreen}
      >
        {selectedImage && <img src={selectedImage} alt="fullscreen" />}
      </div>
      <div className="album-grid">
        {imageData.map((image, index) => (
          <div
            className="album-item"
            key={index}
            onClick={() => openFullscreen(image.src)}
          >
            <img src={image.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
