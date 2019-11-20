import { createSelector } from 'redux-bundler';

const BAGS_INCREMENT = 'BAGS_INCREMENT';
const BAGS_DECREMENT = 'BAGS_DECREMENT';

export default {
  name: 'bags',
  getReducer: () => {
    const initialData = {
      personalCount: 0,
      carryonCount: 0,
      checkedCount: 0,
      personalWeight: 10,
      carryonWeight: 30,
      checkedWeight: 55
    };

    return (state = initialData, { type, payload }) => {
      switch(type){
        case BAGS_INCREMENT:
          return Object.assign({}, state, payload);
        default:
          return state;
      }
    }
  },

  doBagsPersonalIncrement: () => {
    return ({ dispatch, store }) => {
      const count = store.selectBagsPersonalCount();
      dispatch({
        type: BAGS_INCREMENT,
        payload: {
          personalCount: count + 1
        }
      })
    }
  },

  doBagsPersonalDecrement: () => {
    return ({ dispatch, store }) => {
      const count = store.selectBagsPersonalCount();
      dispatch({
        type: BAGS_DECREMENT,
        payload: {
          personalCount: count - 1
        }
      })
    }
  },

  doBagsCarryonIncrement: () => {
    return ({ dispatch, store }) => {
      const count = store.selectBagsCarryonCount();
      dispatch({
        type: BAGS_INCREMENT,
        payload: {
          carryonCount: count + 1
        }
      })
    }
  },

  doBagsCarryonDecrement: () => {
    return ({ dispatch, store }) => {
      const count = store.selectBagsCarryonCount();
      dispatch({
        type: BAGS_DECREMENT,
        payload: {
          carryonCount: count - 1
        }
      })
    }
  },

  doBagsCheckedIncrement: () => {
    return ({ dispatch, store }) => {
      const count = store.selectBagsCheckedCount();
      dispatch({
        type: BAGS_INCREMENT,
        payload: {
          checkedCount: count + 1
        }
      })
    }
  },

  doBagsCheckedDecrement: () => {
    return ({ dispatch, store }) => {
      const count = store.selectBagsCheckedCount();
      dispatch({
        type: BAGS_DECREMENT,
        payload: {
          checkedCount: count - 1
        }
      })
    }
  },

  selectBagsPersonalCount: (state) => {
    return state.bags.personalCount;
  },

  selectBagsCarryonCount: state => state.bags.carryonCount,

  selectBagsCheckedCount: (state) => {
    return state.bags.checkedCount;
  },

  selectBagsPersonalWeight: (state) => {
    return state.bags.personalWeight;
  },

  selectBagsCarryonWeight: state => state.bags.carryonWeight,

  selectBagsCheckedWeight: (state) => {
    return state.bags.checkedWeight;
  },

  selectBagsTotalWeight: createSelector(
    'selectBagsPersonalCount',
    'selectBagsCarryonCount',
    'selectBagsCheckedCount',
    'selectBagsPersonalWeight', 
    'selectBagsCarryonWeight',
    'selectBagsCheckedWeight',
    (
      personalCount, carryonCount, checkedCount,
      personalWeight, carryonWeight, checkedWeight
    ) => {
      return (
        personalCount * personalWeight +
        carryonCount * carryonWeight +
        checkedCount * checkedWeight
      )
    }
  )
}