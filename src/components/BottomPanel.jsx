import HealthWarnings from './HealthWarnings.jsx';
import ActionButtons from './ActionButtons.jsx';

function BottomPanel({ nutritionData, onScanClick, onDailyIntakeClick, onAlertsClick, isScanning }) {
    return (
        <div className="bottom-panel">
            <HealthWarnings nutritionData={nutritionData} />

            <ActionButtons
                onScanClick={onScanClick}
                onDailyIntakeClick={onDailyIntakeClick}
                onAlertsClick={onAlertsClick}
                isScanning={isScanning}
                nutritionData={nutritionData}
            />
        </div>
    );
}

export default BottomPanel;
