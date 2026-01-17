import ResultCard from './ResultCard.jsx';

function ResultsOverlay({ nutritionData, showResults }) {
    if (!nutritionData) return null;

    return (
        <div className={`results-overlay ${showResults ? 'active' : ''}`} id="resultsOverlay">
            <ResultCard type="sugar" data={nutritionData.sugar} />
            <ResultCard type="salt" data={nutritionData.salt} />
        </div>
    );
}

export default ResultsOverlay;
