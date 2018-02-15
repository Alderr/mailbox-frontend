const initialStore = {
    mainBranch: null
};

export default(state = initialStore, action) => {
    console.log(state);
    console.log('-------USER_STATE----------');
    
    if (action.type === 'NAVIGATE_BRANCH') {

        return Object.assign({}, state, {
            mainBranch: null
        });
    }

    return state;
};
