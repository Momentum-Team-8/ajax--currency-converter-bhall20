const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const url = "http://api.exchangeratesapi.io/v1/latest?access_key=d99969ec69b3064009ae602e874d78cc"
const rootElement = document.querySelector(".container")

const primaryElement = document.querySelector('.primary-element')
const secondaryElement = document.querySelector('.secondary-element')

fetch(url)
// fetch will return a JS promise as a response
  // to access the data returned when the promise resolves, we use the .then() method
  // to transform the data to json, we have to call the .json() method in the .then() callback
.then(res => res.json())
  // we chain another .then() because the one before returns a promise
  // we do this so we can access the data from the response
.then(data => {
   // NOW in this second .then() callback, we have json-formatted data we can use!
    // it's a good idea to console.log the data so you can see it!
console.log(data)
// Create a header that says Currency Converter to page
let h2 = document.createElement('h1')
    h2.innerText = 'Currency Converter'
    primaryElement.appendChild(h2)
    // Add convert from text to page
    let p1 = document.createElement('p')
    p1.innerText = "Convert from"
    primaryElement.appendChild(p1)

})

let curList = document.createElement("select")
rootElement.appendChild(curList)
for (let cur of currencies) {
const optionItem = document.createElement("option")
  optionItem.value = cur
  optionItem.innerText = cur
  curList.appendChild(optionItem)
}

secondaryElement.appendChild(curList)
