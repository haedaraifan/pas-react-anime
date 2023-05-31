import React from "react";

function RecommendationNavbar({ season, year, onGetPrevSeasonList, onGetNextSeasonList }) {

  return (
    <div className="recommendation-navbar">
      <button onClick={() => onGetPrevSeasonList()}>{"<"}</button>
      <p>{season} {year}</p>
      <button onClick={() => onGetNextSeasonList()}>{">"}</button>
    </div>
  )
}

export default RecommendationNavbar;