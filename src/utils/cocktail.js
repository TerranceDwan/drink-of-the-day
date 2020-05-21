const request = require('request')

const cocktail = () => {
  if (parseInt(localStorage.getItem('lastUpdate')) != new Date().getDate()) {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    request({ url, json: true }, (error, { body }) => {
      if (error || typeof body !== 'object') {
        return console.log('There has been an error finding a drink')
      }
      const { drinks } = body
      const drink = drinks[0]
      localStorage.clear()
      localStorage.setItem('lastUpdate', JSON.stringify(new Date().getDate()))
      localStorage.setItem('drink', JSON.stringify(drink))
    })
  }
}

module.exports = cocktail
