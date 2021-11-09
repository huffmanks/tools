const formEl = document.querySelector('#form')
const billEl = document.querySelector('#bill')
const peopleEl = document.querySelector('#people')
const percentsEl = document.querySelectorAll('input[name="percent"]')
const customTipEl = document.querySelector('#custom-tip')
const customLabelEl = document.querySelector('label[for="custom-tip"]')

const tipPerEl = document.querySelector('#tip-per')
const tipTotalEl = document.querySelector('#tip-total')
const billPerEl = document.querySelector('#bill-per')
const billTotalEl = document.querySelector('#bill-total')

const resetEl = document.querySelector('#reset')

// Reset
resetEl.addEventListener('click', () => {
    billEl.value = null
    peopleEl.value = null

    customTipEl.setAttribute('type', 'radio')
    customTipEl.checked = false
    customLabelEl.style.display = 'block'

    tipPerEl.innerHTML = '0.00'
    tipTotalEl.innerHTML = '0.00'
    billPerEl.innerHTML = '0.00'
    billTotalEl.innerHTML = '0.00'
})

// Update results
const getUpdate = (e) => {
    const selectedPercentEl = document.querySelector('input[name="percent"]:checked')

    if (e.target !== customTipEl && selectedPercentEl) {
        customTipEl.setAttribute('type', 'radio')
        customTipEl.checked = false
        customLabelEl.style.display = 'block'
        e.target.checked = true
    } else {
        customTipEl.setAttribute('type', 'text')
        customLabelEl.style.display = 'none'
    }

    const customTipAttr = customTipEl.getAttribute('type')

    if (selectedPercentEl) {
        let percentage = selectedPercentEl.value
        getCalc(percentage)
    } else if (customTipAttr === 'text') {
        let percentage = customTipEl.value
        getCalc(percentage)
    } else {
        let percentage = 0
        getCalc(percentage)
    }
}

// Calculate numbers
const getCalc = (percentage) => {
    const tipPer = (billEl.value * (percentage / 100)) / (!peopleEl.value ? (peopleEl.value = 1) : peopleEl.value)
    tipPerEl.innerHTML = tipPer.toFixed(2)

    const tipTotal = billEl.value * (percentage / 100)
    tipTotalEl.innerHTML = tipTotal.toFixed(2)

    const billTotal = (+billEl.value + tipTotal).toFixed(2)
    billTotalEl.innerHTML = billTotal

    const billPer = billTotal / (!peopleEl.value ? (peopleEl.value = 1) : peopleEl.value)
    billPerEl.innerHTML = billPer.toFixed(2)
}

formEl.addEventListener('change', getUpdate)
