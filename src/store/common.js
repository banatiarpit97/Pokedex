import {writable} from 'svelte/store';

export const commonStore = writable({
    searchValue: '',
})