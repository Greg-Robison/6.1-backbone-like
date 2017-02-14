var Backbone = require('backbone');
var Like = require('./models/like').Like;
var $ = require('jQuery');

// instance of the Like constructor
var like = new Like();

// when the number value is changed, run the callback function
like.on('change:number', function(){
  //$('#numberOfLikes').text(like.get('number'));
  if (like.get('number') === 1){

     $('#like').text(' Like');
  }else{
    $('#like').text(' Likes');
  }
  $('#numberOfLikes').text(like.get('number'));
})

$('.likeButton').on('click', function(event){
  event.preventDefault();
  like.showCount();
})
