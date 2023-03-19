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
	const body = await request.json()
	console.log(body)

	try {
		const trivia = await fetch('https://opentdb.com/api.php?amount=10')
		return json(await trivia.json())
	} catch (error) {
		return json(error)
	}
}
