

function loaderWeatherData() {
    const cityName = document.getElementById('cityInput').value;
    const WEATHER_APP_API_KEY = 'fbd214bd854a4f43a51101146240807';
    const url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_APP_API_KEY}&q=${cityName}`;
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            addDatas(data)
        })
        .catch(error => console.error('Error fetching weather data:', error))
        .finally(() => {
            loader.style.display = 'none';
        })
}


function addDatas(datas) {
    console.log('dd', datas);
    // if (datas === error) {
    //     let check = document.getElementById('show');
    //     check.innerHTML = `
    //        <h1 class="text-red-500">${datas?.error?.message}</h1>
    //     `;
    // } else {
    const result = document.getElementById('show');
    {
        datas?.error?.message ?
            result.innerHTML = `
        <p class="text-red-500 text-center font-bold backdrop-blur-lg">${datas?.error?.message}</p>
        `
            : result.innerHTML = `
        <div class="flex justify-center gap-8 items-center backdrop-blur-lg p-12 rounded-lg ">
        <div>
        <p class="font-bold text-5xl">${datas?.current?.temp_c}°</p>
            <p>Country: ${datas?.location?.name}</p>
            <p class="font-bold">Country: ${datas?.location?.country}</p>
        </div>
            <div class="">
        <img class="" src="${datas?.current?.condition?.icon}"/>
        <h1>${datas?.current?.condition?.text}</h1>
        </div>
        </div>
      `;
    }
    document.getElementById('cityInput').value = '';
    // }
}