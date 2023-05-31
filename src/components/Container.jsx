import React from "react";
import { nanoid } from "nanoid";
import { getAnimeBySeason } from "../utils/data";
import Recommendation from "./Recommendation";
import WatchPlan from "./WatchPlan";
import DataInput from "./DataInput";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2023,
      season: 'spring',
      listRecommendationAnime: [],
      listWatchPlanAnime: []
    }

    this.getAnimeList(this.state.year, this.state.season);
    this.onAddToWatchListHandler = this.onAddToWatchListHandler.bind(this);
    this.onAddManualDataHandler = this.onAddManualDataHandler.bind(this);
    this.onDeleteFromWatchListHandler = this.onDeleteFromWatchListHandler.bind(this);

    this.onGetNextSeasonList = this.onGetNextSeasonList.bind(this);
    this.onGetPrevSeasonList = this.onGetPrevSeasonList.bind(this);
  }

  async getAnimeList(year, season) {
    const animeList = await getAnimeBySeason(year, season);

    this.setState(() => {
      return {
        year,
        season,
        listRecommendationAnime: animeList
      }
    });
  }

  onGetNextSeasonList() {
    const seasonList = ["winter", "spring", "summer", "fall"];
    let currentSeasonIndex = seasonList.findIndex(season => season === this.state.season) + 1;
    let currentYear = this.state.year;

    if(currentSeasonIndex >= seasonList.length) {
      currentSeasonIndex =0;
      currentYear++;
    }

    this.getAnimeList(currentYear, seasonList[currentSeasonIndex]);
  }

  onGetPrevSeasonList() {
    const seasonList = ["winter", "spring", "summer", "fall"];
    let currentSeasonIndex = seasonList.findIndex(season => season === this.state.season) - 1;
    let currentYear = this.state.year;

    if(currentSeasonIndex < 0) {
      currentSeasonIndex = seasonList.length - 1;
      currentYear--;
    }

    this.getAnimeList(currentYear, seasonList[currentSeasonIndex]);
  }

  onAddToWatchListHandler(id) {
    const newAnime = this.state.listRecommendationAnime.filter(item => item.mal_id === id)[0];
    const isDuplicate = this.state.listWatchPlanAnime.filter(item => item.mal_id === id)[0];

    if(!isDuplicate) {
      this.setState((prevState) => {
        return {
          listWatchPlanAnime: [
            ...prevState.listWatchPlanAnime,
            {
              ...newAnime,
              inserted_at: new Date().toLocaleString(),
              is_watch_list: true
            }
          ]
        }
      });
    }
  }

  onAddManualDataHandler({ title, synopsis, genres, episodes, status }) {
    this.setState((prevState) => {
      return {
        listWatchPlanAnime: [
          ...prevState.listWatchPlanAnime,
          {
            mal_id: nanoid(8),
            images: {
              jpg: {
                image_url: '/images/default.jpg',
                large_image_url: '/images/default.jpg'
              }
            },
            title,
            synopsis,
            genres,
            episodes,
            status,
            inserted_at: new Date().toLocaleString(),
            is_watch_list: true
          }
        ]
      }
    });
  }

  onDeleteFromWatchListHandler(id) {
    const listWatchPlanAnime = this.state.listWatchPlanAnime.filter(item => item.mal_id !== id);
    this.setState(() => {
      return {
        listWatchPlanAnime
      }
    });
  }

  render() {
    console.log(this.state.listRecommendationAnime);
    return (
      <div className="container">
        <h1 className="header">Watch List</h1>
        <WatchPlan
          animeList={this.state.listWatchPlanAnime}
          onDelete={this.onDeleteFromWatchListHandler}
          addData={this.onAddManualDataHandler}
        />
        <Recommendation
          season={this.state.season}
          year={this.state.year}
          animeList={this.state.listRecommendationAnime}
          onGetPrevSeasonList={this.onGetPrevSeasonList}
          onGetNextSeasonList={this.onGetNextSeasonList}
          onAddToWatchPlan={this.onAddToWatchListHandler}
          onAddManualData={this.onAddManualDataHandler}
        />
        <DataInput addData={this.onAddManualDataHandler}/>
      </div>
    )
  }
}

export default Container;