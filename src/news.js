import React from 'react'
import $ from 'jquery'

function News() {

    

    fetch('https://api.nytimes.com/svc/topstories/v2/us.json?api-key=Oj7KawwbJVxGjq2TDQM1MAeMbglfSDEb')
        .then(res => res.json())
        .then(
            (result) => {
                //Grab top 3 stories
                for (var i = 0; i < 3; i++) {
                    let NewsTitles = result.results[i].title;
                    let NewsLinks = result.results[i].url;
                    let NewsThumb = result.results[i].multimedia[0].url;
                    let placeholderIMG = require('./img/news.png')
    
                    //remove loader
                    $('.loadBox').hide();
            
                    if (NewsThumb == null) {
                        console.log('has no thumbnail')
                        $('.newsBox').append('<div class="cardNode"><a href="' + NewsLinks + '" target="_blank"><div class="card"><div class="card-image" style="background-image: url(' + placeholderIMG + ');background-position: center;"></div><div class="card-body"><h4 class="card-title">' + NewsTitles + '</h4><a href="' + NewsLinks + '" class="wh-btn" target="_blank">Read More</a></div></div></a></div>');
                    } else {
                        $('.newsBox').append('<div class="cardNode"><a href="' + NewsLinks + '" target="_blank"><div class="card"><div class="card-image" style="background-image: url(' + NewsThumb + ');"></div><div class="card-body"><h4 class="card-title">' + NewsTitles + '</h4><a href="' + NewsLinks + '" class="wh-btn" target="_blank">Read More</a></div></div></a></div>');
                    };
                    
                };
            },
            (error) => {
            console.log(error)
            }
        ) 

   
    
    return (
        <div className="newsNode">
          <h2>Top News Stories</h2>
          <div className="newsBox">
            <div className="loadBox">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <h3>Loading...</h3>
            </div>
          </div>
        </div>
    )
}

export default News


