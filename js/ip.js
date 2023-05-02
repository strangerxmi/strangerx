const apiURL = 'https://api.db-ip.com/v2/free/self';

async function fetchIp() {
	const response = await fetch(apiURL);

	if (!response.ok) {
		throw new Error(`Failed to fetch IP: ${response.status} ${response.statusText}`);
	}

	return data = await response.json();	
}

async function displayIp() {
	const {countryName, countryCode, ipAddress, stateProv} = await fetchIp();
	const countryBlock = document.querySelector('#country');
	const heading = createHeading(countryName, countryCode);

	countryBlock.append(heading, createFlagIcon(countryCode));
	createIp(ipAddress);
	createStateProvider(stateProv);
}

function createHeading(countryName, countryCode) {
	const heading = document.createElement('span');

	heading.textContent = `Country: ${countryName} (${countryCode})`;
	return heading;
}

function createFlagIcon(countryCode) {
	const img = document.createElement('img');

	img.src = `https://flagicons.lipis.dev/flags/4x3/${countryCode.toLowerCase()}.svg`;
	return img;
}

function createIp(ipAddress) {
	const ipBlock = document.querySelector('#ip');

	ipBlock.append(ipAddress);
}

function createStateProvider(stateProv) {
	const stateProvBlock = document.querySelector('#state-prov');

	stateProvBlock.appendChild(document.createTextNode(stateProv));
}

displayIp();