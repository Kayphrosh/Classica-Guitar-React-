import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './gallery.css';
function Gallery2019() {
  const navigate = useNavigate();
  const images = [
    {
      id: 1,
      imgSrc: require('./2019EVENTS/1.jpg'),
    },
    {
      id: 2,
      imgSrc: require('./2019EVENTS/2.jpg'),
    },
    {
      id: 3,
      imgSrc: require('./2019EVENTS/3.jpg'),
    },
    {
      id: 4,
      imgSrc: require('./2019EVENTS/4.jpg'),
    },
    {
      id: 5,
      imgSrc: require('./2019EVENTS/5.jpg'),
    },
    {
      id: 6,
      imgSrc: require('./2019EVENTS/6.jpg'),
    },
    {
      id: 7,
      imgSrc: require('./2019EVENTS/7.jpg'),
    },
    {
      id: 8,
      imgSrc: require('./2019EVENTS/8.jpg'),
    },
    {
      id: 9,
      imgSrc: require('./2019EVENTS/9.jpg'),
    },
    {
      id: 10,
      imgSrc: require('./2019EVENTS/10.jpg'),
    },
    {
      id: 11,
      imgSrc: require('./2019EVENTS/11.jpg'),
    },
    {
      id: 12,
      imgSrc: require('./2019EVENTS/12.jpg'),
    },
    {
      id: 13,
      imgSrc: require('./2019EVENTS/13.jpg'),
    },
    {
      id: 14,
      imgSrc: require('./2019EVENTS/14.jpg'),
    },
    {
      id: 15,
      imgSrc: require('./2019EVENTS/15.jpg'),
    },
    {
      id: 16,
      imgSrc: require('./2019EVENTS/16.jpg'),
    },
    {
      id: 17,
      imgSrc: require('./2019EVENTS/17.jpg'),
    },
    {
      id: 18,
      imgSrc: require('./2019EVENTS/18.jpg'),
    },
    {
      id: 19,
      imgSrc: require('./2019EVENTS/19.jpg'),
    },
    {
      id: 20,
      imgSrc: require('./2019EVENTS/20.jpg'),
    },
    {
      id: 21,
      imgSrc: require('./2019EVENTS/21.jpg'),
    },
    {
      id: 22,
      imgSrc: require('./2019EVENTS/22.jpg'),
    },
    {
      id: 23,
      imgSrc: require('./2019EVENTS/24.jpg'),
    },
    {
      id: 24,
      imgSrc: require('./2019EVENTS/24.jpg'),
    },
    {
      id: 25,
      imgSrc: require('./2019EVENTS/25.jpg'),
    },
    {
      id: 26,
      imgSrc: require('./2019EVENTS/26.jpg'),
    },
    {
      id: 27,
      imgSrc: require('./2019EVENTS/27.jpg'),
    },
    {
      id: 28,
      imgSrc: require('./2019EVENTS/28.jpg'),
    },
    {
      id: 29,
      imgSrc: require('./2019EVENTS/29.jpg'),
    },
    {
      id: 30,
      imgSrc: require('./2019EVENTS/26.jpg'),
    },
    {
      id: 31,
      imgSrc: require('./2019EVENTS/31.jpg'),
    },
    {
      id: 32,
      imgSrc: require('./2019EVENTS/32.jpg'),
    },
    {
      id: 33,
      imgSrc: require('./2019EVENTS/33.jpg'),
    },
    {
      id: 34,
      imgSrc: require('./2019EVENTS/34.jpg'),
    },
    {
      id: 35,
      imgSrc: require('./2019EVENTS/35.jpg'),
    },
    {
      id: 36,
      imgSrc: require('./2019EVENTS/36.jpg'),
    },
    {
      id: 37,
      imgSrc: require('./2019EVENTS/37.jpg'),
    },
    {
      id: 38,
      imgSrc: require('./2019EVENTS/38.jpg'),
    },
    {
      id: 39,
      imgSrc: require('./2019EVENTS/39.jpg'),
    },
    {
      id: 40,
      imgSrc: require('./2019EVENTS/40.jpg'),
    },
    {
      id: 41,
      imgSrc: require('./2019EVENTS/41.jpg'),
    },
    {
      id: 41,
      imgSrc: require('./2019EVENTS/41.jpg'),
    },
    {
      id: 41,
      imgSrc: require('./2019EVENTS/41.jpg'),
    },
    {
      id: 41,
      imgSrc: require('./2019EVENTS/41.jpg'),
    },
    {
      id: 41,
      imgSrc: require('./2019EVENTS/41.jpg'),
    },
    {
      id: 41,
      imgSrc: require('./2019EVENTS/41.jpg'),
    },
    {
      id: 41,
      imgSrc: require('./2019EVENTS/41.jpg'),
    },

    {
      id: 41,
      imgSrc: require('./2019EVENTS/41.jpg'),
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

export default Gallery2019;
