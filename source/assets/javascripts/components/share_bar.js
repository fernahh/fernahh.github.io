function buildFacebookButton(button, url) {
  button.addEventListener('click', function() {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + url,
      'facebook-share-dialog',
      'width=626,height=436')
  })
}


function buildTwitterButton(button, title, url) {
  var TWITTER_URL = 'https://twitter.com/intent/tweet?text='
  var tweetContent = TWITTER_URL+ title + ' by @fernahh ' + url
  button.setAttribute('href', tweetContent)
}

document.addEventListener('DOMContentLoaded', function() {
  var shareBar = document.querySelector('[data-share-bar]')

  if (!shareBar)
    return

  var postTitle = shareBar.getAttribute('data-share-title')
  var buttonsList = document.querySelectorAll('[data-share-item]')
  var url = encodeURIComponent(location.href)

  buttonsList.forEach(function(button) {
    var type = button.getAttribute('data-share-item')

    if (type === 'facebook')
      buildFacebookButton(button, url)

    if (type === 'twitter')
      buildTwitterButton(button, postTitle, url)
  })
})
