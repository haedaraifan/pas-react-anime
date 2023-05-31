import React from "react";

class AnimeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      isShowing: false
    }

    this.onShowDetailEventHandler = this.onShowDetailEventHandler.bind(this);
    this.onCloseDetailEventHandler = this.onCloseDetailEventHandler.bind(this);
    this.onAddEventHandler = this.onAddEventHandler.bind(this);
  }

  onShowDetailEventHandler() {
    let genres = this.props.showDetail.genres;

    if (Array.isArray(genres)) {
      genres = this.props.showDetail.genres.map(genre => genre.name);

      this.setState(() => {
        return {
          item: {
            ...this.props.showDetail,
            genres: genres.join(", ")
          },
          isShowing: true
        }
      });
    } else {
      this.setState(() => {
        return {
          item: this.props.showDetail,
          isShowing: true
        }
      });
    }
  }

  onCloseDetailEventHandler() {
    this.setState(() => {
      return {
        isShowing: false
      }
    })
  }

  onAddEventHandler() {
    this.props.onAdd(this.state.item.mal_id);
    this.onCloseDetailEventHandler();
  }

  render() {
    const item = this.state.item;

    if (this.state.isShowing === true) {
      return (
        <div className="detail-container">
          <div className="overlay" onClick={this.onCloseDetailEventHandler}></div>
          <div className="detail">
            <h2 className="title">{item.title}</h2>
            <div className="poster">
              <img src={item.images.jpg.large_image_url} alt={`${item.title}-alt`} />
              {
                item.inserted_at ? <p><b>Inserted at:</b> {item.inserted_at}</p> : null
              }
            </div>
            <div className="information">
              <ul>
                {
                  item.episodes === null ?
                    <li><b>Total Episode:</b> ?</li>
                    :
                    <li><b>Total Episode:</b> {item.episodes}</li>
                }
                <li><b>Status:</b> {item.status}</li>
                <li><b>Genre:</b> {item.genres}</li>
              </ul>
              <h4>Synopsis</h4>
              <p>{item.synopsis}</p>
              {
                item.is_watch_list ?
                  <button onClick={() => this.props.onDelete(item.mal_id)}>Delete from Watch List</button>
                  :
                  <button onClick={this.onAddEventHandler}>Add to Watch List</button>
              }
            </div>
          </div>
        </div>
      )
    } else if (this.state.isShowing === false) {
      return <button onClick={this.onShowDetailEventHandler} className="btn-show"></button>
    }
  }
}

export default AnimeDetail;