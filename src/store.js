import { createStore } from 'redux';
//initial store
const initialState = {
  sport: 'none defined yet',
  league: 'none defined yet',
  match: 'none defined yet',
  gameData: 'none defined yet'
}

//reducer
function sportApp(state = initialState, action) {
  switch (action.type) {
    case 'CHOOSE_SPORT':
      return Object.assign({}, state, {
        sport: action.sport,
        league: function() {
          if (action.sport === 'football') {
           return 'nfl'
         } else if (action.sport === 'baseball') {
           return 'mlb'
         } else if (action.sport === 'basketball') {
           return 'nba'
         } else if (action.sport === 'hockey') {
           return 'nhl'
         }
        }()
      })
    case 'CHOOSE_MATCH':
      return Object.assign({}, state, {
        match: action.match,
        awayTeam: action.awayTeam,
        homeTeam: action.homeTeam
      })
      case 'GOT_DATA':
      return Object.assign({}, state, {
        status: 'got data',
        gameData: action.gameData
      })
  default:
    return state
  }
}

//Create store
const store = createStore(sportApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store
