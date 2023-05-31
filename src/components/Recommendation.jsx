import React from "react";
import RecommendationNavbar from "./RecommendationNavbar";
import ListAnime from "./ListAnime";

function Recommendation({ season, year, animeList, onGetPrevSeasonList, onGetNextSeasonList, onAddToWatchPlan }) {
  return (
    <div className="recommendation">
      <h2 className="recommendation-header">Recommendations</h2>
      <RecommendationNavbar
        season={season}
        year={year}
        onGetPrevSeasonList={onGetPrevSeasonList}
        onGetNextSeasonList={onGetNextSeasonList}
      />
      {
        animeList.length === 0 ?
          <img src="/images/processing.jpeg" alt="no content" className="img-process" />
          :
          <ListAnime
            animeList={animeList}
            onAdd={onAddToWatchPlan}
          />
      }
    </div>
  )
}

export default Recommendation;