function Header({ onBackClick, onInfoClick }) {
    return (
        <header className="app-header">
            <button className="back-btn" aria-label="Go back" onClick={onBackClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <h1 className="app-title">CAMERA</h1>
            <button className="info-btn" aria-label="Information" onClick={onInfoClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
        </header>
    );
}

export default Header;
