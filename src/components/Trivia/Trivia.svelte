<script>
	import { any, shuffle } from 'underscore'
	/**
	 * @type {any[]}
	 *
	 */
	export let trivia
	/** @type {any} */
	export let triviaHandler
	/**
	 * @type {(arg0: { results: { id: number; prompt: any; correct: boolean; }[]; score: number; }) => void}
	 */
	export let getQuizResults

	$: Quiz = trivia.map((q, i) => {
		return {
			id: i,
			category: q.category,
			prompt: q.question,
			correct_answer: q.correct_answer,
			answers: shuffle([q.correct_answer, ...q.incorrect_answers]),
			user_input: null
		}
	})

	/**
	 * @type {number}
	 */
	let answered

	let questionCount = 0

	const quizBtnsHandler = (/** @type {any} */ event) => {
		const btn = event.target.id

		if (btn === 'next') {
			if (questionCount >= 9) return
			questionCount++
		}

		if (btn === 'prev') {
			if (questionCount <= 0) return
			questionCount--
		}

		if (btn === 'submit') {
			let score = 0
			const results = Quiz.map((q) => {
				if (q.correct_answer === q.user_input) score++
				return {
					id: q.id,
					prompt: q.prompt,
					correct: q.correct_answer === q.user_input ? true : false
				}
			})
			getQuizResults({ results, score })
		}
	}

	// For some odd reason, Svelte native class toggling solutions were working.
	// So, I had to resort to JS and to blend it with Sveltes condition UI rendering solutions.
	const uiFeedbackHandler = (/** @type {number} */ index) =>
		document.querySelectorAll(`#question`).forEach((/** @type {any} */ node) => {
			if (node.dataset.id * 1 === index) {
				node.classList.add('bg-base-200')
				node.classList.remove('bg-base-100')
				node.classList.add('ring')
			} else {
				node.classList.remove('bg-base-200')
				node.classList.add('bg-base-100')
				node.classList.remove('ring')
			}
		})
</script>

<div class="flex justify-between bg-base-200 p-2">
	<h2 class="text-2xl">Questions: {Quiz.length}</h2>
</div>

<div class="h-full p-4">
	{#each Quiz as q, i}
		{#if questionCount === i}
			<section class="flex justify-between gap-10 mb-4">
				<h3 class="font-bold">{@html q.prompt}</h3>
				<p>#{q.id + 1}</p>
			</section>

			<section id="questions" class="flex flex-wrap w-full gap-[12px] m-auto">
				{#if q.answers}
					{#each q.answers as a, index}
						<label
							data-id={index}
							id="question"
							class:bg-base-200={q.user_input === a ? true : false}
							class:bg-base-100={q.user_input === a ? false : true}
							class:ring={q.user_input === a ? true : false}
							class="label cursor-pointer w-[49%] text-base-content font-bold p-4 h-24 bg-base-100 hover:ring hover:ring-1 rounded-xl">
							<span class="label-text">{@html a}</span>
							<input
								type="radio"
								name="radio-10"
								id="answer-{index}"
								class="hidden"
								value={a}
								checked={q.user_input === a ? true : false}
								on:click={() => {
									/** @type {any} */
									const question = Quiz.find((question) => question.id === i)
									question.user_input = a
									uiFeedbackHandler(index)
									answered = Quiz.map((q) => {
										if (!q.user_input) return
										return q.user_input
									}).filter((a) => a).length
								}} />
						</label>
					{/each}
				{/if}
			</section>
		{/if}
	{/each}
</div>

<div class="divider m-0" />

<div class="p-2 flex gap-2 justify-end">
	<div class="flex">
		<button
			id="prev"
			class="btn btn-primary rounded-r-none"
			class:btn-disabled={questionCount === 0 ? true : false}
			on:click={quizBtnsHandler}>Prev</button>

		<button
			id="next"
			class="btn btn-primary rounded-l-none"
			class:btn-disabled={questionCount === 9 ? true : false}
			on:click={quizBtnsHandler}>Next</button>
	</div>

	<div class="divider divider-horizontal m-0" />

	<button
		id="submit"
		class="btn btn-primary"
		class:btn-disabled={answered === 10 ? false : true}
		on:click={quizBtnsHandler}>Submit</button>
</div>
