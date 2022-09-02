import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from '../images/amb.JPG';
import Img2 from '../images/amb.JPG';
import Img3 from '../images/headerImg3.jpg';
import Img4 from '../images/headerImg4.jpg';
import Img5 from '../images/amb.JPG';
import Img6 from '../images/amb.JPG';
import Img7 from '../images/amb.JPG';
import Img8 from '../images/amb.JPG';
import Img9 from '../images/amb.JPG';
import './gallery.css';
function Gallery2017() {
  const navigate = useNavigate();
  const images = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState(' ');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <div className="images-container">
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} />
        <button onClick={() => setModel(false)}>
          <iconify-icon icon="carbon:close"></iconify-icon>
        </button>
      </div>
      <nav>
        <button onClick={() => navigate(-1)}>
          <iconify-icon icon="bx:arrow-back"></iconify-icon>
        </button>
        <p>Kosefe Event</p>
      </nav>

      <main className="images">
        {images.map((image, idx) => {
          return (
            <div
              className="image"
              key={idx}
              onClick={() => getImg(image.imgSrc)}
            >
              <img src={image.imgSrc} alt="" style={{ width: '100%' }} />
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Gallery2017;
