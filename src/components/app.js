import React, { Component } from "react";
import giphy from "giphy-api";

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8",
    };
  }

  search = (query) => {
    // TODO: Call the giphy API here
    giphy("4xUpJ5MXtRUKdpDlw2RvJt687yq6VOQI").search(
      {
        q: query,
        rating: "g",
        limit: 10,
      },
      (err, res) => {
        // Res contains gif data!
        this.setState({
          gifs: res.data,
        });
      }
    );
  };
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
