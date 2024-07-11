import { useEffect, useState} from "react";
import { Html5Qrcode } from 'html5-qrcode';
import { Link } from 'react-router-dom';
import './scanQrCodePage.css';





function ScanQrCodePage() {
    const [result, setResult] = useState(null);

    useEffect(() => {
    
        const scanner  = new Html5Qrcode('reader');
        const config = {
          qrbox: {
            width: 250,
            height: 250
          },
          fps: 5,
        }
    
        const qrCodeSuccessCallback = (decodedText) => {
          console.log("Function successCallback is called successfully " + decodedText);
          setResult(decodedText);
        };
    
        scanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

      }, []);
    

    return(
        <div style={{flexDirection: "column"}}>
            <Link to="/">Back</Link>
            <div>QR Info:</div>
            <div className="resultContainer">{result}</div>
            <div id="reader" width="600px"></div>
        </div>
    );
}

export default ScanQrCodePage;