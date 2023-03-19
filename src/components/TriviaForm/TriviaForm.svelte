<script lang="ts">
	import { getTrivia } from '$lib/fetch/GetTrivia'
	import { FormInput } from '$lib/types/TriviaForm'
	import type { formInput } from '$lib/types/TriviaForm'

	const formInput: formInput = new FormInput(10, 'any', 'any', 'any')

	const FormHandler = async () => {
		const data = await getTrivia(formInput)
		console.log(data)
	}
</script>

<div class="h-full flex flex-col">
	<!-- Trivia Fetch Input -->
	<h2 class="text-2xl font-bold">Pick your Trivia</h2>
	<div class="divider m-0" />

	<form
		class="w-fit h-full flex flex-col justify-between m-auto"
		on:submit|preventDefault={FormHandler}>
		<section class="">
			<label for="questions" class="form-control w-full max-w-xs label flex-col items-start">
				<span class="label-text">Amount of Questions</span>

				<input
					type="number"
					name="questions"
					id="questions"
					class="input input-bordered w-full"
					bind:value={formInput.questions} />
			</label>

			<label for="difficulty" class="form-control w-full max-w-xs label flex-col items-start">
				<span class="label-text">Difficulty</span>

				<select
					bind:value={formInput.difficulty}
					id="difficulty"
					name="difficutly"
					class:input-error={false}
					class="select select-bordered w-full ">
					<option value="any">Any Difficulty</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</label>

			<label for="categories" class="form-control w-full max-w-xs label flex-col items-start">
				<span class="label-text">Category</span>

				<select
					bind:value={formInput.category}
					id="categories"
					name="categories"
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
						checked />
				</div>

				<div class="w-full flex items-center justify-between">
					<span class="label-text">Multiple Choice Questions</span>
					<input
						id="multiple"
						name="radio-10"
						type="radio"
						class="radio checked:bg-current"
						on:change={() => (formInput.question_type = 'multiple')} />
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
		</section>

		<div class="divider m-0" />

		<input class="btn btn-primary" type="submit" value="Start Trivia" />
	</form>
</div>
