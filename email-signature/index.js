const emailSignForm = document.forms['form']

// Form input values
emailSignForm.addEventListener('input', () => {
    const fullName = emailSignForm.querySelector('#fullName').value
    const title = emailSignForm.querySelector('#title').value.replace(/\n/g, '<br/>')
    const email = emailSignForm.querySelector('#email').value
    const phone = emailSignForm.querySelector('#phone').value
    const cell = emailSignForm.querySelector('#cell').value
    const fax = emailSignForm.querySelector('#fax').value
    const web = emailSignForm.querySelector('#web').value
    const company = emailSignForm.querySelector('#company').value
    const department = emailSignForm.querySelector('#department').value
    const address = emailSignForm.querySelector('#address').value
    const cityStateZip = emailSignForm.querySelector('#cityStateZip').value

    // Form results HTML
    const result = document.querySelector('#result')

    result.innerHTML = `
      <div class="name">${fullName}</div>
      <div class="title">${title}</div>
      <p class="contact">
        Email:
        <a href="mailto:${email}">${email === '' ? '' : email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/g) === null ? `<span class="invalid">Not a valid email address.</span>` : `${email}`}</a>
        <br />
        Phone: ${phone === '' ? '' : phone.match(/\d{3}\-\d{3}\-\d{4}/g) === null ? `<span class="invalid">Not a valid phone number.</span>` : `${phone}`} 
        ${
            cell === ''
                ? ''
                : cell.match(/\d{3}\-\d{3}\-\d{4}/g) === null
                ? `<br />
            Cell: <span class="invalid">Not a valid cell number.</span>`
                : `<br />
            Cell: ${cell}`
        }
        ${
            fax === ''
                ? ''
                : fax.match(/\d{3}\-\d{3}\-\d{4}/g) === null
                ? `<br />
            Fax: <span class="invalid">Not a valid fax number.</span>`
                : `<br />
            Fax: ${fax}`
        }
        <br />
        Web:
        <a href=" ${web.includes('https://') || web.includes('http://') ? web : `http://${web}`}">
        ${web === '' ? '' : web.includes('https://') ? web.slice(8) : web.includes('http://') ? web.slice(7) : web}</a>
      </p>
      <div class="address">
        ${company} <br />
        ${department} <br />
        ${address} <br />
        ${cityStateZip}
      </div>
  `
})

// Copy note
const copy = document.querySelector('.copy')
window.innerWidth < 992 ? (copy.textContent = 'Select all to copy to your clipboard.') : (copy.textContent = 'Click below to copy to your clipboard.')

// Copy to clipboard
const copyToClip = () => {
    let range = document.createRange()
    range.selectNode(result)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
}

result.addEventListener('click', () => {
    copyToClip()
})
