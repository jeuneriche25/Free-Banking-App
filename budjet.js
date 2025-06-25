// Remplacer les données statiques par un appel API
async function fetchTransactions(date) {
    const response = await fetch(`/api/transactions?date=${date}`);
    return await response.json();
}
// COLLEZ DANS VOTRE FICHIER JS (ex: scripts/budget.js)
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('budgetChart');
    if (!ctx) return;

    new Chart(ctx, {
        // ... (même configuration que ci-dessus)
    });
});