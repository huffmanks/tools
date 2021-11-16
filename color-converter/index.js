const colorForm = document.querySelector('#color-form')

const colorTypes = document.querySelectorAll('input[name="color-type"]')
const colorHex = document.querySelector('#color-hex')
const colorRGB = document.querySelector('#color-rgb')
const colorHSL = document.querySelector('#color-hsl')

const colorTypeText = document.querySelector('#color-type-text')
const colorInput = document.querySelector('#color-input')

const output = document.querySelector('#output')

colorForm.addEventListener('change', (e) => {
    e.preventDefault()

    if (colorHex.checked && colorInput.value) {
        const convertedColor = hexToRGB(colorInput.value)
        if (convertedColor) {
            showColors(convertedColor)
            showColors(`#${colorInput.value}`)
        }
    }
    if (colorRGB.checked && colorInput.value) {
        const convertedColor = RGBToHex(colorInput.value)
        if (convertedColor) {
            showColors(convertedColor)
            showColors(`rgb(${colorInput.value})`)
        }
    }
})

colorTypes.forEach((colorType) => {
    colorType.addEventListener('click', (e) => {
        if (e.target === colorType) {
            colorTypeText.innerHTML = e.target.value
        }

        colorInput.value = ''
        output.innerHTML = ''
    })
})

const hexToRGB = (hex) => {
    const [r, g, b] = hex.match(hex.length <= 4 ? /\w/g : /\w\w/g).map((x) => parseInt(x.length < 2 ? `${x}${x}` : x, 16))

    if (hex.length == 3 || hex.length == 6) {
        return `rgba(${r},${g},${b})`
    }
}
const RGBToHex = (rgb) => {
    const rgbArr = rgb.replace(/\s/g, '').split(',')

    const hex = rgbArr
        .map((x) => {
            console.log(Number(x).toString(16).padStart(2, '0'))
            return Number(x).toString(16).padStart(2, '0')
        })
        .join('')

    return `#${hex}`
}

const showColors = (convertedColor) => {
    // const colorTypes = ['Hex', 'RGB']
    // colorTypes.map((colorType) => {
    output.innerHTML += `
            <div class="output-inner" style="background-color: ${convertedColor};">
                <div class="output-result">${convertedColor}</div>
            </div>
         `
    // })
}
