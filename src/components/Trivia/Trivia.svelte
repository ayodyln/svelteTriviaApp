<script lang="ts">
	import { shuffle } from 'underscore'
	export let trivia: any, triviaHandler

	const Quiz = trivia.map((q: any, i: number) => {
		return {
			id: i,
			category: q.category,
			prompt: q.question,
			correct_answer: q.correct_answer,
			answers: shuffle([q.correct_answer, ...q.incorrect_answers]),
			user_input: ''
		}
	})

	let questionCount = 0

	const quizBtnsHandler = (event: any) => {
		const btn = event.target.id

		if (btn === 'next') {
			if (questionCount >= 9) return
			questionCount++
		}

		if (btn === 'prev') {
			if (questionCount <= 0) return
			questionCount--
		}
	}
</script>

<div class="flex justify-between bg-base-200 p-2">
	<h2 class="text-2xl">Questions: {Quiz.length}</h2>
</div>

<div class="h-full p-4">
	{#each Quiz as q, i}
		{#if questionCount === i}
			<section class="flex justify-between mb-4">
				<h3>{@html q.prompt}</h3>
				<p>#{q.id + 1}</p>
			</section>

			<section>
				{#if q.answers}
					{#each q.answers as a}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{@html a}</span>
								<input
									type="radio"
									name="radio-10"
									class="radio checked:bg-accent"
									value={a}
									on:click={() => {
										console.log(a)
									}} />
							</label>
						</div>
					{/each}
				{/if}
			</section>
		{/if}
	{/each}
</div>

<div class="p-2 flex justify-end">
	<button id="prev" class="btn btn-primary" on:click={quizBtnsHandler}>Prev</button>
	<button id="next" class="btn btn-primary" on:click={quizBtnsHandler}>Next</button>
	<button id="submit" class="btn btn-primary" on:click={quizBtnsHandler}>Submit</button>
</div>
