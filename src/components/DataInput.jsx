import React from "react";

class DataInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      title: '',
      synopsis: '',
      genres: '',
      episodes: '',
      status: ''
    }

    this.onShowFormDataInputHandler = this.onShowFormDataInputHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onSynopsisChangeEventHandler = this.onSynopsisChangeEventHandler.bind(this);
    this.onGenresChangeEventHandler = this.onGenresChangeEventHandler.bind(this);
    this.onEpisodesChangeEventHandler = this.onEpisodesChangeEventHandler.bind(this);
    this.onStatusChangeEventHandler = this.onStatusChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onCancelEventHandler = this.onCancelEventHandler.bind(this);
  }

  onShowFormDataInputHandler() {
    this.setState(() => {
      return {
        isShowing: true
      }
    })
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      }
    });
  }

  onSynopsisChangeEventHandler(event) {
    this.setState(() => {
      return {
        synopsis: event.target.value
      }
    });
  }

  onGenresChangeEventHandler(event) {
    this.setState(() => {
      return {
        genres: event.target.value
      }
    });
  }

  onEpisodesChangeEventHandler(event) {
    this.setState(() => {
      return {
        episodes: event.target.value
      }
    });
  }

  onStatusChangeEventHandler(event) {
    this.setState(() => {
      return {
        status: event.target.value
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    if (this.state.title) {
      this.props.addData(this.state);

      this.setState(() => {
        return {
          isShowing: false,
          title: '',
          synopsis: '',
          genres: '',
          episodes: '',
          status: ''
        }
      });
    }
  }

  onCancelEventHandler() {
    this.setState(() => {
      return {
        isShowing: false
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onShowFormDataInputHandler} className="btn_add_data">Add anime</button>
        {
          this.state.isShowing === true ?
            <div className="data-input-container">
              <div onClick={this.onCancelEventHandler} className="overlay"></div>
              <div className="data-input">
                <h2 className="data-input-header">Data Input</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                  <input
                    type="text"
                    placeholder="title"
                    title={this.state.title}
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                  />
                  <textarea
                    rows="6"
                    cols="50"
                    placeholder="synopsis"
                    synopsis={this.state.synopsis}
                    value={this.state.synopsis}
                    onChange={this.onSynopsisChangeEventHandler}
                  ></textarea>
                  <input
                    type="text"
                    placeholder="genres"
                    genres={this.state.genres}
                    value={this.state.genres}
                    onChange={this.onGenresChangeEventHandler}
                  />
                  <input
                    type="number"
                    placeholder="episodes"
                    episodes={this.state.episodes}
                    value={this.state.episodes}
                    onChange={this.onEpisodesChangeEventHandler}
                  />
                  <input
                    type="text"
                    placeholder="status"
                    status={this.state.status}
                    value={this.state.status}
                    onChange={this.onStatusChangeEventHandler}
                  />
                  <button type="submit">submit</button>
                </form>
              </div>
            </div>
            :
            null
        }
      </div>
    )
  }
}

export default DataInput;