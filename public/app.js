document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Init.NumberFormat('en-EN',{
        currency: 'EUR',
        style: 'currency'
    }).format(number)})