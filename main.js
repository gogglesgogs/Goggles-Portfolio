import './style.css';

// document.querySelector('#app').innerHTML = `

// `

document.addEventListener("DOMContentLoaded", (event) => {
	const theme = window.matchMedia('(prefers-color-scheme: light)').matches;
	if (theme) {
		document.documentElement.setAttribute('data-theme', 'light');
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
});

const togglebuttonlight = document.querySelector('#light');
const togglebuttondark = document.querySelector('#dark');
const togglebutton = document.querySelector('#togglebtn');

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

const gogglestxt = document.querySelector('#goggles');
const gogglesimg = document.querySelector('#img-goggles');
gogglestxt.addEventListener('mouseover', () => {
	gogglesimg.style.transform = 'translateX(0px)';
});
gogglestxt.addEventListener('mouseleave', () => {
	gogglesimg.removeAttribute('style');
});

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

const daytimeel = document.querySelector('#daytime');

function setTimetoElement() {
	let [day, time] = getTime();
	daytimeel.innerText = `${day} ${time}`;
}

setTimetoElement();

setInterval(() => {
	setTimetoElement();
}, 10000);