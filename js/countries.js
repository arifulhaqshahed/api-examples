const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();


const displayCountries = (countries) => {
    /* for (const country of countries) {
        console.log(country.name.official);
    } */
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name.official}</h3>
            <p>${country.capital} <br /> <br /> 
            <button onclick="loadCountryByName('${country.name.official}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
    const countryDetailsDiv = document.getElementById('country-detail');
    countryDetailsDiv.innerHTML = `
        <h4>${country.name.official}</h4>
    `
}