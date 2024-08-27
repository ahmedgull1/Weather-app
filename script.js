let data = []
const btn = document.querySelector('#btn')
let key = "2f7c3807f2247376b23314d96df66d48"

let url = `https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=${key}&units=metric`




fetch(url)
    .then(res => res.json())
    .then(json => {
        data = json
        console.log(data);
        handledisplay();
    });



function handledisplay() {
    if (data.main && data.main.temp !== undefined) {
        main2.innerHTML = `
          <div class="  text-white flex flex-col gap-4">
            <p class=" w-full font-bold text-4xl text-center ">${data.name}</p>
            <p class=" w-full font-bold text-3xl">${data.main.temp}<span class=" font-bold">°C</span></p>
            <p class=" text-xl  font-bold ">Weather : ${data.weather[0].main}</p>
            <p class=" text-xl  font-bold  "> Humidity :  ${data.main.humidity}</p>
            <p class=" text-xl  font-bold  "> Tem_max |  Tem_min <br> ${data.main.temp_max} | ${data.main.temp_min} </p>
            <p class=" text-xl  font-bold  "> Feels_like : ${data.main.feels_like}</p>
           
        </div> 
    `;
    }
    else {
        main2.innerHTML =
            `
    <p classs="text-3xl text-white  font-bold"> Uncorrect city name Please Enter  Correct city Name </p>

    `
    }
}

function handleSubmit() {
    const inp = document.querySelector('#inp');
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${key}&units=metric`;
    inp.value = "";

    fetch(url)
        .then(res => res.json())
        .then(json => {
            data = json;
            console.log(data);
            handledisplay();
            
            const weatherCondition = data.weather[0].main.toLowerCase();

            const body = document.querySelector('body');
            body.classList.remove('clear', 'clouds', 'haze', 'snow', 'rain', 'smoke');
            
            if (weatherCondition === 'clear') {
                body.classList.add('clear');
            } else if (weatherCondition === 'haze') {
                body.classList.add('haze');
            } else if (weatherCondition === 'snow') {s
                body.classList.add('snow');
            }
             else if (weatherCondition === 'rain') {
                body.classList.add('rain');
            }
             else if (weatherCondition === 'smoke') {
                body.classList.add('smoke');
            }
             else if (weatherCondition === 'clouds') {
                body.classList.add('clouds');
            }
        });
}




var a = setInterval(() => {
    var date = new Date();
    var hr = date.getHours() % 12 || 12;
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var month = date.toLocaleString('default', { month: 'short' });
    var day = date.toLocaleString('default', { weekday: 'short' });
    var year = date.getFullYear();

    var year = date.getFullYear();
    var ampm = date.getHours() >= 12 ? 'AM' : 'PM';

    time.innerHTML = `${day}, ${month} ${date.getDate()} ${year} ${hr} : ${min} : ${sec} ${ampm}`
    // console.log(data);
}, 1000);


