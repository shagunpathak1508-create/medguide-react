import ScanFrame from './ScanFrame.jsx';
import ResultsOverlay from './ResultsOverlay.jsx';

function CameraView({ instruction, showResults, nutritionData }) {
    return (
        <div className="camera-container">
            <div className="camera-viewfinder">
                <ScanFrame />
                <p className="scan-instruction">{instruction}</p>
            </div>

            <ResultsOverlay nutritionData={nutritionData} showResults={showResults} />
        </div>
    );
}

export default CameraView;
