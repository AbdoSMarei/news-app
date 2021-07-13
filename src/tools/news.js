const request = require('request'); // required request

// get news from url >>>
const newscode = (callback) => {
    const newscodeUrl = 'https://newsapi.org/v2/everything?q=eg&from=2021-07-08&sortBy=popularity&apiKey=191bc095692946488fa4fd5a353c61d6'
    request({ url: newscodeUrl, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect,Pleaze check your network', undefined)
        } else if (res.body.message) {
            callback('please check' + res.body.message, undefined)
        } else {
            res.body.articles.forEach(article => {
                callback(undefined, {
                    title: article.title,
                    description: article.description,
                    urlToImage: article.urlToImage
                })

            })
        }
    })
}

module.exports = newscode;

newscode('egypt', (error, res) => {
    console.log('Error ', error)
    console.log('title is : ', res)
});