export function manageFriends(state, action) {
  // your code her
    switch(action.type){
        case "friends/add":
          return {friends : [...state.friends, action.payload]};
        case "friends/remove":
          let friends= state.friends.filter(friend => friend.id !== action.payload);
          return {friends: friends}
        default:
          return state
    }
    
  
}
