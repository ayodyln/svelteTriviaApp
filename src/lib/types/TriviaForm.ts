// User Form Input - not required but was practicing how to create interfaces and classes.

export interface formInput {
	category: string
	difficulty: string
	question_type: string
}

export class FormInput {
	category: string
	difficulty: string
	question_type: string

	constructor(category: string, difficulty: string, question_type: string) {
		this.category = category
		this.difficulty = difficulty
		this.question_type = question_type
	}
}
