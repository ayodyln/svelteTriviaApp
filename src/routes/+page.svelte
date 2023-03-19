<script lang="ts">
	import { onMount } from 'svelte'
	import { getTrivia } from '$lib/fetch/GetTrivia'
	import TriviaForm from '../components/TriviaForm/TriviaForm.svelte'

	let triviaState = false
	let trivia: []

	onMount(async () => {
		console.log(await getTrivia({}))
	})
</script>

<!-- The app asks/displays trivia questions
The user can answer trivia questions
The app keeps track and shows the user how many questions are right and wrong.
The user can select a difficulty level, and the app responds accordingly.
The user can select a category of questions for the game, and the app responds accordingly. 
App must be hosted at a live URL -->

<main class="m-auto h-screen w-screen flex flex-col p-4 antialiased">
	<section id="triviaData">
		<h1 class="text-4xl font-bold">SvelteTrivia</h1>

		<div>
			<!-- Trivia Settings -->
		</div>
	</section>

	<section id="trivia" class="w-full h-full flex justify-center items-center">
		<div class="max-w-2xl max-h-[32rem] w-full h-full rounded-xl bg-base-300 shadow-lg p-4">
			{#if triviaState}
				<div>
					<!-- Correct Questions -->
				</div>

				<div>
					<!-- Trivia -->
				</div>
			{:else}
				<TriviaForm />
			{/if}
		</div>
	</section>
</main>
