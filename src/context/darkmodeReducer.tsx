

export const darkmodeReducer = (state:{darkmode:boolean}, action:{type:string})=>{
    switch (action.type) {
      case 'LIGHT': 
        return {
          darkmode:false
        }
      case 'DARK': 
          return {
            darkmode:true
          }
        case 'TOGGLE':
          return {
            darkmode:!state.darkmode
          }    
      default:
        return state;
    }
}



export default darkmodeReducer