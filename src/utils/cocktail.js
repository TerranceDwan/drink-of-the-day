const request = require('request')

const cocktail = (callback) => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  request({ url, json: true }, (error, { body }) => {
    if (error || typeof body !== 'object') {
      return console.log('There has been an error finding a drink')
    }
    const { drinks } = body
    const drink = drinks[0]
    callback(drink)
  })
}

module.exports = cocktail
