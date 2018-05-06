import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
    getBaseBreedsList: function() {
     return axios.get("https://api.iextrading.com/1.0/stock/market/batch?symbols=qqq,fb&types=quote,news,chart&range=1m&last=5s");
  
  //    getDogsOfBreed: function(breed) {
  //      return axios.get("https://api.iextrading.com/1.0/tops?format=json&symbols=aapl,xiv,ziv,sbux,amzn");
  //    },
  //    getBaseBreedsList: function() {
  //      return axios.get("https://api.iextrading.com/1.0/stock/market/batch?symbols=qqq,fb&types=quote,news,chart&range=1m&last=5");
  // https://jsonplaceholder.typicode.com/users
  //https://dog.ceo/api/breeds/list
  
    }

};
