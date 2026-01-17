function ResultCard({ type, data }) {
    const icons = {
        sugar: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L28 8L24 12L20 8L24 4Z" fill="#4CAF50" />
                <rect x="16" y="12" width="16" height="16" rx="2" fill="#4CAF50" opacity="0.8" />
                <path d="M24 28L28 32L24 36L20 32L24 28Z" fill="#4CAF50" />
            </svg>
        ),
        salt: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <ellipse cx="24" cy="32" rx="6" ry="8" fill="#FF9800" />
                <circle cx="24" cy="16" r="4" fill="#FF9800" />
                <circle cx="20" cy="24" r="3" fill="#FF9800" opacity="0.6" />
                <circle cx="28" cy="24" r="3" fill="#FF9800" opacity="0.6" />
            </svg>
        )
    };

    const statusIcons = {
        success: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        warning: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 20H22L12 2Z" fill="#FF9800" />
                <path d="M12 10V14M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        alert: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#F44336" />
                <path d="M12 8V12M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    };

    return (
        <div className={`result-card ${type}-card`}>
            <div className="result-icon">
                {icons[type]}
            </div>
            <div className="result-content">
                <h3 className="result-label">{type === 'sugar' ? 'SUGAR LEVEL' : 'SALT LEVEL'}</h3>
                <p className={`result-value ${data.status}`}>{data.level}</p>
            </div>
            <div className={`result-status ${data.status}`}>
                {statusIcons[data.status]}
            </div>
        </div>
    );
}

export default ResultCard;
