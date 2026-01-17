import { useEffect, useState } from 'react';

function ActionButtons({ onScanClick, onDailyIntakeClick, onAlertsClick, isScanning, nutritionData }) {
    const [dailyIntake, setDailyIntake] = useState(65);

    useEffect(() => {
        if (nutritionData?.dailyIntake) {
            setDailyIntake(nutritionData.dailyIntake);
        }
    }, [nutritionData]);

    return (
        <div className="action-buttons">
            <button className="action-btn daily-intake-btn" aria-label="Daily intake" onClick={onDailyIntakeClick}>
                <div className="btn-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M6 12H26M6 16H26M6 20H26" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" />
                        <rect x="4" y="8" width="24" height="16" rx="2" stroke="#2196F3" strokeWidth="2" />
                    </svg>
                </div>
                <span className="btn-label">DAILY INTAKE</span>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${dailyIntake}%` }}></div>
                </div>
            </button>

            <button
                className={`scan-btn ${isScanning ? 'scanning' : ''}`}
                id="scanBtn"
                aria-label="Scan food label"
                onClick={onScanClick}
            >
                <div className="scan-btn-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="8" y="8" width="24" height="24" rx="2" stroke="white" strokeWidth="2" />
                        <circle cx="20" cy="20" r="6" fill="white" />
                        <path d="M4 12L4 8C4 5.79086 5.79086 4 8 4L12 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M28 4L32 4C34.2091 4 36 5.79086 36 8L36 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M36 28L36 32C36 34.2091 34.2091 36 32 36L28 36" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 36L8 36C5.79086 36 4 34.2091 4 32L4 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <span className="scan-pulse"></span>
            </button>

            <button className="action-btn alerts-btn" aria-label="View alerts" onClick={onAlertsClick}>
                <div className="btn-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 6C16 6 12 10 12 16C12 19 14 22 16 24C18 22 20 19 20 16C20 10 16 6 16 6Z" stroke="#2196F3" strokeWidth="2" />
                        <circle cx="24" cy="12" r="4" fill="#F44336" />
                        <text x="24" y="14.5" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">2</text>
                    </svg>
                </div>
                <span className="btn-label">ALERTS</span>
            </button>
        </div>
    );
}

export default ActionButtons;
