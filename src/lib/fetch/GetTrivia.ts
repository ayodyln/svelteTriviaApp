import type { formInput } from '$lib/types/TriviaForm'

export const getTrivia = async (params: formInput) => {
	if (
		params.questions === 10 &&
		params.category === 'any' &&
		params.difficulty === 'any' &&
		params.question_type === 'any'
	) {
		try {
			const trivia = await fetch('api/trivia')
			const res = await trivia.json()
			return res
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
			const res = await trivia.json()
			return res
		} catch (error) {
			console.error(error)
		}
	}
}
