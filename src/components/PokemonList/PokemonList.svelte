<script>
    import {onMount} from 'svelte';
    import {pokemonToShow} from 'Store/pokemonToShow';

    let pokemonList = [];

    onMount(async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
                    .then(res => res.json())
        pokemonList = res.results; 
    })

</script>

<style src="./PokemonList.styles.scss">
    
</style>

<ul class="pokemon-list">
    {#each pokemonList as {name}, index (name)}
        <li key={name} class="pokemon-list-item">
            <button
                class="pokemon-list-item-button"
                type="button"
                on:click={() => {$pokemonToShow = (index+1)}}
            >
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
                    alt={name}
                    width="50"
                />
                <h3>{name}</h3>
            </button>
        </li>
    {/each}
</ul>