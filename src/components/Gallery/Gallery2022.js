import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './gallery.css';
function Gallery2022() {
  const navigate = useNavigate();
  const images = [
    {
      id: 1,
      imgSrc: require('./2022EVENTS/1.jpg'),
    },
    {
      id: 2,
      imgSrc: require('./2022EVENTS/2.jpg'),
    },
    {
      id: 3,
      imgSrc: require('./2022EVENTS/3.jpg'),
    },
    {
      id: 4,
      imgSrc: require('./2022EVENTS/4.jpg'),
    },
    {
      id: 5,
      imgSrc: require('./2022EVENTS/5.jpg'),
    },
    {
      id: 6,
      imgSrc: require('./2022EVENTS/6.jpg'),
    },
    {
      id: 7,
      imgSrc: require('./2022EVENTS/7.jpg'),
    },
    {
      id: 8,
      imgSrc: require('./2022EVENTS/8.jpg'),
    },
    {
      id: 9,
      imgSrc: require('./2022EVENTS/9.jpg'),
    },
    {
      id: 10,
      imgSrc: require('./2022EVENTS/10.jpg'),
    },
    {
      id: 11,
      imgSrc: require('./2022EVENTS/11.jpg'),
    },
    {
      id: 12,
      imgSrc: require('./2022EVENTS/12.jpg'),
    },
    {
      id: 13,
      imgSrc: require('./2022EVENTS/13.jpg'),
    },
    {
      id: 14,
      imgSrc: require('./2022EVENTS/14.jpg'),
    },
    {
      id: 15,
      imgSrc: require('./2022EVENTS/15.jpg'),
    },
    {
      id: 16,
      imgSrc: require('./2022EVENTS/16.jpg'),
    },
    {
      id: 17,
      imgSrc: require('./2022EVENTS/17.jpg'),
    },
    {
      id: 18,
      imgSrc: require('./2022EVENTS/18.jpg'),
    },
    {
      id: 19,
      imgSrc: require('./2022EVENTS/19.jpg'),
    },
    {
      id: 20,
      imgSrc: require('./2022EVENTS/20.jpg'),
    },
    {
      id: 21,
      imgSrc: require('./2022EVENTS/21.jpg'),
    },
    {
      id: 22,
      imgSrc: require('./2022EVENTS/22.jpg'),
    },
    {
      id: 23,
      imgSrc: require('./2022EVENTS/24.jpg'),
    },
    {
      id: 24,
      imgSrc: require('./2022EVENTS/24.jpg'),
    },
    {
      id: 25,
      imgSrc: require('./2022EVENTS/25.jpg'),
    },
    {
      id: 26,
      imgSrc: require('./2022EVENTS/26.jpg'),
    },
    {
      id: 27,
      imgSrc: require('./2022EVENTS/27.jpg'),
    },
    {
      id: 28,
      imgSrc: require('./2022EVENTS/28.jpg'),
    },
    {
      id: 29,
      imgSrc: require('./2022EVENTS/29.jpg'),
    },
    {
      id: 30,
      imgSrc: require('./2022EVENTS/26.jpg'),
    },
    {
      id: 31,
      imgSrc: require('./2022EVENTS/31.jpg'),
    },
    {
      id: 32,
      imgSrc: require('./2022EVENTS/32.jpg'),
    },
    {
      id: 33,
      imgSrc: require('./2022EVENTS/33.jpg'),
    },
    {
      id: 34,
      imgSrc: require('./2022EVENTS/34.jpg'),
    },
    {
      id: 35,
      imgSrc: require('./2022EVENTS/35.jpg'),
    },
    {
      id: 36,
      imgSrc: require('./2022EVENTS/36.jpg'),
    },
    {
      id: 37,
      imgSrc: require('./2022EVENTS/37.jpg'),
    },
    {
      id: 38,
      imgSrc: require('./2022EVENTS/38.jpg'),
    },
    {
      id: 39,
      imgSrc: require('./2022EVENTS/39.jpg'),
    },
    {
      id: 40,
      imgSrc: require('./2022EVENTS/40.jpg'),
    },
    {
      id: 41,
      imgSrc: require('./2022EVENTS/41.jpg'),
    },
    {
      id: 42,
      imgSrc: require('./2022EVENTS/42.jpg'),
    },
    {
      id: 43,
      imgSrc: require('./2022EVENTS/43.jpg'),
    },
    {
      id: 44,
      imgSrc: require('./2022EVENTS/44.jpg'),
    },
    {
      id: 45,
      imgSrc: require('./2022EVENTS/45.jpg'),
    },
    {
      id: 46,
      imgSrc: require('./2022EVENTS/46.jpg'),
    },
    {
      id: 47,
      imgSrc: require('./2022EVENTS/47.jpg'),
    },
    {
      id: 48,
      imgSrc: require('./2022EVENTS/48.jpg'),
    },
    {
      id: 49,
      imgSrc: require('./2022EVENTS/49.jpg'),
    },
    {
      id: 50,
      imgSrc: require('./2022EVENTS/50.jpg'),
    },
    {
      id: 51,
      imgSrc: require('./2022EVENTS/51.jpg'),
    },
    {
      id: 52,
      imgSrc: require('./2022EVENTS/52.jpg'),
    },
    {
      id: 53,
      imgSrc: require('./2022EVENTS/53.jpg'),
    },
    {
      id: 54,
      imgSrc: require('./2022EVENTS/54.jpg'),
    },
    {
      id: 55,
      imgSrc: require('./2022EVENTS/55.jpg'),
    },
    {
      id: 56,
      imgSrc: require('./2022EVENTS/56.jpg'),
    },
    {
      id: 57,
      imgSrc: require('./2022EVENTS/57.jpg'),
    },
    {
      id: 58,
      imgSrc: require('./2022EVENTS/58.jpg'),
    },
    {
      id: 59,
      imgSrc: require('./2022EVENTS/59.jpg'),
    },
    {
      id: 60,
      imgSrc: require('./2022EVENTS/60.jpg'),
    },
    {
      id: 61,
      imgSrc: require('./2022EVENTS/61.jpg'),
    },
    {
      id: 62,
      imgSrc: require('./2022EVENTS/62.jpg'),
    },
    {
      id: 63,
      imgSrc: require('./2022EVENTS/63.jpg'),
    },
    {
      id: 64,
      imgSrc: require('./2022EVENTS/64.jpg'),
    },
    {
      id: 65,
      imgSrc: require('./2022EVENTS/65.jpg'),
    },
    {
      id: 66,
      imgSrc: require('./2022EVENTS/66.jpg'),
    },
    {
      id: 68,
      imgSrc: require('./2022EVENTS/68.jpg'),
    },
    {
      id: 69,
      imgSrc: require('./2022EVENTS/69.jpg'),
    },
    {
      id: 70,
      imgSrc: require('./2022EVENTS/70.jpg'),
    },
    {
      id: 71,
      imgSrc: require('./2022EVENTS/71.jpg'),
    },
    {
      id: 72,
      imgSrc: require('./2022EVENTS/72.jpg'),
    },
    {
      id: 73,
      imgSrc: require('./2022EVENTS/69.jpg'),
    },
    {
      id: 74,
      imgSrc: require('./2022EVENTS/74.jpg'),
    },
    {
      id: 75,
      imgSrc: require('./2022EVENTS/75.jpg'),
    },
    {
      id: 76,
      imgSrc: require('./2022EVENTS/76.jpg'),
    },
    {
      id: 77,
      imgSrc: require('./2022EVENTS/77.jpg'),
    },
    {
      id: 78,
      imgSrc: require('./2022EVENTS/78.jpg'),
    },
    {
      id: 79,
      imgSrc: require('./2022EVENTS/79.jpg'),
    },
    {
      id: 80,
      imgSrc: require('./2022EVENTS/80.jpg'),
    },
    {
      id: 81,
      imgSrc: require('./2022EVENTS/81.jpg'),
    },
    {
      id: 82,
      imgSrc: require('./2022EVENTS/82.jpg'),
    },
    {
      id: 83,
      imgSrc: require('./2022EVENTS/83.jpg'),
    },
    {
      id: 84,
      imgSrc: require('./2022EVENTS/84.jpg'),
    },
    {
      id: 85,
      imgSrc: require('./2022EVENTS/85.jpg'),
    },
    {
      id: 86,
      imgSrc: require('./2022EVENTS/86.jpg'),
    },
    {
      id: 87,
      imgSrc: require('./2022EVENTS/87.jpg'),
    },
    {
      id: 88,
      imgSrc: require('./2022EVENTS/88.jpg'),
    },
    {
      id: 89,
      imgSrc: require('./2022EVENTS/89.jpg'),
    },
    {
      id: 90,
      imgSrc: require('./2022EVENTS/90.jpg'),
    },
    {
      id: 91,
      imgSrc: require('./2022EVENTS/91.jpg'),
    },
    {
      id: 92,
      imgSrc: require('./2022EVENTS/92.jpg'),
    },
    {
      id: 93,
      imgSrc: require('./2022EVENTS/93.jpg'),
    },

    {
      id: 94,
      imgSrc: require('./2022EVENTS/94.jpg'),
    },
    {
      id: 95,
      imgSrc: require('./2022EVENTS/95.jpg'),
    },
    {
      id: 96,
      imgSrc: require('./2022EVENTS/96.jpg'),
    },
    {
      id: 97,
      imgSrc: require('./2022EVENTS/97.jpg'),
    },
    {
      id: 98,
      imgSrc: require('./2022EVENTS/98.jpg'),
    },
    {
      id: 99,
      imgSrc: require('./2022EVENTS/99.jpg'),
    },
    {
      id: 100,
      imgSrc: require('./2022EVENTS/100.jpg'),
    },
    {
      id: 101,
      imgSrc: require('./2022EVENTS/101.jpg'),
    },
    {
      id: 102,
      imgSrc: require('./2022EVENTS/102.jpg'),
    },

    {
      id: 103,
      imgSrc: require('./2022EVENTS/103.jpg'),
    },
    {
      id: 104,
      imgSrc: require('./2022EVENTS/104.jpg'),
    },
    {
      id: 105,
      imgSrc: require('./2022EVENTS/105.jpg'),
    },
    {
      id: 106,
      imgSrc: require('./2022EVENTS/106.jpg'),
    },
    {
      id: 107,
      imgSrc: require('./2022EVENTS/107.jpg'),
    },
    {
      id: 108,
      imgSrc: require('./2022EVENTS/108.jpg'),
    },
    {
      id: 109,
      imgSrc: require('./2022EVENTS/109.jpg'),
    },
    {
      id: 110,
      imgSrc: require('./2022EVENTS/110.jpg'),
    },
    {
      id: 111,
      imgSrc: require('./2022EVENTS/111.jpg'),
    },
    {
      id: 112,
      imgSrc: require('./2022EVENTS/112.jpg'),
    },
    {
      id: 113,
      imgSrc: require('./2022EVENTS/113.jpg'),
    },
    {
      id: 114,
      imgSrc: require('./2022EVENTS/114.jpg'),
    },
    {
      id: 116,
      imgSrc: require('./2022EVENTS/116.jpg'),
    },
    {
      id: 117,
      imgSrc: require('./2022EVENTS/117.jpg'),
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
        <p>2022 Event</p>
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

export default Gallery2022;
