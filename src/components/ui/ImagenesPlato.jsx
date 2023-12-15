import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Minimize2 } from 'lucide-react';

export const ImagenesPlato = ({ imagenes }) => {
    const [isBigImagen, setisBigImagen] = useState(false);
    const [setBigImage, setsetBigImage] = useState(null);
    const [indexImg, setindexImg] = useState(0);
    const [isLeftBlock, setisLeftBlock] = useState(false)
    const [isRightBlock, setisRightBlock] = useState(false)

    const handleClickImage = (imagen, index) => {
        setisBigImagen(true);
        setsetBigImage(imagen);
        setindexImg(index);
    };

    const moverIzq = () => {
        if (indexImg > 0) {
            setindexImg(indexImg - 1);
            setisRightBlock(false)
        }
    };

    const moverDer = () => {
        if (indexImg < imagenes.length - 1) {
            setindexImg(indexImg + 1);
            setisLeftBlock(false)

        }
    };

    return (
        <>
            {isBigImagen ? (
                <div className="w-full relative h-[300px]  mt-5">
                    <ChevronLeft
                        onClick={moverIzq}
                        className="absolute text-gray-400 -left-[10%] top-[50%]"
                    />

                    <div className='w-full relative h-full'>
                        <Minimize2 onClick={()=> setisBigImagen(false)} className='absolute top-3 bg-white rounded-md text-orange-500 cursor-pointer right-3'/>
                    <img src={imagenes[indexImg]} className="w-full h-full" alt="" />
                    </div>
                    
                    <ChevronRight
                        onClick={moverDer}
                        className="absolute text-gray-400 -right-[10%] top-[50%]"
                    />
                </div>
            ) : (
                <div className="w-full flex space-x-2 mt-2">
                    {imagenes.map((imagen, index) => (
                        <div
                            key={index}
                            onClick={() => handleClickImage(imagen, index)}
                            className="w-[20%] cursor-pointer h-[80px]"
                        >
                            <img src={imagen} className="w-full h-full" alt="" />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
