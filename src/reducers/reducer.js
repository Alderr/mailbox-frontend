

const initialStore = {
    actions: 0,
    userId: ''
};

export default(state = initialStore, action) => {

    if (action.type === 'INCREASE_COUNT') {
        return Object.assign({}, state, {
            actions: action.count
        });
    }

    else if (action.type === 'SOMETHINGLOL') {
        return Object.assign({},state, {
            something: action.value
        });
    }

    return state;
};
