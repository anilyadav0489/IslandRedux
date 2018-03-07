export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};



export var createIslands = (islandCount) => {
  return {
    type: 'CREATE_ISLANDS',
    islandCount
  };
};

export var selectIsland = (id) => {
  return {
    type: 'SELECT_ISLAND',
    id
  };
};

export var setIslandArea = (id, area) => {
  return {
    type: 'SET_ISLAND_AREA',
    id,
    area
  };
};

export var stateChange = (newState) => {
  return {
    type: 'STATE_CHANGE',
    newState
  };
};
