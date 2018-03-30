const baseUrl = 'https://www.reddit.com/r/cats/top/.json?count=25'
const page2Url = 'https://www.reddit.com/r/cats/top/.json?count=25&after=t3_881wyt'
const page3Url = 'https://www.reddit.com/r/cats/top/.json?count=50&after=t3_87xa78'
const page4Url = 'https://www.reddit.com/r/cats/top/.json?count=75&after=t3_882nn5'
const catDisplay = document.querySelector('.cats')

catDisplay.addEventListener('click', showCats)

showCats()

function showCats() {
  fetch(baseUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      var urlArr = []
      for (var i = 0; i < data.data.children.length; i++) {
        let currentPost = data.data.children[i]
        if (!currentPost.data.url.includes('.jpg')) {} else {
          urlArr.push(currentPost.data.url);
        }
      }
      fetch(page2Url)
        .then(function(response) {
          return response.json()
        })
        .then(function(moreCats) {
          var fullerUrl = urlArr
          for (var j = 0; j < moreCats.data.children.length; j++) {
            let currentPost2 = moreCats.data.children[j]
            if (!currentPost2.data.url.includes('.jpg')) {} else {
              fullerUrl.push(currentPost2.data.url);
              console.log(urlArr);
            }
          }
          fetch(page4Url)
            .then(function(response) {
              return response.json()
            })
            .then(function(moar) {
              var moreFullerUrl = fullerUrl
              for (var j = 0; j < moar.data.children.length; j++) {
                let currentPost4 = moar.data.children[j]
                if (!currentPost4.data.url.includes('.jpg')) {} else {
                  moreFullerUrl.push(currentPost4.data.url);
                }
              }
              fetch(page3Url)
                .then(function(response) {
                  return response.json()
                })
                .then(function(evenMoreCats) {
                  var fullestUrl = moreFullerUrl
                  for (var j = 0; j < evenMoreCats.data.children.length; j++) {
                    let currentPost3 = evenMoreCats.data.children[j]
                    if (!currentPost3.data.url.includes('.jpg')) {} else {
                      fullestUrl.push(currentPost3.data.url);
                    }
                  }
                  var randomUrl = fullestUrl[Math.floor(Math.random() * fullestUrl.length)]
                  catDisplay.src = randomUrl
                })
            })
        })
    })
}
