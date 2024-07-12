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
        const scanner = new Html5Qrcode('test');
        const config = {
            qrbox: {
                width: 200,
                height: 200
            },
            fps: 5,
            aspectRatio: 1.0
        };

        const qrCodeSuccessCallback = (decodedText) => {
            scanner.stop();
            setResult(decodedText);
        };

        scanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
            .catch(err => {
                console.error("Unable to start scanning.", err);
            });

      }, []);
    

    return(
        <div className="body alignCenter">
            <div className="scanPageContainer">
                <Link to="/">Back</Link>
                <div>QR Info:</div>
                <div className="resultContainer">{result}</div>
                <div className="scannerContainer"></div>
                <div id="test"></div>
            </div>
        </div>
       
        
    );
}

export default ScanQrCodePage;