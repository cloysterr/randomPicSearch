import React from "react";
import unsplash from "../api/unsplash";

import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };
  useSearchInput = async (input) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: input },
    });
    this.setState({ images: res.data.results });

    //.then((r) => console.log(r.data.results));
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div>
          <Searchbar useSearchInput={this.useSearchInput} />
          Found:{this.state.images.length} images.
        </div>
        <ImageList element={this.state.images} />
      </div>
    );
  }
}

export default App;
