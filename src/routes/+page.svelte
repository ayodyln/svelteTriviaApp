<script lang="ts">
	import Trivia from '../components/Trivia/Trivia.svelte'
	import TriviaForm from '../components/TriviaForm/TriviaForm.svelte'

	let triviaState = false
	let trivia: { response_code: number; result: [] }
</script>

<main class="m-auto h-screen w-screen flex flex-col p-4 antialiased">
	<h1 class="text-4xl font-bold">SvelteTrivia</h1>

	<section id="trivia" class="w-full h-full flex justify-center items-center">
		<div class="max-w-2xl max-h-[32rem] w-full h-full rounded-xl bg-base-300 shadow-lg p-4">
			{#if triviaState}
				<Trivia />
			{:else}
				<TriviaForm {trivia} />
			{/if}
		</div>
	</section>
</main>

<!--
    The app asks/displays trivia questions
    The user can answer trivia questions
    The app keeps track and shows the user how many questions are right and wrong.
    The user can select a difficulty level, and the app responds accordingly.
    The user can select a category of questions for the game, and the app responds accordingly. 
    App must be hosted at a live URL 
-->
