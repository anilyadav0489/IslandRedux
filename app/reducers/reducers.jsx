
export var createIslandsReducer = (state = {}, action) => {
  switch (action.type) {
    case '@@INIT':
      return {
        gameState: 'TOTAL_ISLANDS_TO_BE_DECIDED',
        playerA: 0,
        computer: 0,
        leftBoundary: 0,
        rightBoundary: 0,
        islands: [],
        availableIslands: []
      };


    case 'STATE_CHANGE':
        return {...state, gameState: action.newState};


    case 'CREATE_ISLANDS':
        var i = 1;
        var islands = [];
        while (i <= action.islandCount){
          islands.push({
            id: i,
            area: 0,
            isAvailable: true,
            isPicked: false
          });
          i++;
        };
        //update new_state for user to enter areas in circles
        var gameState = 'ENTER_ISLANDS_AREA';

        //update initial boundary values
        var leftBoundary = 1;
        var rightBoundary = action.islandCount;
        return {...state, islands, gameState, leftBoundary, rightBoundary};


      case 'SELECT_ISLAND':
        var {playerA, computer, leftBoundary, rightBoundary, gameState, islands, availableIslands} = state;
        var newGameState;

        //mark selected island as unavailable
        islands = islands.map(function(island){
          if(island.id === action.id){
            island.isAvailable = false;
            island.isPicked = true;
            island.readOnly = true;
          }
          return island;
        });

        //get selected island as object
        var selectedIslandObjectArray = availableIslands.filter(function(island){
          return action.id === island.id;
        });
        var selectedIsland = selectedIslandObjectArray[0];

        //remove selected island from available islands
        availableIslands = availableIslands.filter(function(island){
          return action.id != island.id;
        });

        if(gameState === 'PLAYER_TO_SELECT'){
          //add Area in player's Bucket
          playerA = +playerA + +selectedIsland.area;

          //update boundary
          if(action.id === leftBoundary){
            leftBoundary++;
          }else if(action.id === rightBoundary){
            rightBoundary--;
          }

          //update new game state
          newGameState = availableIslands.length > 0 ? 'COMPUTER_TO_SELECT' : 'GAME_OVER';

          //update Main component state
          return {...state, playerA, gameState: newGameState, leftBoundary, rightBoundary, availableIslands};

        } else if(gameState === 'COMPUTER_TO_SELECT'){ //handle it carefully
          //add Area in computer's Bucket
          computer = +computer + +selectedIsland.area;

          //update boundary
          if(action.id === leftBoundary){
            leftBoundary++;
          }else if(action.id === rightBoundary){
            rightBoundary--;
          }

          //update new game state
          newGameState = availableIslands.length > 0 ? 'PLAYER_TO_SELECT' : 'GAME_OVER';

          //update Main component state
          return {...state, computer, gameState: newGameState, leftBoundary, rightBoundary, availableIslands};

        }


    case 'SET_ISLAND_AREA':
      var islands = state.islands;
      var updatedIslands = islands.map((island) => {
        if(island.id === action.id){
          island.area = action.area;
        }
        return island;
      });
      return {...state, islands: updatedIslands, availableIslands: updatedIslands};

    default:
      return state;
  };
};

export var islandReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ISLAND_AREA':
      return action.area;
    default:
    return state;
  };
};
