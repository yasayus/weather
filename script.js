const url =
	"http://api.openweathermap.org/data/2.5/forecast?lat=50.63&lon=5.56&appid=aafa5f6f07c908c499f9af43e5ddfac1&lang=fr&units=metric";
fetch(url)
	.then((response) => response.json())
	.then((datas) => console.log(datas));
