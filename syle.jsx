import React, { useState } from 'react';

function TransferPage() {
    const [amount, setAmount] = useState('');

    const handleKeyPress = (num) => {
        setAmount(amount + num);
    };

    return (
        <div className="transfer-card">
            <input type="text" value={amount} placeholder="$ 0" readOnly />
            <div className="keypad">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
                    <button key={num} onClick={() => handleKeyPress(num.toString())}>
                        {num}
                    </button>
                ))}
                <button onClick={() => setAmount('')}>C</button>
                <button onClick={() => alert(`Sending $${amount}`)}>Send</button>
            </div>
        </div>
    );
}