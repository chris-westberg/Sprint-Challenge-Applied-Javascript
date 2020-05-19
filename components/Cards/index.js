// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles)
    const cardsContainer = document.querySelector('.cards-container')
    const array = Object.values(response.data.articles)
    array.forEach((element) => {
        element.forEach((article) => {
            cardsContainer.appendChild(cardsMaker(article))
        })
    })


})
.catch(err => {
    console.log(err)
})

function cardsMaker(object) {
    //------Card Div------------
    const card = document.createElement('div')
    card.classList.add('card')

    //------Headline Div--------
    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = object.headline
    card.appendChild(headline)

    //------Author Div----------
    const author = document.createElement('div')
    author.classList.add('author')
    author.textContent = `By: ${object.authorName}`
    card.appendChild(author)

    //------image div-----------
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    author.appendChild(imgContainer)

    //------image---------------
    const imgTag = document.createElement('img')
    imgTag.setAttribute('src', object.authorPhoto)
    imgContainer.appendChild(imgTag)

    //------Author Span---------
    const authorSpan = document.createElement('span')
    authorSpan.textContent = `By ${object.authorName}`

    return card
}