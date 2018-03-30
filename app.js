const baseUrl = 'https://www.reddit.com/r/cats/top/.json?count=25'
const page2Url = 'https://www.reddit.com/r/cats/top/.json?count=25&after'
const page3Url = 'https://www.reddit.com/r/cats/top/.json?count=50&after'
const page4Url = 'https://www.reddit.com/r/cats/top/.json?count=75&after'
const catDisplay = document.querySelector('.cats')
const urlArr = []

catDisplay.addEventListener('click', showCats)

showCats()

function showCats() {
  fetch(baseUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      for (var i = 0; i < data.data.children.length; i++) {
        let currentPost = data.data.children[i]
        if (!currentPost.data.url.includes('jpg')) {} else {
          urlArr.push(currentPost.data.url)
        }
      }
      fetch(page2Url)
        .then(function(response) {
          return response.json()
        })
        .then(function(moreCats) {
          for (var j = 0; j < moreCats.data.children.length; j++) {
            let currentPost2 = moreCats.data.children[j]
            if (!currentPost2.data.url.includes('.jpg')) {
            } else {
              urlArr.push(currentPost2.data.url)
            }
          }
          fetch(page3Url)
            .then(function(response) {
              return response.json()
            })
            .then(function(moar) {
              for (var k = 0; k < moar.data.children.length; k++) {
                let currentPost3 = moar.data.children[k]
                if (!currentPost3.data.url.includes('.jpg')) {
                } else {
                  urlArr.push(currentPost3.data.url)
                }
              }
              fetch(page4Url)
                .then(function(response) {
                  return response.json()
                })
                .then(function(evenMoreCats) {
                  for (var l = 0; l < evenMoreCats.data.children.length; l++) {
                    let currentPost4 = evenMoreCats.data.children[l]
                    if (!currentPost4.data.url.includes('.jpg')) {
                    } else {
                      urlArr.push(currentPost4.data.url)
                    }
                  }
                  var randomUrl = urlArr[Math.floor(Math.random() * urlArr.length)]
                  catDisplay.src = randomUrl
                })
            })
        })
    })
}
