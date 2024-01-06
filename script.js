const currency_el_one = document.getElementById('currency-one')
const currency_el_two = document.getElementById('currency-two')
const amount_el_one = document.getElementById('amount-one')
const amount_el_two = document.getElementById('amount-two')
const rate_el = document.getElementById('rate')
const swap = document.getElementById('swap')

// fetch
function calculate(){

  const currency_one = currency_el_one.value
  const currency_two = currency_el_two.value
  fetch(`https://v6.exchangerate-api.com/v6/de89f3b9f73f3ac156bd8998/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.conversion_rates[currency_two]

      rate_el.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
      amount_el_two.value = (amount_el_one.value * rate).toFixed(2)
    })
}

// event listener
currency_el_one.addEventListener('change',calculate)
amount_el_one.addEventListener('input',calculate)
currency_el_two.addEventListener('change',calculate)
amount_el_two.addEventListener('input',calculate)

swap.addEventListener('click',() => {
  const temp = currency_el_one.value
  currency_el_one.value = currency_el_two.value
  currency_el_two.value = temp
  calculate()
})
calculate()