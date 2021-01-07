class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "manual",
    };
  }

  async mostPopular(dispatch) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=kr&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return dispatch({ type: "getPopular", list: result.items });
    } catch (error) {
      return console.log("error", error);
    }
  }

  async search(query, dispatch) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query.keyword}&key=${this.key}&type=video`,
        this.getRequestOptions
      );
      const result = await response.json();
      return dispatch({ type: "getSearch", list: result.items });
    } catch (error) {
      return console.log("error", error);
    }
  }
}

export default Youtube;
