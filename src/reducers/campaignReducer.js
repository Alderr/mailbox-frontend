const initialStore = {
    mainBranch: null
};

export default(state = initialStore, action) => {

    if (action.type === 'NAVIGATE_BRANCH') {
        let component = sendComponent(action.name);

        return Object.assign({}, state, {
            mainBranch: null
        });
    }

    return state;
};
