export interface formInput {
	questions: number
	category: string
	difficulty: string
	question_type: string
}

export class FormInput {
	questions: number
	category: string
	difficulty: string
	question_type: string

	constructor(questions: number, category: string, difficulty: string, question_type: string) {
		this.questions = questions
		this.category = category
		this.difficulty = difficulty
		this.question_type = question_type
	}
}
