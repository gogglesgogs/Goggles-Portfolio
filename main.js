import './style.css';

const togglebuttonlight = document.querySelector('#light');
const togglebuttondark = document.querySelector('#dark');
const togglebutton = document.querySelector('#togglebtn');
const gogglestxt = document.querySelector('#goggles');
const gogglesimg = document.querySelector('#img-goggles');
const daytimeel = document.querySelector('#daytime');


// document.querySelector('#app').innerHTML = `

// `

document.addEventListener("DOMContentLoaded", (event) => {
	setTheme();
	checkViewportWidth();
	setTimetoElement();

});

window.addEventListener("resize", checkViewportWidth);

togglebutton.addEventListener('click', () => {
	const currentTheme = document.documentElement.dataset.theme;
	if (currentTheme === 'light') {
		togglebuttondark.style.display = 'none';
		togglebuttonlight.style.display = 'block';
		document.documentElement.setAttribute('data-theme', 'dark');
	} else if (currentTheme === 'dark') {
		togglebuttonlight.style.display = 'none';
		togglebuttondark.style.display = 'block';
		document.documentElement.setAttribute('data-theme', 'light');
	}
});

window.addEventListener('scroll', () => {
	document.querySelector('.scroll').style.display = 'none';
});

gogglestxt.addEventListener('mouseover', () => {
	gogglesimg.style.transform = 'translateX(0px)';
});

gogglestxt.addEventListener('mouseleave', () => {
	gogglesimg.removeAttribute('style');
});

setInterval(() => {
	setTimetoElement();
}, 10000);

function getTime() {
	let now = new Date();
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let dayOfWeek = days[now.getDay()];
	let day = now.getDate();
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let month = months[now.getMonth()];
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
	let formattedday = dayOfWeek + ", " + day + " " + month;
	return [formattedday, formattedTime];
}

function setTimetoElement() {
	let [day, time] = getTime();
	daytimeel.innerText = `${day} ${time}`;
}

function setTheme() {
	const theme = window.matchMedia('(prefers-color-scheme: light)').matches;
	if (theme) {
		document.documentElement.setAttribute('data-theme', 'light');
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
}

function checkViewportWidth() {
	var viewportWidth = window.innerWidth;
	if (viewportWidth < 1380) {
		document.getElementById("warning-sign").style.display = "flex";
	} else {
		document.getElementById("warning-sign").style.display = "none";
	}
}
