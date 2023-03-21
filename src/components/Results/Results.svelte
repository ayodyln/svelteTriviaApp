<script>
	/**
	 * @type {any}
	 */
	export let results
	/**
	 * @type {any}
	 */
	export let quizEnd

	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { onMount } from 'svelte'

	onMount(async () => {
		progress.set(Math.round((results.score / results.results.length) * 100))
	})

	const progress = tweened(0, {
		duration: 300,
		easing: cubicOut
	})

	const userOptions = (/** @type {any} */ event) => {
		if (event.target.id === 'restart') quizEnd('quiz')
		if (event.target.id === 'new') quizEnd('')
	}
</script>

<div class="flex gap-4 items-center bg-base-200 p-2">
	<span class="text-3xl">🏆</span>
	<h2 class="text-2xl font-bold">Results</h2>
</div>

<div class="h-full p-4 flex justify-center items-center">
	<div
		class="radial-progress items-center justify-center flex flex-col bg-base-200"
		style="--value:{$progress}; --size:15rem; --thickness: 24px;">
		<span class="text-4xl">{results.score}/{results.results.length}</span>
		<p class="uppercase font-bold mt-2">correct</p>
	</div>
</div>

<div class="divider m-0" />

<div class="p-2 flex gap-2 justify-end">
	<button id="restart" class="btn btn-primary" on:click={userOptions}>New Attempt</button>
	<button id="new" class="btn btn-primary" on:click={userOptions}>New Quiz</button>
</div>
