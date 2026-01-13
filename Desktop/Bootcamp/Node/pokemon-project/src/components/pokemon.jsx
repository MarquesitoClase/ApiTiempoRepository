function Pokemon({ pokemon }) {
  return (
    <article className="pokemon">
      <h2>#{pokemon.numDex}</h2>
      <h1>{pokemon.nombre}</h1>
      <img src={pokemon.imagen} alt={pokemon.nombre} />
      <div className="tipos">
        {pokemon.tipos.map(tipo => (
          <span key={tipo}>{tipo}</span>
        ))}
      </div>
      <div className="descripciones">
        {pokemon.descripcionesPokedex.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
      <p>Generación: {pokemon.generacionInicial}</p>
      <a href={pokemon.urlGif} target="_blank" rel="noopener noreferrer">
        Ver GIF
      </a>
    </article>
  );
}

export default Pokemon;
