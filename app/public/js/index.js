let gender = null
const formMale = document.querySelector('input[value=male]')
const formFemale = document.querySelector('input[value=female]')
const neckV = document.querySelector('input[value=v-neck]')
const neckReg = document.querySelector('input[value=reg-neck]')
const sizeS = document.querySelector('input[value=small]')
const sizeM = document.querySelector('input[value=regular]')
const sizeL = document.querySelector('input[value=large]')
const sizeXL = document.querySelector('input[value=x-large]')
const colorRed = document.querySelector('input[value=red]')
const colorGreen = document.querySelector('input[value=green]')
const colorWhite = document.querySelector('input[value=white]')
const colorBlack = document.querySelector('input[value=black]')
const colorBlue = document.querySelector('input[value=blue]')
const colorPink = document.querySelector('input[value=pink]')

formMale.addEventListener('click', () => { changeShirt(formMale) })
formFemale.addEventListener('click', () => { changeShirt(formFemale) })
neckReg.addEventListener('click', () => { changeShirt(neckReg) })
neckV.addEventListener('click', () => { changeShirt(neckV) })
sizeS.addEventListener('click', () => { changeShirt(sizeS) })
sizeM.addEventListener('click', () => { changeShirt(sizeM) })
sizeL.addEventListener('click', () => { changeShirt(sizeL) })
sizeXL.addEventListener('click', () => { changeShirt(sizeXL) })
colorRed.addEventListener('click', () => { changeShirt(colorRed) })
colorGreen.addEventListener('click', () => { changeShirt(colorGreen) })
colorWhite.addEventListener('click', () => { changeShirt(colorWhite) })
colorBlack.addEventListener('click', () => { changeShirt(colorBlack) })
colorBlue.addEventListener('click', () => { changeShirt(colorBlue) })
colorPink.addEventListener('click', () => { changeShirt(colorPink) })

function changeShirt (inputField) {
  const imageContainer = document.getElementsByClassName('image')[0]
  const svg = document.getElementsByTagName('svg')[0]
  if (inputField === formMale) {
    gender = formMale
    imageContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.47 182.56">
    <defs>
      <style>
        .cls-2{stroke-miterlimit:10;stroke-width:.5px;fill:none;stroke:#000}
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Objects">
        <path d="M62.77.31C58.73 4.42 44.23 12.23 33.3 16c-4.3 2.38-7.47 5.3-11.06 8.68C15.16 31.35.81 81.31.32 84c-.62 3.38 3.17 6.38 5.76 8.12 11.92 7.54 24.47 7.22 26.45 6.43a89 89 0 002.95-9.26l.27 5.06c-.27 18.28-4 76.56-4 76.56.57 2.55 2.43 3.13 4.78 4.17 2 .88 23.16 7.49 40.54 7.23 39.58-.93 47.48-5.44 51.31-7.09 4.35-1.89 8.48-3.41 7.75-8.81-.36-2.71-6-33.11-3.72-60.4a121.82 121.82 0 00-.53-12.45c-.29-3-1.37-9.35.2-11.91 1.33 4.29 4.83 15.09 4.83 15.09s18 2.91 31.26-10.33c0 0-7.95-42.12-16.69-56.16-9.24-19.34-43.68-23.31-49.05-29.9-2.43 2.06-22.31 9.1-39.66.23" stroke-width=".5" stroke-miterlimit="10" fill="#333" stroke="#333"/>
        <path class="cls-2" d="M2 77.67c.65 3 4.25 5.73 6.59 7.42 11.4 7.41 24.11 8.45 26 7.68"/>
        <path class="cls-2" d="M135.62 92.37s21.19.93 31.65-11"/>
        <path class="cls-2" d="M135.09 90.78s24.5.13 31.39-11.66"/>
        <path class="cls-2" d="M1.31 80.58s8.35 12.85 32.58 14.57"/>
        <path class="cls-2" d="M61.71 4.82s19.6 10.73 41.26 0"/>
        <path class="cls-2" d="M58.07 4.22s-.8 13.31 23.24 15.3c0 0 20.66.6 27.42-15.3"/>
        <path class="cls-2" d="M60.65 2s.79 12.31 21.66 12.71c0 0 14.9.6 22.65-12.52"/>
        <path class="cls-2" d="M32.91 165s33.41 26.69 102.3 3"/>
        <path class="cls-2" d="M32.65 162.8s33.93 25.86 102.82 2.2"/>
        <g>
          <path class="cls-2" d="M132.11 81.65s-7.67-54.43 7.66-63.89"/>
          <path d="M35.47 88.9s8.87-58.12-8.86-68.22" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000" stroke-width=".5"/>
        </g>
      </g>
    </g>
  </svg>
  `
  } if (inputField === formFemale) {
    gender = formFemale
    imageContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.27 190.42">
  <defs>
    <style>
      .cls-4{stroke-miterlimit:10}.cls-3,.cls-4{stroke-width:.5px;fill:none;stroke:#000}.cls-3{stroke-linecap:round;stroke-linejoin:round}
    </style>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Objects">
      <path d="M61.6.31s19 32.73 45.7.13c0 0 25.46 0 46.6 28.27l16 23.93-27.21 23.69-9.42-8.92s-5.09 35.15-1 52 6.88 55.26 6.37 62.9a235 235 0 01-55.52 7.9c-17.08.23-36.18-4.09-50.41-7.9 0 0 0-50.17 6.62-63.15 0 0 5.6-28.27-3.31-49.4l-7.64 9.16S17.92 70.7 13.56 66.23A165 165 0 00.35 54.94l23.78-31.8S30 12 61.6.31z" stroke-width=".5" stroke-miterlimit="10" stroke="#333" fill="#333"/>
      <path d="M62.42 1.09s19.37 34.54 43.68.38c0 0-25.27 9.78-43.68-.38z" fill="#333"/>
      <path class="cls-3" d="M64.67 4.69s15.2 8.71 39.54-.23"/>
      <path class="cls-3" d="M62.52 1.43s15.95 9 43.77 0"/>
      <path class="cls-3" d="M24.13 23.14S36.14 55.75 36 69.71"/>
      <path class="cls-3" d="M147.13 21.14S132.83 53.75 133 67.71"/>
      <path class="cls-3" d="M32.85 177s50.34 18.33 105.34 0"/>
      <path class="cls-3" d="M32.85 175s50.34 18.33 105.34 0"/>
      <path class="cls-4" d="M61.6.31s8.94 15.09 24.27 23.55c0 0 13.09-10.63 21.35-23.67"/>
      <path class="cls-4" d="M58.4 1.37s4.81 14.08 27.33 26.45c0 0 15.89-10.43 25-26.89"/>
    </g>
  </g>
</svg>
`
  } if (inputField === neckV && gender === formMale) {
    imageContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.47 182.56">
  <defs>
    <style>
      .cls-2{stroke-miterlimit:10;stroke-width:.5px;fill:none;stroke:#000}
    </style>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Objects">
      <path d="M62.77.31C58.73 4.42 44.23 12.23 33.3 16c-4.3 2.38-7.47 5.3-11.06 8.68C15.16 31.35.81 81.31.32 84c-.62 3.38 3.17 6.38 5.76 8.12 11.92 7.54 24.47 7.22 26.45 6.43a89 89 0 002.95-9.26l.27 5.06c-.27 18.28-4 76.56-4 76.56.57 2.55 2.43 3.13 4.78 4.17 2 .88 23.16 7.49 40.54 7.23 39.58-.93 47.48-5.44 51.31-7.09 4.35-1.89 8.48-3.41 7.75-8.81-.36-2.71-6-33.11-3.72-60.4a121.82 121.82 0 00-.53-12.45c-.29-3-1.37-9.35.2-11.91 1.33 4.29 4.83 15.09 4.83 15.09s18 2.91 31.26-10.33c0 0-7.95-42.12-16.69-56.16-9.24-19.34-43.68-23.31-49.05-29.9-2.43 2.06-22.31 9.1-39.66.23" stroke-width=".5" stroke-miterlimit="10" fill="#333" stroke="#333"/>
      <path class="cls-2" d="M2 77.67c.65 3 4.25 5.73 6.59 7.42 11.4 7.41 24.11 8.45 26 7.68"/>
      <path class="cls-2" d="M135.62 92.37s21.19.93 31.65-11"/>
      <path class="cls-2" d="M135.09 90.78s24.5.13 31.39-11.66"/>
      <path class="cls-2" d="M1.31 80.58s8.35 12.85 32.58 14.57"/>
      <path class="cls-2" d="M61.71 4.82s19.6 10.73 41.26 0"/>
      <path class="cls-2" d="M57.26 4.22s4.45 13.53 27 25.9c0 0 15.44-9.44 24.51-25.9"/>
      <path class="cls-2" d="M60.16 2.48s8.73 14.85 24.06 23.31c0 0 13-10.44 20.74-23.56"/>
      <path class="cls-2" d="M32.91 165s33.41 26.69 102.3 3"/>
      <path class="cls-2" d="M32.65 162.8s33.93 25.86 102.82 2.2"/>
      <path class="cls-2" d="M132.11 81.65s-7.67-54.43 7.66-63.89"/>
      <path d="M35.47 88.9s8.87-58.12-8.86-68.22" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000" stroke-width=".5"/>
    </g>
  </g>
</svg>
`
  } if (inputField === neckV && gender === formFemale) {
    imageContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.27 190.42">
  <defs>
    <style>
      .cls-4{stroke-miterlimit:10}.cls-3,.cls-4{stroke-width:.5px;fill:none;stroke:#000}.cls-3{stroke-linecap:round;stroke-linejoin:round}
    </style>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Objects">
      <path d="M61.6.31s19 32.73 45.7.13c0 0 25.46 0 46.6 28.27l16 23.93-27.21 23.69-9.42-8.92s-5.09 35.15-1 52 6.88 55.26 6.37 62.9a235 235 0 01-55.52 7.9c-17.08.23-36.18-4.09-50.41-7.9 0 0 0-50.17 6.62-63.15 0 0 5.6-28.27-3.31-49.4l-7.64 9.16S17.92 70.7 13.56 66.23A165 165 0 00.35 54.94l23.78-31.8S30 12 61.6.31z" stroke-width=".5" stroke-miterlimit="10" stroke="#333" fill="#333"/>
      <path d="M62.42 1.09s19.37 34.54 43.68.38c0 0-25.27 9.78-43.68-.38z" fill="#333"/>
      <path class="cls-3" d="M64.67 4.69s15.2 8.71 39.54-.23"/>
      <path class="cls-3" d="M62.52 1.43s15.95 9 43.77 0"/>
      <path class="cls-3" d="M24.13 23.14S36.14 55.75 36 69.71"/>
      <path class="cls-3" d="M147.13 21.14S132.83 53.75 133 67.71"/>
      <path class="cls-3" d="M32.85 177s50.34 18.33 105.34 0"/>
      <path class="cls-3" d="M32.85 175s50.34 18.33 105.34 0"/>
      <path class="cls-4" d="M61.6.31s8.94 15.09 24.27 23.55c0 0 13.09-10.63 21.35-23.67"/>
      <path class="cls-4" d="M58.4 1.37s4.81 14.08 27.33 26.45c0 0 15.89-10.43 25-26.89"/>
    </g>
  </g>
</svg>
`
  } if (inputField === neckReg && gender === formMale) {
    imageContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.47 182.56">
  <defs>
    <style>
      .cls-2{stroke-miterlimit:10;stroke-width:.5px;fill:none;stroke:#000}
    </style>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Objects">
      <path d="M62.77.31C58.73 4.42 44.23 12.23 33.3 16c-4.3 2.38-7.47 5.3-11.06 8.68C15.16 31.35.81 81.31.32 84c-.62 3.38 3.17 6.38 5.76 8.12 11.92 7.54 24.47 7.22 26.45 6.43a89 89 0 002.95-9.26l.27 5.06c-.27 18.28-4 76.56-4 76.56.57 2.55 2.43 3.13 4.78 4.17 2 .88 23.16 7.49 40.54 7.23 39.58-.93 47.48-5.44 51.31-7.09 4.35-1.89 8.48-3.41 7.75-8.81-.36-2.71-6-33.11-3.72-60.4a121.82 121.82 0 00-.53-12.45c-.29-3-1.37-9.35.2-11.91 1.33 4.29 4.83 15.09 4.83 15.09s18 2.91 31.26-10.33c0 0-7.95-42.12-16.69-56.16-9.24-19.34-43.68-23.31-49.05-29.9-2.43 2.06-22.31 9.1-39.66.23" stroke-width=".5" stroke-miterlimit="10" fill="#333" stroke="#333"/>
      <path class="cls-2" d="M2 77.67c.65 3 4.25 5.73 6.59 7.42 11.4 7.41 24.11 8.45 26 7.68"/>
      <path class="cls-2" d="M135.62 92.37s21.19.93 31.65-11"/>
      <path class="cls-2" d="M135.09 90.78s24.5.13 31.39-11.66"/>
      <path class="cls-2" d="M1.31 80.58s8.35 12.85 32.58 14.57"/>
      <path class="cls-2" d="M61.71 4.82s19.6 10.73 41.26 0"/>
      <path class="cls-2" d="M58.07 4.22s-.8 13.31 23.24 15.3c0 0 20.66.6 27.42-15.3"/>
      <path class="cls-2" d="M60.65 2s.79 12.31 21.66 12.71c0 0 14.9.6 22.65-12.52"/>
      <path class="cls-2" d="M32.91 165s33.41 26.69 102.3 3"/>
      <path class="cls-2" d="M32.65 162.8s33.93 25.86 102.82 2.2"/>
      <g>
        <path class="cls-2" d="M132.11 81.65s-7.67-54.43 7.66-63.89"/>
        <path d="M35.47 88.9s8.87-58.12-8.86-68.22" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000" stroke-width=".5"/>
      </g>
    </g>
  </g>
</svg>
`
  } if (inputField === neckReg && gender === formFemale) {
    imageContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.27 190.42">
  <defs>
    <style>
      .cls-3{stroke-width:.5px;fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}
    </style>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Objects">
      <path d="M62.42 1.09s19.37 34.54 43.68.38c0 0-25.27 9.78-43.68-.38z" fill="#333"/>
      <path d="M61.6.31s19 32.73 45.7.13c0 0 25.46 0 46.6 28.27l16 23.93-27.21 23.69-9.42-8.92s-5.09 35.15-1 52 6.88 55.26 6.37 62.9a235 235 0 01-55.52 7.9c-17.08.23-36.18-4.09-50.41-7.9 0 0 0-50.17 6.62-63.15 0 0 5.6-28.27-3.31-49.4l-7.64 9.16S17.92 70.7 13.56 66.23A165 165 0 00.35 54.94l23.78-31.8S30 12 61.6.31z" stroke-width=".5" stroke="#333" stroke-miterlimit="10" fill="#333"/>
      <path class="cls-3" d="M58.94 1.26S80.82 38.35 110.3.69"/>
      <path class="cls-3" d="M65 4.68s14.15 8.94 38.5 0"/>
      <path class="cls-3" d="M62.52 1.43s16.18 8.94 44 0"/>
      <path class="cls-3" d="M24.13 23.14S36.14 55.75 36 69.71"/>
      <path class="cls-3" d="M147.13 21.14S132.83 53.75 133 67.71"/>
      <path class="cls-3" d="M32.85 177s50.34 18.33 105.34 0"/>
      <path class="cls-3" d="M32.85 175s50.34 18.33 105.34 0"/>
    </g>
  </g>
</svg>
`
  } if (inputField === sizeS) {
    imageContainer.className = 'image sizeS'
  } if (inputField === sizeM) {
    imageContainer.className = 'image sizeM'
  } if (inputField === sizeL) {
    imageContainer.className = 'image sizeL'
  } if (inputField === sizeXL) {
    imageContainer.className = 'image sizeXL'
  } if (inputField === colorRed) {
    imageContainer.id = 'red'
  } if (inputField === colorGreen) {
    imageContainer.id = 'green'
  } if (inputField === colorWhite) {
    imageContainer.id = 'white'
  } if (inputField === colorBlack) {
    imageContainer.id = 'black'
  } if (inputField === colorBlue) {
    imageContainer.id = 'blue'
  } if (inputField === colorPink) {
    imageContainer.id = 'pink'
  }
}

// Form progressive disclossure
let formCount = 0

function carousel (number) {
  const formParts = document.getElementsByTagName('fieldset')

  if (number === null) {
    if (formCount <= formParts.length) {
      formCount++
      for (let i = 0; i < formParts.length; i++) {
        let transformPercentage = 100 * formCount
        formParts[i].style.transform = `translateX(-${transformPercentage}%)`
      }
    }
  } else {
    let transformPercentage = 100 * number
    for (let i = 0; i < formParts.length; i++) {
      formParts[i].style.transform = `translateX(-${transformPercentage}%)`
    }
    formCount = number
  }
}

// Event listeners
document.getElementsByClassName('container')[0].classList.add('carousel-active')

const inputArray = document.getElementsByClassName('input')

for (let input of inputArray) {
  input.addEventListener('click', () => { carousel(null) })
}

const form = document.getElementById('form')
form.addEventListener('click', (e) => {
  carousel(0)
  e.preventDefault()
})

const neck = document.getElementById('neck')
neck.addEventListener('click', (e) => {
  carousel(1)
  e.preventDefault()
})

const size = document.getElementById('size')
size.addEventListener('click', (e) => {
  carousel(2)
  e.preventDefault()
})

const color = document.getElementById('color')
color.addEventListener('click', (e) => {
  carousel(3)
  e.preventDefault()
})

const text = document.getElementById('text')
text.addEventListener('click', (e) => {
  carousel(4)
  e.preventDefault()
})

// Generate text
const textDisplay = document.getElementsByClassName('text-display')[0]
const inputText = document.getElementsByName('text')[0]
inputText.addEventListener('keyup', changeText)

function changeText () {
  textDisplay.textContent = inputText.value
}

function changeFont () {
  textDisplay.id = this.value
}

function changeColor () {
  textDisplay.className = 'text-display ' + this.value
}

document.getElementById('font-list').onchange = changeFont
document.getElementById('text-color').onchange = changeColor
