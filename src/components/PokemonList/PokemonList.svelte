<script>
    import {onMount} from 'svelte';
    import {pokemonListStore} from 'Store/pokemonList';
    import {commonStore} from 'Store/common';

    let filteredPokemon = [];

    $: {
        console.log($pokemonListStore, $commonStore);
        if($commonStore.searchValue){
            filteredPokemon = $pokemonListStore.pokemons.filter(pokemon => {
                return new RegExp($commonStore.searchValue).test(pokemon.name)
            })
        } else if($pokemonListStore.pokemons.length) {
            filteredPokemon = $pokemonListStore.pokemons;
        }
        console.log(filteredPokemon);
    }

    onMount(async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
                    .then(res => res.json())
        filteredPokemon = res.results; 
    });

</script>

<style src="./PokemonList.styles.scss"></style>

<ul class="pokemon-list">
    {#each filteredPokemon as {name, url}, index (name)}
        <li key={name} class="pokemon-list-item">
            <button
                class="pokemon-list-item-button"
                type="button"
                on:click={() => {$pokemonListStore.activeIndex = (url.split('/').reverse()[1])}}
            >
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('/').reverse()[1]}.png`}
                    alt={name}
                    width="50"
                />
                <h3>{name}</h3>
            </button>
        </li>
    {/each}
</ul>