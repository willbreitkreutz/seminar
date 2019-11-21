import { createSelector } from 'redux-bundler';

export default {
  name: 'bags',
  reducer: (state = null) => state,
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