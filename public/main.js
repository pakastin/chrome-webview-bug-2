
var $webview = document.getElementById('webview')
var $webview2 = document.getElementById('webview2')
var webviews = [$webview, $webview2]

webviews.forEach(function (webview) {
  webview.addEventListener('loadstop', function () {
    webview.executeScript({
      code: "document.body.style.background = 'transparent'"
    }, function () {
      console.log(arguments)
    })
  })
})

setInterval(function () {
  document.body.appendChild(document.body.childNodes[0])
}, 1000)
