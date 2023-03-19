import type { formInput } from '$lib/types/TriviaForm'

// The client requests a Trivia.
// Depending on whether the User's input is different than the default Trivia.
// It will request a GET method or a POST method consisting of the user's input.

export const getTrivia = async (params: formInput) => {
	if (params.category === 'any' && params.difficulty === 'any' && params.question_type === 'any') {
		try {
			const trivia = await fetch('api/trivia')
			return await trivia.json()
		} catch (error) {
			console.error(error)
		}
	} else {
		try {
			const trivia = await fetch('api/trivia', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(params)
			})
			return await trivia.json()
		} catch (error) {
			console.error(error)
		}
	}
}
