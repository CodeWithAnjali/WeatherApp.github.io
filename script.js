let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp") ;
let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

const data = async function(search){
   let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
   console.log(getData);
   let jsonData =await getData.json();
   console.log(jsonData);
   console.log(jsonData.name);

   if(jsonData.cod == 400){
       alert("Please Enter Location")
       image.src="error1.png";
       city.innerHTML="";
       temp.innerHTML="";
       type.innerHTML="";
   }
   if(jsonData.cod == 404){
       alert("Please Enter Write Location")
       image.src="error2.png";
       city.innerHTML=search;
       temp.innerHTML="";
       type.innerHTML="";
   }
   city.innerHTML=search;
   temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
   type.innerHTML=jsonData.weather[0].main;

   if(type.innerHTML == "Clouds"){
       image.src="https://w7.pngwing.com/pngs/662/406/png-transparent-clouds-sun-sun-cartoon-sun-clouds-thumbnail.png"
   }else if(type.innerHTML == "Clear"){
       image.src="https://static.vecteezy.com/system/resources/thumbnails/008/854/796/small/weather-forecast-icon-cloudy-day-cloudy-with-sun-meteorology-sign-3d-rendering-png.png"
   }else if(type.innerHTML == "Rain"){
       image.src="https://www.animatedimages.org/data/media/361/animated-cloud-image-0011.gif"
   }else if(type.innerHTML == "Snow"){
       image.src="https://img1.picmix.com/output/stamp/normal/1/0/9/3/653901_c258c.gif"
   }else if(type.innerHTML == "Haze"){
       image.src="https://media.tenor.com/5ImWLS5QAJgAAAAC/foggy-fog.gif"
   }else if(type.innerHTML == "Strom"){
       image.src="https://png.pngtree.com/png-vector/20191210/ourmid/pngtree-thunder-cloud-illustration-vector-on-white-background-png-image_2065017.jpg"
   }
   input.value=""
}

function myFun(){
   search=input.value;
   data(search)
}