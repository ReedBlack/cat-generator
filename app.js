const baseUrl = 'https://www.reddit.com/r/cats/top/.json?count=25'
const page2Url = 'https://www.reddit.com/r/cats/top/.json?count=25&after=t3_889soh'
const page3Url = 'https://www.reddit.com/r/cats/top/.json?count=50&after=t3_887sb4'
const page4Url = 'https://www.reddit.com/r/cats/top/.json?count=75&after=t3_8882ko'
const catDisplay = document.querySelector('.cats')

const urlArr = []
const urlArr2 = []
const urlArr3 = []
const urlArr4 = []


showCats()
catDisplay.addEventListener('click', showCats)
catDisplay.addEventListener('click', clearArray)

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
          for (var i = 0; i < moreCats.data.children.length; i++) {
            let currentPost2 = moreCats.data.children[i]
            if (!currentPost2.data.url.includes('.jpg')) {
            } else {
              urlArr2.push(currentPost2.data.url)
            }
          }
          fetch(page3Url)
            .then(function(response) {
              return response.json()
            })
            .then(function(moar) {
              for (var i = 0; i < moar.data.children.length; i++) {
                let currentPost3 = moar.data.children[i]
                if (!currentPost3.data.url.includes('.jpg')) {
                } else {
                  urlArr3.push(currentPost3.data.url)
                }
              }
              fetch(page4Url)
                .then(function(response) {
                  return response.json()
                })
                .then(function(evenMoreCats) {
                  for (var i = 0; i < evenMoreCats.data.children.length; i++) {
                    let currentPost4 = evenMoreCats.data.children[i]
                    if (!currentPost4.data.url.includes('.jpg')) {
                    } else {
                      urlArr4.push(currentPost4.data.url)
                    }
                  }
                  var joinedArr = urlArr.concat(urlArr2, urlArr3, urlArr4)
                  var randomUrl = joinedArr[Math.floor(Math.random() * joinedArr.length)]
                  catDisplay.src = randomUrl

                })
            })
        })
    })

}

function clearArray(){
  joinedArr = []
}
// console.log(joinedArr);
