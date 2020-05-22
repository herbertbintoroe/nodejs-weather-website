const weatherForm = document.querySelector('#weatherForm')
const search = document.querySelector('#weatherForm input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const fetchWeather = (address) => {
  fetch(`/weather?address=${address}`).then((response) => {
  response.json().then((data)=> {
    if (data.error) {
      messageOne.textContent = data.error
    } else {
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast
    }
  })
})
}

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = 'Searching current weather for ' + location
  messageTwo.textContent = ''


  fetchWeather(location);
})
