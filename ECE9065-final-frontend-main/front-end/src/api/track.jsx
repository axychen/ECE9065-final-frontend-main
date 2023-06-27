import axios from "axios";

const token = localStorage.getItem("token");
const API_URL = "http://localhost:3000";
const config = {
  headers: {
    Authorization: token,
  },
};

const gettrackinfo = (body) => {
  return axios.get(API_URL + "/api/track/getTrackByTitle", body, config);
};

const getTrackByName = (trackTitle) => {
  return axios.get(
    API_URL + "/api/track/get-tracks-title?" + "trackTitle=" + trackTitle,
    config
  );
};

const getTrackByArtist = (artistName) => {
  return axios.get(
    API_URL + "/api/track/get-tracksByArtist?" + "artistName=" + artistName,
    config
  );
};

const addTrackToList = (body) => {
  return axios.post(API_URL + "/api/track/save-tracks-toList", body, config);
};

export { gettrackinfo, getTrackByName, getTrackByArtist,addTrackToList };
