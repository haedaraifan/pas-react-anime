import React from "react";
import ListAnime from "./ListAnime";
import DataInput from './DataInput';

function WatchPlan({ animeList, onDelete, addData }) {
  return (
    animeList.length === 0 ?
    <div className="watch-plan-no-content">
      <img src="/images/no_content.jpeg" alt="no content" />
      <p>Your watch list is empty! You can check the recommendation tab or manually add anime by clicking the button below</p>
      <DataInput addData={addData} />
    </div>
    :
    <div className="watch-plan">
      <ListAnime
        animeList={animeList}
        onDelete={onDelete}
      />
    </div>
  )
}

export default WatchPlan;