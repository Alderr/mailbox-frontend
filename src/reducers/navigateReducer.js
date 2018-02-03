const initialStore = {
  mainBranch: null
};

export default(state = initialStore, action) => {

//navigator
  if (action.type === 'NAVIGATE_BRANCH') {
    let component = sendComponent(action.name);
    
    return Object.assign({}, state, {
      mainBranch: null
    });
  }

  return state;
}

function sendComponent(name) {
  if (name === '') {
    return null
  }
}
