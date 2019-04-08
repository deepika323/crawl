const request = require('request');
const cheerio = require('cheerio');

var URL = "https://twitter.com/hashtag/photography?src=hash";

request(URL, function (err, res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    {

        let $ = cheerio.load(body);  //loading of complete HTML body
        $('li.stream-item').each(function(index){
            const text = $(this).find('p.tweet-text').text();
            const name = $(this).find('.fullname').text();
            console.log('user : ' + name);   //name of the user
            console.log('tweet : ' + text);   //tweet content
        });
    }
});