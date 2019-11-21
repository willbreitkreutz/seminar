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
  ),
  selectBagDetailsByCategory: createSelector(
    'selectRouteParams',
    'selectBagsPersonalItems',
    'selectBagsCarryonItems',
    'selectBagsCheckedItems',
    (params, personal, carryon, checked) => {
      switch(params.category){
        case 'personal':
          return {
            title: 'Personal Items',
            items: personal
          }
        case 'carryon':
          return {
            title: 'Carry-On Items',
            items: carryon
          }
        case 'checked':
          return {
            title: 'Checked Items',
            items: checked
          }
        default:
          return {
            title: `Sorry I couldn't Find what you are looking for`,
            items: []
          }
      }
    }
  )
}