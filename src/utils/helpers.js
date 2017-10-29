import { DEFAULT_CITIES } from "../constants/common";

// Reolves city name by id
function getCityNameById(id) {
  return "Sindi";
}

function getCitiesNamesByIds(ids) {
  return ["Sindi", "Pärnu", "Tallinn"];
}

function getCitiesIdsByNames(cityNames) {
  return DEFAULT_CITIES
}

export {
  getCityNameById,
  getCitiesNamesByIds,
  getCitiesIdsByNames
};
