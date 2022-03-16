const form = document.querySelector("section.top-banner form");
const input = document.querySelector("div.container input");
const msg = document.querySelector("span.msg");
const cityList = document.querySelector(".ajax-section .cities");

 localStorage.setItem("apiKey", EncryptStringAES ("c71e40ff2e4979ebd368926f2493bba8"));
 
 form.addEventListener("submit", (event)=>{
     event.preventDefault();
     getWeatherDataFromApi();
 });

 const getWeatherDataFromApi = async() =>{
    let apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    let inputVal = input.value;
    let units = "metric";
    let lang = "tr";
    // alert("apiKey : " + apiKey);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=${units}&lang=${lang}`;

    try {
        const response = await axios(url);
        console.log(response);
        const { main, name, sys, weather} = response.data;
        //console.log(weather[0].icon);
        //img url
        const iconUrl = `const iconUrl = `https://openweathermap.org/img/wn/${
            weather[0].icon}@2x.png`;`
            
        
    } 
    catch (error) {
        msg.innerText = error;
    }

}







