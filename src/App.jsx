import { useState } from 'react';
import Header from './components/Header.jsx';
import CameraView from './components/CameraView.jsx';
import BottomPanel from './components/BottomPanel.jsx';

// Scenario-based nutrition data for Hackathon Pitch
const demoScenarios = {
    balanced: {
        id: 'balanced',
        name: 'Whole Earth Harvest (Balanced)',
        image: '/example_label.png',
        data: {
            sugar: { level: 'LOW', status: 'success', value: '2g per serving' },
            salt: { level: 'MEDIUM', status: 'warning', value: '120mg per serving' },
            diabeticRisk: 'LOW RISK',
            bpWarning: 'SAFE TO CONSUME',
            dailyIntake: 45
        }
    },
    soda: {
        id: 'soda',
        name: 'Fizz Explosion (High Sugar)',
        image: '/soda_label.png',
        data: {
            sugar: { level: 'HIGH', status: 'alert', value: '40g per serving' },
            salt: { level: 'LOW', status: 'success', value: '20mg per serving' },
            diabeticRisk: 'EXTREME RISK',
            bpWarning: 'LIMIT INTAKE',
            dailyIntake: 92
        }
    }
};

const scanningPhrases = [
    'Detecting nutrition label structure...',
    'OCR: Extracting ingredient list...',
    'Analyzing sugar/salt correlations...',
    'Comparing with health profile guidelines...',
    'Calculating glycemic index impact...'
];

function App() {
    const [isScanning, setIsScanning] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [instruction, setInstruction] = useState('Align the nutrition label within the frame');
    const [nutritionData, setNutritionData] = useState(null);
    const [demoImage, setDemoImage] = useState(null);
    const [currentScenario, setCurrentScenario] = useState('balanced');

    const handleDemoClick = () => {
        if (isScanning) return;

        // Toggle between scenarios for the pitch
        const nextScenario = currentScenario === 'balanced' ? 'soda' : 'balanced';
        setCurrentScenario(nextScenario);
        setDemoImage(demoScenarios[nextScenario].image);

        handleScanClick(nextScenario);
    };

    const handleScanClick = (scenarioId) => {
        if (isScanning) return;

        setIsScanning(true);

        // Dynamic scanning phrases for pitch
        let phraseIdx = 0;
        setInstruction(scanningPhrases[phraseIdx]);

        const phraseInterval = setInterval(() => {
            phraseIdx++;
            if (phraseIdx < scanningPhrases.length) {
                setInstruction(scanningPhrases[phraseIdx]);
            } else {
                clearInterval(phraseInterval);
            }
        }, 800);

        // Simulate scanning delay
        setTimeout(() => {
            clearInterval(phraseInterval);
            performScan(scenarioId);
        }, 4000); // Longer scan for better "AI" feel in pitch
    };

    const performScan = (scenarioId) => {
        const scenario = scenarioId ? demoScenarios[scenarioId] : demoScenarios.balanced;
        const data = scenario.data;

        // Update state with results
        setNutritionData(data);
        setShowResults(true);
        setInstruction(`${scenario.name} identified!`);
        setIsScanning(false);
    };

    const hideResults = () => {
        setShowResults(false);
        setInstruction('Align the nutrition label within the frame');
        setDemoImage(null);
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
                demoImage={demoImage}
            />

            <BottomPanel
                nutritionData={nutritionData}
                onScanClick={handleScanClick}
                onDemoClick={handleDemoClick}
                onDailyIntakeClick={handleDailyIntakeClick}
                onAlertsClick={handleAlertsClick}
                isScanning={isScanning}
            />
        </div>
    );
}

export default App;
