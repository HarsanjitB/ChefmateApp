import React, { useState } from 'react';

function AddTimerPopup({ onClose, onAddTimer }) {
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const totalSeconds = (Number(minutes) * 60) + Number(seconds);
        onAddTimer(totalSeconds);
    };

    return (
        <div style={{ 
            position: 'fixed', 
            top: '20%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            zIndex: 1000,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' 
        }}>
            <button onClick={onClose} style={{ 
                display: 'block', 
                marginBottom: '10px', 
                backgroundColor: '#f0f0f0', 
                border: 'none', 
                padding: '10px', 
                borderRadius: '5px', 
                cursor: 'pointer' 
            }}>Close</button>
            <form onSubmit={handleSubmit}>
                <label style={{ 
                    display: 'block', 
                    marginBottom: '10px',
                    color: 'black' // Set the font color to black
                }}>
                    Duration:
                    <div style={{ marginTop: '5px' }}>
                        <span style={{ marginRight: '10px', color: 'black' }}>Minutes:</span>
                        <input 
                            type="number" 
                            value={minutes} 
                            onChange={(e) => setMinutes(e.target.value)} 
                            style={{ 
                                padding: '10px',
                                borderRadius: '5px',
                                backgroundColor: 'white',
                                width: '100px',
                                color: 'black' // Set the font color to black
                            }} 
                        />
                    </div>
                </label>
                <label>
                    <div style={{ marginTop: '5px' }}>
                        <span style={{ marginRight: '10px', color: 'black' }}>Seconds:</span>
                        <input 
                            type="number" 
                            value={seconds} 
                            onChange={(e) => setSeconds(e.target.value)} 
                            style={{ 
                                padding: '10px',
                                borderRadius: '5px',
                                backgroundColor: 'white',
                                width: '100px',
                                color: 'black' // Set the font color to black
                            }} 
                        />
                    </div>
                </label>
                <button 
                    type="submit" 
                    style={{ 
                        display: 'block', 
                        backgroundColor: '#f0f0f0', 
                        border: 'none', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        cursor: 'pointer' 
                    }}
                >
                    Add Timer
                </button>
            </form>
        </div>
    );
}

export default AddTimerPopup;