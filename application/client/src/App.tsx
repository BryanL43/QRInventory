import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function App() {
    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "reader",
            { fps: 10, qrbox: { width: 250, height: 250 } },
            false
        );

        scanner.render(
            (decodedText) => {
                console.log("QR Code scanned:", decodedText);
                alert(`Scanned: ${decodedText}`);
            },
            (errorMessage) => {
                console.warn(errorMessage);
            }
        );

        return () => {
            scanner.clear().catch((err) => console.error("Error clearing scanner:", err));
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center mb-6">QR Inventory</h1>
            <div id="reader"></div>
        </div>
    );
}

export default App;
