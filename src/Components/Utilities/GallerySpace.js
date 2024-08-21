import React, {useState, useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

function App({title, id, ImagesPath, bigImage}) {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className='w-screen h-auto' >
        <div className="h-auto w-screen">
        <div className="h-screen w-full flex justify-center items-center">
            <img id={id}
            src={bigImage}
            alt="Large Photo"
            className={`${
                loaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
            />
            <div
            className={`${
                loaded ? 'translate-y-0' : 'translate-y-24'
            } transition-transform duration-1000 absolute left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 sm:text-3xl text-lg text-white font-bold`}
            >
            {title}
            </div>
        </div>
        <div className="h-1/2 w-full p-4 grid grid-cols-2 gap-4">
            {ImagesPath.map((image, index) => (
            <div key={index} className="relative group">
                {
                    image.link ? (
                        <Link to={`/${image.link}`}>
                            <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                            />
                            <div className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className='w-auto h-auto bg-neutral-900'><p className="text-white text-2xl">{image.teamName}</p></div>
                            </div>
                        </Link>
                    ) : (
                        <>
                            <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                            />
                            <div className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className='w-auto h-auto bg-neutral-900'><p className="text-white text-2xl">{image.teamName}</p></div>
                            </div>
                        </>
                    )
                }
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}

export default App;
