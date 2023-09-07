const axios = require("axios")


module.exports = async function() {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=a9037fea433b4e8ea292b59c4d2dfbbb ")
    return response.data
  } catch (error) {
    console.error(error)
  }

}

/* */


