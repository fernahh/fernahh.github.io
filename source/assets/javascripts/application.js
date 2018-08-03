//= require components/links

document.addEventListener('DOMContentLoaded', function() {
  var tweetButton = document.querySelector('.Share_Bar__Twitter')
  var TWITTER_URL = 'https://twitter.com/intent/tweet?text='
  var postURL = encodeURIComponent(location.href)
  var postTitle = document.querySelector('.Article__Title').textContent
  var signature = 'by @fernahh'
  var tweetContent = TWITTER_URL + postTitle + ' ' + signature + ' ' + postURL

  tweetButton.setAttribute('href', tweetContent)
})
