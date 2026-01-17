import { useState } from 'react';
import Header from './components/Header.jsx';
import CameraView from './components/CameraView.jsx';
import BottomPanel from './components/BottomPanel.jsx';

// Sample nutrition data for demo
const sampleNutritionData = [
    {
        sugar: { level: 'LOW', status: 'success', value: '2g per serving' },
        salt: { level: 'MEDIUM', status: 'warning', value: '450mg per serving' },
        diabeticRisk: 'MODERATE RISK',
        bpWarning: 'MONITOR INTAKE',
        dailyIntake: 65
    },
    {
        sugar: { level: 'MEDIUM', status: 'warning', value: '8g per serving' },
        salt: { level: 'HIGH', status: 'alert', value: '820mg per serving' },
        diabeticRisk: 'HIGH RISK',
        bpWarning: 'LIMIT INTAKE',
        dailyIntake: 78
    },
    {
        sugar: { level: 'LOW', status: 'success', value: '1g per serving' },
        salt: { level: 'LOW', status: 'success', value: '180mg per serving' },
        diabeticRisk: 'LOW RISK',
        bpWarning: 'SAFE TO CONSUME',
        dailyIntake: 45
    }
];

function App() {
    const [isScanning, setIsScanning] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [instruction, setInstruction] = useState('Align the nutrition label within the frame');
    const [nutritionData, setNutritionData] = useState(null);

    const handleScanClick = () => {
        if (isScanning) return;

        setIsScanning(true);
        setInstruction('Analyzing nutrition label...');

        // Simulate scanning delay
        setTimeout(() => {
            performScan();
        }, 2000);
    };

    const performScan = () => {
        // Get random nutrition data
        const randomData = sampleNutritionData[Math.floor(Math.random() * sampleNutritionData.length)];

        // Update state with results
        setNutritionData(randomData);
        setShowResults(true);
        setInstruction('Scan complete! Review results');
        setIsScanning(false);

        // Auto-hide results after 5 seconds
        setTimeout(() => {
            hideResults();
        }, 5000);
    };

    const hideResults = () => {
        setShowResults(false);
        setInstruction('Align the nutrition label within the frame');
    };

    const handleBackClick = () => {
        console.log('Back button clicked');
        hideResults();
    };

    const handleInfoClick = () => {
        console.log('Info button clicked');
        alert('MedGuide Nutrition Scanner v1.0\n\nScan food labels to get instant health insights tailored for diabetic and BP patients.');
    };

    const handleDailyIntakeClick = () => {
        console.log('Daily intake button clicked');
    };

    const handleAlertsClick = () => {
        console.log('Alerts button clicked');
    };

    return (
        <div className="app-container">
            <Header
                onBackClick={handleBackClick}
                onInfoClick={handleInfoClick}
            />

            <CameraView
                instruction={instruction}
                showResults={showResults}
                nutritionData={nutritionData}
                isScanning={isScanning}
            />

            <BottomPanel
                nutritionData={nutritionData}
                onScanClick={handleScanClick}
                onDailyIntakeClick={handleDailyIntakeClick}
                onAlertsClick={handleAlertsClick}
                isScanning={isScanning}
            />
        </div>
    );
}

export default App;
