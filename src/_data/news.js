const axios = require("axios")


async function getUser() {
  try {
    const response = await axios.getAdapter("https://newsapi.org/v2/top-headlines/sources?apiKey=a9037fea433b4e8ea292b59c4d2dfbbb ")
    console.log(response)
  } catch (error) {
    console.error(error)
  }

}

/* */


