<script lang="ts">
	import { getTrivia } from '$lib/fetch/GetTrivia'
	import { FormInput } from '$lib/types/TriviaForm'
	import type { formInput } from '$lib/types/TriviaForm'

	export let triviaHandler: any

	let difficultyInput: any,
		categoryInput,
		error: boolean | number = false,
		loading = false

	const formInput: formInput = new FormInput('any', 'any', 'any')

	const FormHandler = async () => {
		error = false
		loading = true

		const data = await getTrivia(formInput)

		if (data.response_code !== 0 || error) {
			console.error(
				'ERROR: When changing the Question Difficulty, Category, or Question Types. Please Change all three from not being "any"',
				data
			)

			error = data.response_code
			loading = false

			return
		}
		loading = false
		triviaHandler(data.results)
	}
</script>

<div class="h-full flex flex-col p-4">
	<!-- Trivia Fetch Input -->
	<h2 class="text-2xl font-bold">Pick your Trivia</h2>
	<div class="divider m-0" />

	<form class="h-full flex flex-col m-auto">
		<label
			for="difficulty"
			class="form-control w-full max-w-xs label items-start tooltip-error tooltip-right before:w-28 before:mt-5"
			class:tooltip={error && formInput.difficulty === 'any' ? true : false}
			class:before:mt-5={error && formInput.difficulty === 'any' ? true : false}
			class:tooltip-open={!error || formInput.difficulty !== 'any' ? false : true}
			data-tip="Pick a different Difficulty">
			<span class="label-text flex w-full text-start mb-1">Difficulty</span>

			<select
				bind:value={formInput.difficulty}
				bind:this={difficultyInput}
				on:change={() => {
					if (formInput.difficulty !== 'any' && formInput.question_type === 'any') {
						formInput.question_type = 'multiple'
					}
				}}
				id="difficulty"
				name="difficutly"
				class:select-error={!error || formInput.difficulty !== 'any' ? false : true}
				class="select select-bordered w-full">
				<option value="any">Any Difficulty</option>
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="hard">Hard</option>
			</select>
		</label>

		<label
			for="categories"
			class="form-control w-full max-w-xs label flex-col items-start tooltip-error tooltip-right before:w-28"
			class:tooltip={error && formInput.category === 'any' ? true : false}
			class:before:mt-5={error && formInput.category === 'any' ? true : false}
			class:tooltip-open={!error || formInput.category !== 'any' ? false : true}
			data-tip="Pick a different Category">
			<span class="label-text flex w-full text-start mb-1">Category</span>

			<select
				bind:value={formInput.category}
				bind:this={categoryInput}
				on:change={() => {
					if (formInput.category !== 'any' && formInput.question_type === 'any') {
						formInput.question_type = 'multiple'
					}
				}}
				id="categories"
				name="categories"
				class:select-error={!error || formInput.category !== 'any' ? false : true}
				class="select select-bordered w-full ">
				<option value="any">Any Category</option>
				<option value="9">General Knowledge</option>
				<option value="10">Entertainment: Books</option>
				<option value="11">Entertainment: Film</option>
				<option value="12">Entertainment: Music</option>
				<option value="13">Entertainment: Musicals &amp; Theatres</option>
				<option value="14">Entertainment: Television</option>
				<option value="15">Entertainment: Video Games</option>
				<option value="16">Entertainment: Board Games</option>
				<option value="17">Science &amp; Nature</option>
				<option value="18">Science: Computers</option>
				<option value="19">Science: Mathematics</option>
				<option value="20">Mythology</option>
				<option value="21">Sports</option>
				<option value="22">Geography</option>
				<option value="23">History</option>
				<option value="24">Politics</option>
				<option value="25">Art</option>
				<option value="26">Celebrities</option>
				<option value="27">Animals</option>
				<option value="28">Vehicles</option>
				<option value="29">Entertainment: Comics</option>
				<option value="30">Science: Gadgets</option>
				<option value="31">Entertainment: Japanese Anime &amp; Manga</option>
				<option value="32">Entertainment: Cartoon &amp; Animations</option>
			</select>
		</label>

		<label
			for="multiple"
			class="label cursor-pointer w-full form-control w-full max-w-xs label flex-col gap-4 items-start">
			<div class="w-full flex items-center justify-between">
				<span class="label-text">Any Questions</span>
				<input
					id="Any"
					name="radio-10"
					type="radio"
					class="radio checked:bg-current"
					on:change={() => (formInput.question_type = 'any')}
					checked={formInput.category !== 'any' || formInput.difficulty !== 'any' ? false : true}
					disabled={formInput.category !== 'any' || formInput.difficulty !== 'any'
						? true
						: false} />
			</div>

			<div class="w-full flex items-center justify-between">
				<span class="label-text">Multiple Choice Questions</span>
				<input
					id="multiple"
					name="radio-10"
					type="radio"
					class="radio checked:bg-current"
					on:change={(e) => (formInput.question_type = 'multiple')}
					checked={formInput.difficulty !== 'any' || (formInput.category !== 'any' && !error)
						? true
						: false} />
			</div>

			<div class="w-full flex items-center justify-between">
				<span class="label-text">True/False Questions</span>
				<input
					on:change={() => (formInput.question_type = 'boolean')}
					type="radio"
					name="radio-10"
					id="boolQuestions"
					class="radio checked:bg-current" />
			</div>
		</label>

		{#if error === 1 && formInput.category !== 'any' && formInput.difficulty !== 'any'}
			<p class="text-error text-sm">Please select a different question type.</p>
		{/if}
	</form>

	<button class="btn btn-primary" class:loading={loading ? true : false} on:click={FormHandler}>
		{#if loading}
			Loading
		{:else}
			Create Trivia
		{/if}
	</button>
</div>
