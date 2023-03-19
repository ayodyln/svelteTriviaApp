import { json } from '@sveltejs/kit'

export const GET = async () => {
	try {
		const trivia = await fetch('https://opentdb.com/api.php?amount=10')
		return json(await trivia.json())
	} catch (error) {
		return error
	}
}

export const POST = async ({ request }) => {
	const { questions, category, difficulty, question_type } = await request.json()
	console.log(questions, category, difficulty, question_type)

	try {
		const trivia = await fetch(
			`https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=${question_type}`
		)
		const data = await trivia.json()
		console.log(data)
		return json(data)
	} catch (error) {
		return json(error)
	}
}
