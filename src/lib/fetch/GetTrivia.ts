export const getTrivia = async () => {
	try {
		const trivia = await fetch('api/trivia')
		const res = await trivia.json()
		return res
	} catch (error) {
		console.error(error)
	}
}

export const requestTrivia = async (params: object) => {
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
