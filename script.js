const COD_COMMISSION_RATE = 0.04;
const COD_SHIPPING_FEE = 34;

const EBAY_TAX_RATE = 0.07;
const EBAY_EXCHANGE_RATE = 8;
const EBAY_IMPORT_RATE = 0.35;

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(tabId) {
    tabButtons.forEach((button) => {
        const isActive = button.dataset.tab === tabId;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    tabContents.forEach((content) => {
        const isActive = content.id === tabId;
        content.classList.toggle('active', isActive);
        content.hidden = !isActive;
    });
}

tabButtons.forEach((button) => {
    button.addEventListener('click', () => switchTab(button.dataset.tab));
});

function formatQuetzales(value) {
    return `Q${value.toFixed(2)}`;
}

function formatDollars(value) {
    return `$${value.toFixed(2)}`;
}

// ----------------------------
// Calculadora COD
// ----------------------------
const codTotal = document.querySelector('#codTotal');
const codButton = document.querySelector('#codButton');
const codCommission = document.querySelector('#codCommission');
const codDeposit = document.querySelector('#codDeposit');

function calculateCOD() {
    const total = parseFloat(codTotal.value);

    if (Number.isNaN(total) || total < 0) {
        codCommission.textContent = 'Ingresa un monto válido';
        codDeposit.textContent = 'Q0.00';
        return;
    }

    const commissionAmount = total * COD_COMMISSION_RATE;
    const deposit = total - commissionAmount - COD_SHIPPING_FEE;

    codCommission.textContent = formatQuetzales(commissionAmount);
    codDeposit.textContent = formatQuetzales(deposit);
}

codButton.addEventListener('click', calculateCOD);
codTotal.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') calculateCOD();
});

// ----------------------------
// Cálculos eBay
// ----------------------------
const ebayItemCost = document.querySelector('#ebayItemCost');
const ebayShipping = document.querySelector('#ebayShipping');
const ebayTaxes = document.querySelector('#ebayTaxes');
const ebayButton = document.querySelector('#ebayButton');
const ebayUsdTotal = document.querySelector('#ebayUsdTotal');
const ebayQtzTotal = document.querySelector('#ebayQtzTotal');
const ebayImport = document.querySelector('#ebayImport');
const ebayGrandTotal = document.querySelector('#ebayGrandTotal');

function calculateEbayTaxes() {
    const itemCost = parseFloat(ebayItemCost.value) || 0;
    const shipping = parseFloat(ebayShipping.value) || 0;
    const taxes = (itemCost + shipping) * EBAY_TAX_RATE;

    ebayTaxes.value = taxes.toFixed(2);
    return taxes;
}

function calculateEbay() {
    const itemCost = parseFloat(ebayItemCost.value);
    const shipping = parseFloat(ebayShipping.value);

    if (Number.isNaN(itemCost) || itemCost < 0 || Number.isNaN(shipping) || shipping < 0) {
        ebayUsdTotal.textContent = 'Datos inválidos';
        ebayQtzTotal.textContent = 'Q0.00';
        ebayImport.textContent = 'Q0.00';
        ebayGrandTotal.textContent = 'Q0.00';
        return;
    }

    const taxes = calculateEbayTaxes();
    const totalUsd = itemCost + shipping + taxes;
    const totalQtz = totalUsd * EBAY_EXCHANGE_RATE;
    const importCost = totalQtz * EBAY_IMPORT_RATE;
    const grandTotal = totalQtz + importCost;

    ebayUsdTotal.textContent = formatDollars(totalUsd);
    ebayQtzTotal.textContent = formatQuetzales(totalQtz);
    ebayImport.textContent = formatQuetzales(importCost);
    ebayGrandTotal.textContent = formatQuetzales(grandTotal);
}

[ebayItemCost, ebayShipping].forEach((input) => {
    input.addEventListener('input', calculateEbayTaxes);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') calculateEbay();
    });
});

ebayButton.addEventListener('click', calculateEbay);
calculateEbayTaxes();
