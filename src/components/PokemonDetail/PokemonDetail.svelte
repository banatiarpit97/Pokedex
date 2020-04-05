<script>
  import { onMount } from "svelte";
  import PokemonType from "Components/PokemonType/PokemonType";
  import {pokemonListStore} from 'Store/pokemonList';

  let pokemonDetail = {};

  $: {
    getPokemon($pokemonListStore.activeIndex);
    window.scrollTo(0,0);
  }

  async function getPokemon () {
    pokemonDetail = await fetch(`https://pokeapi.co/api/v2/pokemon/${$pokemonListStore.activeIndex}/`)
              .then(res => res.json());
  }
</script>

<style src="./PokemonDetail.styles.scss"></style>

<article>
  {#if pokemonDetail.name}
    <section class="detail-header">
      <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} width="200" />

      <div>
        <h2 class="pokemon-title">{pokemonDetail.name}</h2>

        <div class="pokemon-type-container">
          <ul style="padding: 0; margin-top: 5px">
            {#each pokemonDetail.types as { type }}
              <PokemonType name={type.name} />
            {/each}
          </ul>
        </div>
      </div>
    </section>

    <section>
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-header">{pokemonDetail.height}</span>
          <span class="stat-body">Height</span>
        </div>
        <div class="stat-item">
          <span class="stat-header">{pokemonDetail.weight}</span>
          <span class="stat-body">Weight</span>
        </div>
        <div class="stat-item">
          {#each pokemonDetail.abilities as { ability }, index}
            <span class="stat-header-long">
              {ability.name.replace('-', ' ')}
              {index !== pokemonDetail.abilities.length - 1 && ', '}
            </span>
          {/each}
          <span class="stat-body">Abilities</span>
        </div>
      </div>
    </section>

    <section>
      <h2>Stats</h2>

      <div class="stats-grid">
        {#each pokemonDetail.stats as { base_stat, stat }}
          <div class="stat-item">
            <span class="stat-header">{base_stat}</span>
            <span class="stat-body">{stat.name.replace('-', ' ')}</span>
          </div>
        {/each}
      </div>
    </section>
  {:else}
    <p>loading</p>
  {/if}
</article>
