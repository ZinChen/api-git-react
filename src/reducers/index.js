
const initialState = {
  repos: []
};

// const initialState = {
//   books: []
// };

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'REPOS_LOADED':
      return {
        repos: action.payload
      };

    case 'REPO_LOADED':
      return {
        repos: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
