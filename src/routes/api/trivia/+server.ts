// API Server created with SvelteKit practices.
// GET -> returns the default trivia quiz that consists of
// 10 questions and any category, difficulty, and question type.
// POST -> Returns a API requests that constists of the Users Input.

import { json } from '@sveltejs/kit'
// json module automatically handles converting the response and headers to JSON for the client.

export const GET = async () => {
	try {
		const trivia = await fetch('https://opentdb.com/api.php?amount=10')
		return json(await trivia.json())
	} catch (error) {
		return error
	}
}

export const POST = async ({ request }) => {
	const { category, difficulty, question_type } = await request.json()

	try {
		const trivia = await fetch(
			`https://opentdb.com/api.php?amount=${10}&category=${category}&difficulty=${difficulty}&type=${question_type}`
		)
		const data = await trivia.json()
		return json(data)
	} catch (error) {
		return json(error)
	}
}
