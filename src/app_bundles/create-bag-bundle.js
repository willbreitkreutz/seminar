export default (options) => {

  const defaults = {
    bags: [],
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
  const selectBags = `selectBags${camlName}Items`;

  // actionCreators
  const doSetCount = `doBags${camlName}Set`;
  const doAdd = `doBags${camlName}Add`;
  const doRemove = `doBags${camlName}Remove`;

  // actions
  const BAGS_COUNT_CHANGE = `BAGS_${uCaseName}_COUNT_CHANGE`;
  const BAGS_ADD = `BAGS_${uCaseName}_ADD`;
  const BAGS_REMOVE = `BAGS_${uCaseName}_REMOVE`;

  return {
    name: config.name,

    getReducer: () => {
      const initialData = {
        bags: config.bags,
        weight: config.weight
      }

      return (state = initialData, { type, payload }) => {
        switch(type){
          case BAGS_COUNT_CHANGE:
          case BAGS_ADD:
          case BAGS_REMOVE:
            return Object.assign({}, state, payload);
          default:
            return state;
        }
      }
    },

    [selectBags]: (state) => {
      return state[config.name].bags;
    },

    [selectCount]: (state) => {
      return state[config.name].bags.length;
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
    },

    [doAdd]: () => ({ dispatch, store }) => {
      const bags = store[selectBags]();
      const newBag = {
        time: new Date().toISOString()
      }
      dispatch({
        type: BAGS_ADD,
        payload: {
          bags: [ ...bags, newBag ]
        }
      })
    },

    [doRemove]: () => ({ dispatch, store }) => {
      const bags = store[selectBags]();
      bags.pop();
      dispatch({
        type: BAGS_REMOVE,
        payload: [ ...bags ]
      })
    }
  }

}