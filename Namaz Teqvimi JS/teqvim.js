var  month=document.getElementById("month")
month.addEventListener("change",function(){
fetch(`http://api.aladhan.com/v1/calendarByAddress/2023/${month.value}?address=Baku&method=2`)
.then(response =>response.json())
.then(json=> {
 var result="";
 document.querySelector("table tbody").innerHTML="";
 json.data.forEach(element => {
    console.log(element)
 result+=`
    <tr>
    <td>${element.date.gregorian.day}</td>
    <td>${element.date.hijri.day}</td>
    <td>${element.date.gregorian.weekday.en}</td>
    <td>${element.timings.Imsak}</td>
    <td>${element.timings.Fajr}</td>
    <td>${element.timings.Sunrise}</td>
    <td>${element.timings.Dhuhr}</td>
    <td>${element.timings.Asr}</td>
    <td>${element.timings.Sunset}</td>
    <td>${element.timings.Maghrib}</td>
    <td>${element.timings.Isha}</td>
    <td>${element.timings.Midnight}</td>
  </tr>`

})
document.querySelector("table tbody").innerHTML=result;

})


})