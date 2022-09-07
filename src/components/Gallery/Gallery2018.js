import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from './Images/1.JPG';
import './gallery.css';
function Gallery2018() {
  const navigate = useNavigate();
  const images = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: require('./Images/2.JPG')
    },
    {
      id: 3,
      imgSrc: require('./Images/3.JPG')
    },
    {
      id: 4,
      imgSrc: require('./Images/4.JPG')
    },
    {
      id: 5,
      imgSrc: require('./Images/5.JPG')
    },
    {
      id: 6,
      imgSrc: require('./Images/6.JPG')
    },
    {
      id: 7,
      imgSrc: require('./Images/7.JPG')
    },
    {
      id: 8,
      imgSrc: require('./Images/8.JPG')
    },
    {
      id: 9,
      imgSrc: require('./Images/9.JPG')
    },
    {
      id: 10,
      imgSrc: require('./Images/10.JPG')
    },
    {
      id: 11,
      imgSrc: require('./Images/11.JPG')
    },
    {
      id: 12,
      imgSrc: require('./Images/12.JPG')
    },
    {
      id: 13,
      imgSrc: require('./Images/13.jpg')
    },
    {
      id: 14,
      imgSrc: require('./Images/14.JPG')
    },
    {
      id: 15,
      imgSrc: require('./Images/15.JPG')
    },
    {
      id: 16,
      imgSrc: require('./Images/16.JPG')
    },
    {
      id: 17,
      imgSrc: require('./Images/17.JPG')
    },
    {
      id: 18,
      imgSrc: require('./Images/18.JPG')
    },
    {
      id: 19,
      imgSrc: require('./Images/19.JPG')
    },
    {
      id: 20,
      imgSrc: require('./Images/20.JPG')
    },
    {
      id: 21,
      imgSrc: require('./Images/21.JPG')
    },
    {
      id: 22,
      imgSrc: require('./Images/22.JPG')
    },
    {
      id: 23,
      imgSrc: require('./Images/23.JPG')
    },
    {
      id: 24,
      imgSrc: require('./Images/24.JPG')
    },
    {
      id: 25,
      imgSrc: require('./Images/25.JPG')
    },
    {
      id: 26,
      imgSrc: require('./Images/26.JPG')
    },
    {
      id: 27,
      imgSrc: require('./Images/27.JPG')
    },
    {
      id: 28,
      imgSrc: require('./Images/28.JPG')
    },
    {
      id: 29,
      imgSrc: require('./Images/29.JPG')
    },
    {
      id: 30,
      imgSrc: require('./Images/30.JPG')
    },
    {
      id: 31,
      imgSrc: require('./Images/31.JPG')
    },
    {
      id: 32,
      imgSrc: require('./Images/32.JPG')
    },
    {
      id: 33,
      imgSrc: require('./Images/33.JPG')
    },
    {
      id: 34,
      imgSrc: require('./Images/34.JPG')
    },
    {
      id: 35,
      imgSrc: require('./Images/35.jpg')
    },
    {
      id: 36,
      imgSrc: require('./Images/36.JPG')
    },
    {
      id: 37,
      imgSrc: require('./Images/37.jpg')
    },
    {
      id: 38,
      imgSrc: require('./Images/38.JPG')
    },
    {
      id: 39,
      imgSrc: require('./Images/39.JPG')
    },
    {
      id: 40,
      imgSrc: require('./Images/40.JPG')
    },
    {
      id: 41,
      imgSrc: require('./Images/41.JPG')
    },
    {
      id: 42,
      imgSrc: require('./Images/42.JPG')
    },
    {
      id: 43,
      imgSrc: require('./Images/43.JPG')
    },
    {
      id: 44,
      imgSrc: require('./Images/44.jpg')
    },
    {
      id: 45,
      imgSrc: require('./Images/45.jpg')
    },

    {
      id: 46,
      imgSrc: require('./Images/46.jpg')
    },
    {
      id: 47,
      imgSrc: require('./Images/47.jpg')
    },
    {
      id: 48,
      imgSrc: require('./Images/48.jpg')
    },
    {
      id: 49,
      imgSrc: require('./Images/49.jpg')
    },
    {
      id: 50,
      imgSrc: require('./Images/50.jpg')
    },
    {
      id: 51,
      imgSrc: require('./Images/51.jpg')
    },
    {
      id: 52,
      imgSrc: require('./Images/52.jpg')
    },
    {
      id: 53,
      imgSrc: require('./Images/53.jpg')
    },

        {
      id: 54,
      imgSrc: require('./Images/54.jpg')
    },
        {
      id: 55,
      imgSrc: require('./Images/55.jpg')
    },
    {
      id: 56,
      imgSrc: require('./Images/56.jpg')
    },
    {
      id: 57,
      imgSrc: require('./Images/57.jpg')
    },
    {
      id: 58,
      imgSrc: require('./Images/58.jpg')
    },
        {
      id: 59,
      imgSrc: require('./Images/59.jpg')
    },    {
      id: 60,
      imgSrc: require('./Images/60.jpg')
    },
    {
      id: 61,
      imgSrc: require('./Images/61.jpg')
    },
    {
      id: 62,
      imgSrc: require('./Images/62.jpg')
    },
    {
      id: 63,
      imgSrc: require('./Images/63.jpg')
    },
    {
      id: 64,
      imgSrc: require('./Images/64.jpg')
    },
    {
      id: 65,
      imgSrc: require('./Images/65.jpg')
    },

        {
      id: 67,
      imgSrc: require('./Images/67.jpg')
    },
    {
      id: 69,
      imgSrc: require('./Images/69.jpg')
    },
    {
      id: 70,
      imgSrc: require('./Images/70.jpg')
    },
    {
      id: 71,
      imgSrc: require('./Images/71.jpg')
    },
    {
      id: 72,
      imgSrc: require('./Images/72.jpg')
    },
    {
      id: 73,
      imgSrc: require('./Images/73.jpg')
    },
    {
      id: 74,
      imgSrc: require('./Images/74.jpg')
    },
    {
      id: 75,
      imgSrc: require('./Images/75.jpg')
    },
    {
      id: 76,
      imgSrc: require('./Images/76.jpg')
    },
    {
      id: 77,
      imgSrc: require('./Images/77.jpg')
    },
    {
      id: 78,
      imgSrc: require('./Images/78.jpg')
    },

    {
      id: 79,
      imgSrc: require('./Images/79.jpg')
    },
    {
      id: 80,
      imgSrc: require('./Images/80.jpg')
    },
    {
      id: 81,
      imgSrc: require('./Images/81.jpg')
    },
    {
      id: 82,
      imgSrc: require('./Images/82.jpg')
    },

    {
      id: 83,
      imgSrc: require('./Images/83.jpg')
    },
    {
      id: 84,
      imgSrc: require('./Images/84.jpg')
    },
    {
      id: 85,
      imgSrc: require('./Images/85.jpg')
    },
    {
      id: 86,
      imgSrc: require('./Images/83.jpg')
    },
    {
      id: 87,
      imgSrc: require('./Images/83.jpg')
    },
    {
      id: 88,
      imgSrc: require('./Images/88.jpg')
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
        <p>2018 Event</p>
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

export default Gallery2018;
