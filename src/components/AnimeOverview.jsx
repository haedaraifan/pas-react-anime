import React from "react";
import AnimeDetail from "./AnimeDetail";

function AnimeOverview({ item, onAdd, onDelete }) {
  return (
    <div className="anime-overview">
      <img src={item.images.jpg.image_url} alt={`${item.title}-alt`} className="item-img" />
      <p className="item-title">{item.title}</p>
      <AnimeDetail
        showDetail={item}
        onAdd={onAdd}
        onDelete={onDelete}
      />
    </div>
  )
}

export default AnimeOverview;