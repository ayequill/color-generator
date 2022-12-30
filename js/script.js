const colorInput = document.getElementById('userInput')
const type = document.getElementById('schemeType')

document.getElementById('colorForm').addEventListener('submit', (e) =>{

    e.preventDefault()
    console.log(colorInput.value.replace('#',''));
    console.log(type.value);
    
fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.replace('#','')}&format=json&mode=${type.value}&count=6`)
    .then(res => res.json())
    .then(data => {
        console.log(data.colors);
    })

})

function renderColors


