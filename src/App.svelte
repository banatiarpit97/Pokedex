<script>
	import PokemonDetail from 'Components/PokemonDetail/PokemonDetail';
	import PokemonList from 'Components/PokemonList/PokemonList';
</script>

<style lang="scss">
.container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 640px;
  padding: 50px 10px 30px 10px;
}
</style>

<div>
  <div class="container">
    <PokemonDetail />
  </div>
  <PokemonList />
</div>