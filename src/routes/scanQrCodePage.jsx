import { useEffect, useState} from "react";
import { Html5Qrcode } from 'html5-qrcode';



function ScanQrCodePage() {
    const [result, setResult] = useState("");

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
        <div className="body alignCenter" style={{flexDirection: "column"}}>
            <div>Back</div>
            <div>QR Input:</div>
            <div>{result}</div>
            <div id="reader" width="600px"></div>
        </div>
    );
}

export default ScanQrCodePage;