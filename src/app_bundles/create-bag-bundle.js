export default (options) => {

  const defaults = {
    count: 0,
    weight: 1,
    name: 'default'
  }

  const config = Object.assign({}, defaults, options);

  const uCaseName = config.name.toUpperCase(); // => NAME
  const camlName = config.name.charAt(0).toUpperCase() + 
                   config.name.slice(1).toLowerCase(); // => Name

  // selectors
  const selectCount = `selectBags${camlName}Count`;
  const selectWeight = `selectBags${camlName}Weight`;

  // actionCreators
  const doSetCount = `doBags${camlName}Set`;

  // actions
  const BAGS_COUNT_CHANGE = `BAGS_${uCaseName}_COUNT_CHANGE`;

  return {
    name: config.name,

    getReducer: () => {
      const initialData = {
        count: config.count,
        weight: config.weight
      }

      return (state = initialData, { type, payload }) => {
        switch(type){
          case BAGS_COUNT_CHANGE:
            return Object.assign({}, state, payload);
          default:
            return state;
        }
      }
    },

    [selectCount]: (state) => {
      return state[config.name].count;
    },

    [selectWeight]: (state) => {
      return state[config.name].weight;
    },

    [doSetCount]: (newCount) => ({ dispatch }) => {
      dispatch({
        type: BAGS_COUNT_CHANGE,
        payload: {
          count: newCount
        }
      })
    }
  }

}