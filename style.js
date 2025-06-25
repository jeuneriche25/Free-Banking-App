fetch('/api/transfer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: amount, recipient: "Maya" })
}).then(response => response.json())
  .then(data => console.log(data));