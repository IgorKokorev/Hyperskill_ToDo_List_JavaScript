function returnSlice(sliceName) {
    // Enter your code here
  return createSlice({
    name: sliceName,
    initialState: {
      counter: 0
    },
    reducers: {
      increment: (state) => {
        let newCounter = state.counter + 1;
        return { counter: newCounter }; 
      },
      decrement: (state) => {
        let newCounter = state.counter - 1;
        return { counter: newCounter }; 
      }
    }
  });
}
