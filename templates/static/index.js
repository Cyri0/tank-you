console.log('Index JS vagyok, gerrapa!');

const refuelsEl = document.querySelector('#refuels')

fetch('/api/refuels/')
.then(res => res.json())
.then(data => {
    data.forEach(refuel => {
        element = document.createElement('div')
        refuelsEl.appendChild(element)
        rollIt(element, refuel.distance_km)
    });
})

function rollIt(element, distance){
    element.innerText = 0
    let intervalId = setInterval(()=>{
        let num = element.innerText*1

        if(num == distance){
            clearInterval(intervalId)
        }
        else if(num + 1000 < distance){
            element.innerText = num + 1000
        }else if(num + 100 < distance){
            element.innerText = num + 100}
        else{
            element.innerText = num + 1
        }

    }, 1)
}