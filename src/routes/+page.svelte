<script>
	import Results from '../components/Results/Results.svelte'
	import Trivia from '../components/Trivia/Trivia.svelte'
	import TriviaForm from '../components/TriviaForm/TriviaForm.svelte'

	$: triviaState = ''
	/**
	 * @type {any[]}
	 */
	let trivia
	/**
	 * @type {{ results: any[]; score: any; }}
	 */
	let results

	const triviaHandler = (/** @type {any} */ questions) => {
		if (questions) {
			trivia = [...questions]
		}
		triviaState = 'quiz'
	}

	const getQuizResults = (/** @type {{ results: any; score: any; }} */ data) => {
		triviaState = 'results'
		results = { results: [...data.results], score: data.score }
	}

	const quizEnd = (/** @type {string} */ option) => (triviaState = option)
</script>

<main class="m-auto h-screen w-screen flex flex-col p-4 antialiased">
	<h1 class="text-4xl font-bold">SvelteTrivia</h1>

	<section id="trivia" class="w-full h-full flex justify-center items-center">
		<div
			class="max-w-2xl max-h-[32rem] w-full h-full rounded-xl bg-base-300 shadow-lg overflow-hidden flex flex-col justify-center">
			{#if triviaState === 'quiz'}
				<Trivia {trivia} {getQuizResults} />
			{:else if triviaState === 'results'}
				<Results {results} {quizEnd} />
			{:else}
				<TriviaForm {triviaHandler} />
			{/if}
		</div>
	</section>
</main>

<footer class="text-center p-4">
	<a class="link" href="https://github.com/ayodyln/svelteTriviaApp" target="_blank"
		>GitHub Code Repository</a>
</footer>
