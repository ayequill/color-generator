const colorInput = document.getElementById('userInput')
const type = document.getElementById('schemeType')
const colorBox = document.querySelectorAll('.colors')
console.log(colorBox);


let colorArray = []
document.getElementById('colorForm').addEventListener('submit', (e) =>{

    e.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.replace('#','')}&format=json&mode=${type.value}&count=6`)
    .then(res => res.json())
    .then(data => {
        

        const colorData = data.colors.map((x)=> {
           return x.hex.value
        })

            for (color of colorData){
             colorBox.forEach((x)=>{
            x.style.backgroundColor = color
        })
            }
    })

})

function renderColors() {
}


// fetch("https://www.thecolorapi.com/scheme", {
//     method: "GET",
//     body:{
//         count: '6',
//         seed: {'hex':{'value': '000000'}},
//         mode: 'monochrome'
//     },
//     headers: { "Content-Type": "application/json" }
// } )
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.colors.map((x)=> x.hex.value));
//         console.log(data);
//     })
