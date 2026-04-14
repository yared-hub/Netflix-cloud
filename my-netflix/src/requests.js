const API_KEY = "ee3807d091fc7a183c81234d0da21406";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // ሌሎችንም መጨመር ትችላለህ...
};

export default requests;