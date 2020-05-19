// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function headerMaker() {
    //---Header Div---
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')

    //---Date Span---
    const date = document.createElement('span')
    date.classList.add('date')
    date.textContent = 'SMARCH 28, 2019'
    headerDiv.appendChild(date)

    //---Lambda Times H1---
    const times = document.createElement('h1')
    times.textContent = 'Lambda Times'
    headerDiv.appendChild(times)

    //---Temp Span---
    const temp = document.createElement('span')
    temp.classList.add('temp')
    temp.textContent = '98°'
    headerDiv.appendChild(temp)

    return headerDiv
}

// console.log(headerMaker)
const headerContent = document.querySelector('.header-container')
headerContent.appendChild(headerMaker())
