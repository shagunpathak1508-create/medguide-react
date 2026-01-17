function HealthWarnings({ nutritionData }) {
    const bpWarning = nutritionData?.bpWarning || 'MONITOR INTAKE';
    const diabeticRisk = nutritionData?.diabeticRisk || 'MODERATE RISK';

    return (
        <div className="health-warnings">
            <div className="warning-card bp-warning">
                <div className="warning-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 8V16L20 20" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="16" cy="16" r="2" fill="#2196F3" />
                    </svg>
                </div>
                <div className="warning-text">
                    <h4>BP WARNING:</h4>
                    <p>{bpWarning}</p>
                </div>
            </div>

            <div className="warning-card diabetic-warning">
                <div className="warning-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="12" stroke="#2196F3" strokeWidth="2" />
                        <path d="M12 16L14 18L20 12" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="22" cy="10" r="4" fill="#FF9800" />
                        <text x="22" y="13" fontSize="8" fill="white" textAnchor="middle">!</text>
                    </svg>
                </div>
                <div className="warning-text">
                    <h4>DIABETIC ALERT:</h4>
                    <p>{diabeticRisk}</p>
                </div>
            </div>
        </div>
    );
}

export default HealthWarnings;
