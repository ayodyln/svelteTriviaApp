import { browser } from '$app/environment'
import { writable } from 'svelte/store'

const initVal = {
	trivia: [],
	state: false,
	results: {
		total: 0,
		correct: 0
	}
}

export const triviaStore = writable(JSON.stringify(initVal))

triviaStore.subscribe((val) => {
	if (browser) window.localStorage.setItem('triviaStore', val)
})
