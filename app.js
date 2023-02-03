// Caching the DOM
const _answerChoices = document.querySelector('ul')

// Handling Promises with .then() & .catch() methods
const promiseCall = () => {
    const api = fetch(`https://quizapi.io/api/v1/questions?apiKey=FLKMEHh26JR4Bn0WWXp5LCiIspbqFimrS19RHd4m&limit=10`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
}

// promiseCall()

// Asynchronous Arrow Function
// Handling Promises with async and await
const asyncCall = async () => {
    try {
        const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=FLKMEHh26JR4Bn0WWXp5LCiIspbqFimrS19RHd4m&limit=10`)
        const data = await response.json()
        const answers = data[0]['answers']

        const choicesArr = []

        for (let choice in answers) {
            if (answers[choice] !== null) {
                choicesArr.push(answers[choice])
            }
        }
        
        console.log(choicesArr)
        // creating li element for each choice
        for (choice of choicesArr) {
            const answerChoice = document.createElement('li')
            answerChoice.innerText = choice
            _answerChoices.appendChild(answerChoice)

        }
    } catch (error) {
        console.log(error)
    }
}

asyncCall()


