import React, { useState } from 'react';
import Webcam from 'react-webcam'
import Router from 'next/router'

import jsQR from 'jsqr'

import CameraIcon from '../components/icons/camera.js'
import MenuIcon from '../components/icons/menu.js'
import QRIcon from '../components/icons/qricon.js'

import MenuDrawer from '../components/MenuDrawer.js'

const videoConstraints = {
    width: 1080,
    height: 1920,
    facingMode: 'environment',
    // : ''
}

const Home = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();

            console.log(imageSrc)

            // const code = jsQR(imageData, width, height, options?);

            Router.push('/addreport')
        },
        [webcamRef]
    );

    const [drawerShown, setDrawer] = useState(false);

    return (
        <div>
            <Webcam
                audio={false}
                height={1920}
                width={1080}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                className="WebcamImage"
            />

            <div
                className="TopUI"
            >
                <div
                    className="TopUIButton"
                    onClick={() => setDrawer(true)}
                >
                    <MenuIcon />
                </div>
                <div
                    className="TopUIButton"
                    onClick={() => Router.push('/myqrcode')}
                >
                    <QRIcon />
                </div>
                
                
            </div>

            <div
                className="CameraButton"
                onClick={capture}
            >
                <CameraIcon />
            </div>


            {/* <button >Capture photo</button> */}

            <MenuDrawer shown={drawerShown} onClose={() => setDrawer(false)} />

            <style jsx global>{`
                body {
                    margin: 0;
                }

                .WebcamImage {
                    position: fixed;

                    width: 100vw;
                    height: 100vh;

                    background-color: black;
                }

                .TopUI {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .TopUIButton {
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50px;
                }

                .CameraButton {
                    position: fixed;
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 60px;
                    width: 60px;
                    border-radius: 30px;
                    bottom: 15px;
                    left: calc(50% - 30px);
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
                }

                .CameraButton:active {
                    background-color: #c6c6c6;
                }
            `}</style>
        </div>
    )
}

export default Home
