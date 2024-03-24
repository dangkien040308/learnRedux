import Types from "./types"
const initState = {
    count : 1
}
export const counterReducer = (state = initState, action) => {
    console.log(state)
    switch(action.type) {
        default :
          return state
        case Types.increase : {
          return {
            count : state.count + 1
          }
        }
        case Types.decrease : {
            return {
              count : state.count - 1
            }
          }
    }
    
}