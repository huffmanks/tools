const colorForm = document.querySelector('#color-form')

const colorHex = document.querySelector('#color-hex')
const colorRGB = document.querySelector('#color-rgb')
const colorHSL = document.querySelector('#color-hsl')

const colorType = document.querySelector('#color-type')
const colorInput = document.querySelector('#color-input')

const output = document.querySelector('#output')
const outputResult = document.querySelector('#output-result')

colorForm.addEventListener('change', (e) => {
    e.preventDefault()

    colorType.innerHTML = document.querySelector('input[name="color-type"]:checked').value

    if (colorHex.checked && colorInput.value) {
        const convertedColor = hexToRGB(colorInput.value)
        if (convertedColor) {
            showColors(convertedColor)
        }
    }
    if (colorRGB.checked && colorInput.value) {
        const convertedColor = RGBToHex(colorInput.value)
        if (convertedColor) {
            showColors(convertedColor)
        }
    }
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
            // return parseInt(x.length === 1 ? `#0${x}` : x, 16)
            console.log(x.toString(16).padStart(2, '0'))
            return x.toString(16).padStart(2, '0')
        })
        .join('')

    return `#${hex}`
}

const showColors = (convertedColor) => {
    // const colorTypes = ['Hex', 'RGB', 'HSL']
    // colorTypes.map((colorType) => {
    //     colorType.createElement('div')
    // })

    output.style.setProperty('--bg-output', convertedColor)
    console.log(convertedColor)
    outputResult.innerHTML = convertedColor
}
