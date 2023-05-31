import React from "react";
import AnimeOverview from "./AnimeOverview";

function ListAnime({ animeList, onAdd, onDelete }) {
  return (
    <div className="list-anime">
      {
        animeList.map((item) => (
          <AnimeOverview
            key={item.mal_id}
            item={item}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        ))
      }
    </div>
  )
}

export default ListAnime;