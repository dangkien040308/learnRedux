import Types from "./types"

export const IncreaseCount = () => {
    return {
      type : Types.increase
    }
}
export const DecreaseCount = () => {
    return {
      type : Types.decrease
    }
}