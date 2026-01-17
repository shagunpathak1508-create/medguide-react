/**
 * MedGuide Nutrition Scanner
 * Interactive demo with simulated scanning functionality
 */

// State management
let isScanning = false;

// DOM Elements
const scanBtn = document.getElementById('scanBtn');
const resultsOverlay = document.getElementById('resultsOverlay');
const scanInstruction = document.querySelector('.scan-instruction');

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

/**
 * Initialize the application
 */
function init() {
    scanBtn.addEventListener('click', handleScanClick);
    
    // Add keyboard accessibility
    scanBtn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleScanClick();
        }
    });
    
    console.log('MedGuide Nutrition Scanner initialized');
}

/**
 * Handle scan button click
 */
function handleScanClick() {
    if (isScanning) return;
    
    isScanning = true;
    scanBtn.classList.add('scanning');
    
    // Update instruction text
    if (scanInstruction) {
        scanInstruction.style.opacity = '0';
        setTimeout(() => {
            scanInstruction.textContent = 'Analyzing nutrition label...';
            scanInstruction.style.opacity = '1';
        }, 300);
    }
    
    // Simulate scanning delay
    setTimeout(() => {
        performScan();
    }, 2000);
}

/**
 * Perform the simulated scan
 */
function performScan() {
    // Get random nutrition data
    const randomData = sampleNutritionData[Math.floor(Math.random() * sampleNutritionData.length)];
    
    // Update UI with results
    updateNutritionResults(randomData);
    
    // Show results overlay
    resultsOverlay.classList.add('active');
    
    // Update instruction
    if (scanInstruction) {
        scanInstruction.textContent = 'Scan complete! Review results';
    }
    
    // Update health warnings
    updateHealthWarnings(randomData);
    
    // Update daily intake progress
    updateDailyIntake(randomData.dailyIntake);
    
    // Reset scanning state
    scanBtn.classList.remove('scanning');
    
    // Auto-hide results after 5 seconds
    setTimeout(() => {
        hideResults();
    }, 5000);
}

/**
 * Update nutrition results display
 */
function updateNutritionResults(data) {
    // Update sugar level
    const sugarCard = document.querySelector('.sugar-card');
    const sugarValue = sugarCard.querySelector('.result-value');
    const sugarStatus = sugarCard.querySelector('.result-status');
    
    sugarValue.textContent = data.sugar.level;
    sugarValue.className = `result-value ${data.sugar.status}`;
    
    updateStatusIcon(sugarStatus, data.sugar.status);
    
    // Update salt level
    const saltCard = document.querySelector('.salt-card');
    const saltValue = saltCard.querySelector('.result-value');
    const saltStatus = saltCard.querySelector('.result-status');
    
    saltValue.textContent = data.salt.level;
    saltValue.className = `result-value ${data.salt.status}`;
    
    updateStatusIcon(saltStatus, data.salt.status);
}

/**
 * Update status icon based on level
 */
function updateStatusIcon(element, status) {
    const icons = {
        success: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#4CAF50"/>
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        warning: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 20H22L12 2Z" fill="#FF9800"/>
                <path d="M12 10V14M12 16H12.01" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `,
        alert: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#F44336"/>
                <path d="M12 8V12M12 16H12.01" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `
    };
    
    element.className = `result-status ${status}`;
    element.innerHTML = icons[status] || icons.success;
}

/**
 * Update health warning cards
 */
function updateHealthWarnings(data) {
    const bpWarningText = document.querySelector('.bp-warning .warning-text p');
    const diabeticWarningText = document.querySelector('.diabetic-warning .warning-text p');
    
    if (bpWarningText) {
        bpWarningText.textContent = data.bpWarning;
    }
    
    if (diabeticWarningText) {
        diabeticWarningText.textContent = data.diabeticRisk;
    }
}

/**
 * Update daily intake progress bar
 */
function updateDailyIntake(percentage) {
    const progressFill = document.querySelector('.progress-fill');
    
    if (progressFill) {
        // Animate the progress bar
        progressFill.style.width = '0%';
        setTimeout(() => {
            progressFill.style.width = `${percentage}%`;
        }, 100);
        
        // Update color based on percentage
        if (percentage < 50) {
            progressFill.style.background = 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)';
        } else if (percentage < 80) {
            progressFill.style.background = 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)';
        } else {
            progressFill.style.background = 'linear-gradient(135deg, #F44336 0%, #EF5350 100%)';
        }
    }
}

/**
 * Hide results and reset to scanning mode
 */
function hideResults() {
    resultsOverlay.classList.remove('active');
    
    if (scanInstruction) {
        scanInstruction.textContent = 'Align the nutrition label within the frame';
    }
    
    isScanning = false;
}

/**
 * Add click handlers for other buttons (demo purposes)
 */
function setupDemoButtons() {
    const backBtn = document.querySelector('.back-btn');
    const infoBtn = document.querySelector('.info-btn');
    const dailyIntakeBtn = document.querySelector('.daily-intake-btn');
    const alertsBtn = document.querySelector('.alerts-btn');
    
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            console.log('Back button clicked');
            hideResults();
        });
    }
    
    if (infoBtn) {
        infoBtn.addEventListener('click', () => {
            console.log('Info button clicked');
            alert('MedGuide Nutrition Scanner v1.0\n\nScan food labels to get instant health insights tailored for diabetic and BP patients.');
        });
    }
    
    if (dailyIntakeBtn) {
        dailyIntakeBtn.addEventListener('click', () => {
            console.log('Daily intake button clicked');
        });
    }
    
    if (alertsBtn) {
        alertsBtn.addEventListener('click', () => {
            console.log('Alerts button clicked');
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
        setupDemoButtons();
    });
} else {
    init();
    setupDemoButtons();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        performScan,
        updateNutritionResults
    };
}
