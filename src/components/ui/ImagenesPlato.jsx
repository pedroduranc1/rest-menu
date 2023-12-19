import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Minimize2 } from 'lucide-react';

export const ImagenesPlato = ({ imagenes }) => {
    const [isBigImagen, setisBigImagen] = useState(false);
    const [setBigImage, setsetBigImage] = useState(null);
    const [indexImg, setindexImg] = useState(0);
    const [isLeftBlock, setisLeftBlock] = useState(false);
    const [isRightBlock, setisRightBlock] = useState(false);
    const [isVideo, setIsVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const esArchivoMP4 = (nombreArchivo) => {
        // Obtén la extensión del archivo

        var extension = nombreArchivo.split('.').pop().toLowerCase();

        // Verifica si la extensión es "mp4"
        return extension === 'mp4';
    }

    useEffect(() => {
        if (imagenes && esArchivoMP4(imagenes[0])) {
            setIsVideo(true);
            setVideoUrl(imagenes[0]);
        }
    }, [imagenes]);

    const handleClickImage = (imagen, index) => {
        setisBigImagen(true);
        setsetBigImage(imagen);
        setindexImg(index);
    };

    const moverIzq = () => {
        if (indexImg > 0) {
            setindexImg(indexImg - 1);
            setisRightBlock(false);
        }
    };

    const moverDer = () => {
        if (indexImg < imagenes.length - 1) {
            setindexImg(indexImg + 1);
            setisLeftBlock(false);
        }
    };

    return (
        <>
            {isBigImagen && !isVideo ? (
                <div className="w-full relative h-auto aspect-video mt-5">
                    <ChevronLeft
                        onClick={moverIzq}
                        className="absolute text-gray-400 w-10 h-10 cursor-pointer -left-[10%] top-[45%]"
                    />

                    <div className='w-full relative h-full'>
                        <Minimize2 onClick={() => setisBigImagen(false)} className='absolute top-3 w-7 h-7 p-1 bg-black/40 rounded-md text-white cursor-pointer right-3' />
                        <img key={indexImg} src={imagenes[indexImg]} className="w-full h-full" alt="" />
                    </div>

                    <ChevronRight
                        onClick={moverDer}
                        className="absolute text-gray-400 w-10 h-10 cursor-pointer -right-[10%] top-[45%]"
                    />
                </div>
            ) : (
                <div className="w-full flex space-x-2 mt-2">
                    {
                        imagenes?.length > 1 ? (
                            <>
                                {imagenes?.map((imagen, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleClickImage(imagen, index)}
                                        className="grid cursor-pointer grid-flow-col"
                                    >
                                        <img key={index} src={imagen} className="w-full h-full" alt="" />
                                    </div>
                                ))}
                            </>) : (<>
                                {
                                    imagenes && !isVideo && (
                                        <div className='w-full relative h-full'>
                                            <img key={indexImg} src={imagenes[indexImg]} className="w-full h-full" alt="" />
                                        </div>
                                    )
                                }
                            </>)
                    }
                    {
                        imagenes && (<>
                            {
                                esArchivoMP4(imagenes[0]) &&
                                (<div className='w-full relative h-full'>
                                    <video key={imagenes[0]} controls src={imagenes[0]} ></video>
                                </div>)
                            }
                        </>)

                    }
                </div>
            )}
        </>
    );
};
