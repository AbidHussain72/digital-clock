function clock(){
	let d = new Date()

	let year = d.getFullYear();
	let month = d.toLocaleString('en-US',{month:'long'});
	let date = ('0' + d.getDate()).slice(-2);
	let dayNum = d.getDay()
	let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][dayNum]
	let hr = ('0' + d.getHours()).slice(-2)
	let min = ('0' + d.getMinutes()).slice(-2)
	let sec = ('0' + d.getSeconds()).slice(-2)

	document.querySelector('.clock-date').innerHTML =  day + ', '+month+', '+date+', '+ year
 	document.querySelector('.clock-time').innerHTML =  hr + ':' + min + ':' + sec
}

setInterval(clock, 1000)