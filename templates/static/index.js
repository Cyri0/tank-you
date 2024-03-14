console.log('Index JS vagyok, gerrapa!');

const refuelsEl = document.querySelector('#refuels')

// Tankolási adatok
fetch('/api/refuels/')
.then(res => res.json())
.then(data => {
    data.forEach(refuel => {
        wrapper = document.createElement("div")

        element = document.createElement('h3')
        wrapper.appendChild(element)
        rollIt(element, refuel.distance_km)

        petrol = document.createElement('h4')
        petrol.innerText = refuel.petrol_amount_litre + " litre"
        wrapper.appendChild(petrol)

        date = document.createElement('h4')
        d = new Date(refuel.refuel_date)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        date.innerText = d.toLocaleDateString('hu-HU', options);
        wrapper.appendChild(date)

        refuelsEl.appendChild(wrapper)
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

fetch('/api/consumption/')
.then(res => res.json())
.then(data => {
    let cons = document.getElementById('consumption')
    cons.innerText = data.consumption
})

