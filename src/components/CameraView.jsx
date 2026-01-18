import ScanFrame from './ScanFrame.jsx';
import ResultsOverlay from './ResultsOverlay.jsx';

function CameraView({ instruction, showResults, nutritionData, isScanning, demoImage }) {
    return (
        <div className="camera-container">
            <div className="camera-viewfinder">
                {demoImage && (
                    <div className="demo-image-container">
                        <img src={demoImage} alt="Demo Label" className="demo-image" />

                        {isScanning && (
                            <>
                                <div className="scan-laser"></div>
                                {/* AI OCR Simulation Bounding Boxes */}
                                <div className="ocr-box ocr-box-1"></div>
                                <div className="ocr-box ocr-box-2"></div>
                                <div className="ocr-box ocr-box-3"></div>
                                <div className="ocr-box ocr-box-4"></div>

                                {/* Data Stream Particles */}
                                <div className="data-particle p-1"></div>
                                <div className="data-particle p-2"></div>
                                <div className="data-particle p-3"></div>
                            </>
                        )}
                    </div>
                )}
                <ScanFrame />
                <p className="scan-instruction">{instruction}</p>
            </div>

            <ResultsOverlay nutritionData={nutritionData} showResults={showResults} />
        </div>
    );
}

export default CameraView;
