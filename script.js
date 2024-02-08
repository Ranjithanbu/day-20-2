function getweather() {

    let city = document.getElementById("ip1").value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=b626473b4ea344dbad3210850240702&q=${city}&aqi=yes`).then(val =>val.json()).then(ans => {



        let data = `
<div class="col">
<button id="bt2"><i class="bi bi-x"></i>
</button>
<h4>Name : ${ans.location.name}</h4>
<h4>Country : ${ans.location.country}</h4>
<h4>Region : ${ans.location.region}</h4>
<h4>Local-Time : ${ans.location.localtime}</h4>
<h4>Temprature : ${ans.current.temp_c}<sup>0</sup> C</h4>
<h4>Climate : ${ans.current.cloud}</h4>
<h4>Humidity : ${ans.current.humidity} %</h4>
<h4>Wind-Speed : ${ans.current.wind_kph} kph</h4>
<h4>Air-Quality : ${ans.current.air_quality.co}</h4>

</div>`

        document.getElementById("div2").innerHTML = data;

        document.getElementById("bt2").addEventListener("click", () => {
            document.getElementById("div2").innerHTML = "";
        })


    })

}

