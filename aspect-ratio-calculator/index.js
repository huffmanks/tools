// Form
const calculator = document.querySelector('#calculator')
const formControls = document.querySelectorAll('.form-control')
const originalWidth = document.querySelector('#original-width')
const originalHeight = document.querySelector('#original-height')

// New Size
const newSize = document.querySelector('#new-size')

// Clear Button
const clearBtn = document.querySelector('#clearBtn')

// Output
const aspectBox = document.querySelector('.aspect-box')
const aspectNumbers = document.querySelector('.aspect-numbers')
const newWidth = document.querySelector('.new-width')
const newHeight = document.querySelector('.new-height')
const aspectWidth = document.querySelector('.aspect-width')
const aspectHeight = document.querySelector('.aspect-height')

// Toast
const errorToast = document.querySelector('#errorToast')
const closeToast = document.querySelector('#closeToast')

calculator.addEventListener('change', () => {
    // Error message
    formControls.forEach((formControl) => {
        closeBtn.addEventListener('click', () => {
            formControl.classList.remove('is-invalid')
            formControl.value = ''
            aspectNumbers.style.display = 'none'
        })
        if (/\D/.test(formControl.value)) {
            formControl.classList.add('is-invalid')
            aspectNumbers.style.display = 'none'
            const toast = new bootstrap.Toast(errorToast)
            toast.show()

            setTimeout(() => {
                formControl.classList.remove('is-invalid')
                formControl.value = ''
                toast.hide()
            }, 5000)
        }
    })

    // Selected radio
    const selectedNewValue = document.querySelector('input[name="new-value"]:checked')

    if (selectedNewValue.value === 'width') {
        newSize.placeholder = 'Width'
        newSize.nextElementSibling.innerText = 'Width'
    }

    if (selectedNewValue.value === 'height') {
        newSize.placeholder = 'Height'
        newSize.nextElementSibling.innerText = 'Height'
    }

    // Calculate new size
    if (originalWidth.value && originalHeight.value) {
        // If new width is selected
        if (selectedNewValue.value === 'width') {
            let newOtherSize = Math.round((originalHeight.value / originalWidth.value) * newSize.value * 100) / 100

            aspectBox.style.aspectRatio = newSize.value / newOtherSize

            newWidth.innerText = newSize.value
            newHeight.innerText = newOtherSize
            aspectHeight.innerText = 1

            if (newSize.value / newOtherSize === 1) {
                aspectWidth.innerText = 1
            }

            aspectWidth.innerText = (newSize.value / newOtherSize).toFixed(2)
        }

        // If new height is selected
        if (selectedNewValue.value === 'height') {
            let newOtherSize = Math.round((originalWidth.value / originalHeight.value) * newSize.value * 100) / 100

            aspectBox.style.aspectRatio = newOtherSize / newSize.value

            newWidth.innerText = newOtherSize
            newHeight.innerText = newSize.value
            aspectHeight.innerText = 1

            if (newOtherSize / newSize.value === 1) {
                aspectWidth.innerText = 1
            }

            aspectWidth.innerText = (newOtherSize / newSize.value).toFixed(2)
        }
    }

    // Output numbers
    if (newSize.value) {
        aspectNumbers.style.display = 'block'
    }

    if (!newSize.value) {
        aspectNumbers.style.display = 'none'
    }
})

// Clear form
clearBtn.addEventListener('click', () => {
    aspectBox.style.aspectRatio = 1.6 / 1
    aspectNumbers.style.display = 'none'
    calculator.reset()
})
