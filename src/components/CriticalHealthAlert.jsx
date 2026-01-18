function CriticalHealthAlert({ scenario, onClose }) {
    if (!scenario || scenario.id !== 'soda') return null;

    return (
        <div className="critical-alert-overlay" onClick={onClose}>
            <div className="critical-alert-content pulse-alert" onClick={(e) => e.stopPropagation()}>
                <div className="alert-header">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="28" stroke="#F44336" strokeWidth="4" />
                        <path d="M30 15V35M30 45H30.02" stroke="#F44336" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    <h2>DIABETIC ALERT</h2>
                </div>

                <div className="alert-body">
                    <p className="primary-warning">CRITICAL SUGAR LEVEL DETECTED</p>
                    <p className="detailed-warning">
                        This product contains <strong>40g of sugar</strong> per serving.
                        Consumption may lead to a dangerous spike in blood glucose levels.
                    </p>
                </div>

                <div className="alert-guidance">
                    <h3>MEDICAL GUIDANCE</h3>
                    <ul>
                        <li>Immediate insulin adjustment may be needed</li>
                        <li>Consider water intake to help flush sugar</li>
                        <li>Monitor glucose levels every 30 minutes</li>
                    </ul>
                </div>

                <button className="dismiss-alert-btn" onClick={onClose}>
                    UNDERSTOOD
                </button>
            </div>
        </div>
    );
}

export default CriticalHealthAlert;
