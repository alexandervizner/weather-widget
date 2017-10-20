import { DEFAULT_CITIES } from "../constants";

// Reolves city name by id
function getCityNameById(id) {
  return "Sindi";
}

function getCitiesNamesByIds(ids) {
  return ["Sindi", "Pärnu", "Tallinn"];
}

function getCitiesIdsByNames(cityNames) {
  return {
      cities: DEFAULT_CITIES,
      tempUnit: "C"
  }
}

export {
  getCityNameById,
  getCitiesNamesByIds,
  getCitiesIdsByNames
};
