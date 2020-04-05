<script>
    import {debounce} from 'Utils/common';
    import {pokemonListStore} from 'Store/pokemonList';
    import {commonStore} from 'Store/common';

    const searchPokemon = async (value) => {
            console.log(value);
            $commonStore.searchValue = value;
            if(!$pokemonListStore.fetchedAll){
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
                        .then(res => res.json())
                $pokemonListStore.pokemons = res.results; 
                $pokemonListStore.fetchedAll = true;
            }
    }

    const debouncedSearchbarValue = debounce(searchPokemon);
</script>

<style src="./SearchBar.styles.scss"></style>

<div style="text-align: center;">
    <span class="search-wrapper">
        <input type="text" name="name" placeholder="Search Pokemon" on:keyup={({target: {value}}) => debouncedSearchbarValue(value)} />
        <i class="fas fa-search"></i>
    </span>
</div>