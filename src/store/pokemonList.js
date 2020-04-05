import {writable} from 'svelte/store';

export const pokemonListStore = writable({
    pokemons: [],
    activeIndex: 1,
    fetchedAll: false
});