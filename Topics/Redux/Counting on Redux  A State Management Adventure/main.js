function returnStore(initialReducer) {
    // Enter code here
    const store = createStore(initialReducer);
    store.dispatch({type: 'INCRIMENT'});
    store.dispatch({type: 'INCRIMENT'});
    store.dispatch({type: 'DECREMENT'});
    return store;

}