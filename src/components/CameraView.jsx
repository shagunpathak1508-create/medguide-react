import ScanFrame from './ScanFrame.jsx';
import ResultsOverlay from './ResultsOverlay.jsx';

function CameraView({ instruction, showResults, nutritionData, isScanning, demoImage }) {
    return (
        <div className="camera-container">
            <div className="camera-viewfinder">
                {demoImage && (
                    <div className="demo-image-container">
                        <img src={demoImage} alt="Demo Label" className="demo-image" />
                        {isScanning && <div className="scan-laser"></div>}
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
