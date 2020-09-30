;(() => {
  // DOM Connection
  const searchInput = document.querySelector('#searchValue')
  const resultBoxElement = document.querySelector('.result-box')

  // Validates the storage with the searching term
  const checkCoincidence = (current, term) => {
    const searchingTerm = term.toLowerCase()
    return (
      current.initials.toLowerCase().startsWith(searchingTerm) ||
      searchingTerm.startsWith(current.initials.toLowerCase()) ||
      current.title.toLowerCase().startsWith(searchingTerm) ||
      current.description.toLowerCase().startsWith(searchingTerm)
    )
  }

  // Search some term on local storage
  const searchTerm = (term) => {
    let currentResults = JSON.parse(localStorage.getItem('stg-data') || '[]')

    return currentResults.filter((result) => checkCoincidence(result, term))
  }

  // Clear the result box component
  const clearResultBox = () => (resultBoxElement.innerHTML = '')

  // Update the result box component
  const updateResultBox = (results) => {
    clearResultBox()
    results.forEach((result) => {
      resultBoxElement.innerHTML += `<div><small>${result.initials}</small><h3>${result.title}</h3><p>${result.description}</p></div>`
    })
  }

  // Input Value Change Handling
  const inputChangeHandler = (event) => {
    let { value } = event.target

    value = value.trim()

    if (value === '') {
      clearResultBox()
      return
    }

    const foundTerms = searchTerm(value)
    updateResultBox(foundTerms)
  }

  // Event Listeners
  searchInput.addEventListener('keyup', inputChangeHandler)
})()

const initialStorage = [
  {
    initials: 'PAG',
    title: 'Payment refused',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eum ipsa, exercitationem dolore fugit minus laborum similique impedit architecto veniam voluptatibus aliquam velit odit molestiae deserunt. Iste repellat ea totam.',
    link: 'https://felipe0liveira.dev',
  },
  {
    initials: 'PAG',
    title: 'Credit Card with 4xx status',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eum ipsa, exercitationem dolore fugit minus laborum similique impedit architecto veniam voluptatibus aliquam velit odit molestiae deserunt. Iste repellat ea totam.',
    link: 'https://felipe0liveira.dev',
  },
  {
    initials: 'COR',
    title: 'The favorite color of somebody',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eum ipsa, exercitationem dolore fugit minus laborum similique impedit architecto veniam voluptatibus aliquam velit odit molestiae deserunt. Iste repellat ea totam.',
    link: 'https://felipe0liveira.dev',
  },
]
