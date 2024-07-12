import { useEffect, useState} from "react";
import { Html5Qrcode } from 'html5-qrcode';
import { Link } from 'react-router-dom';
import './scanQrCodePage.css';






function ScanQrCodePage() {
    const [result, setResult] = useState(null);


    // useEffect(() => {
    //     // Anything in here is fired on component mount.
    //     if(!html5QrCode?.getState()){
    //         html5QrCode = new Html5Qrcode(qrcodeId);
    //         const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    //             /* handle success */
    //         };
    //         const config = { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.777778};

    //         // If you want to prefer back camera
    //         html5QrCode.start(
    //             { facingMode: "environment" },
    //             config,
    //             qrCodeSuccessCallback
    //         );
    //     }

    //     return () => {
    //         // Anything in here is fired on component unmount.

    //     };
    // }, []);

   

    useEffect(() => {
        const scanner = new Html5Qrcode('reader');
        let qrboxFunction = function(viewfinderWidth, viewfinderHeight) {
            let minEdgePercentage = 0.9; // 70%
            let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
            let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
            return {
                width: qrboxSize,
                height: qrboxSize
            };
        }
        const config = {
            qrbox: qrboxFunction,
            fps: 5,
            aspectRatio: 1.0
        };

        const qrCodeSuccessCallback = (decodedText) => {
            setResult(decodedText);
        };

        scanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
            .catch(err => {
                console.error("Unable to start scanning.", err);
            });

      }, []);
    

    return(
        <div className="alignCenter">
            <div className="scanPageContainer">
                <div style={{marginBottom: "40px", marginTop: "150px"}}>
                    <Link to="/">Back</Link>
                </div>
                <div>QR Info:</div>
                <div className="resultContainer">
                    <div style={{marginTop: "5px", marginBottom: "5px", marginLeft: "10px"}}>{result}</div>
                </div>
                <div className="scannerContainer" style={{marginTop: "50px"}}>
                    <div id="reader" ></div>
                </div> 
            </div>
        </div>
       
        
    );
}

export default ScanQrCodePage;