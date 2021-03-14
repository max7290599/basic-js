const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!members || members.length == 0 || !Array.isArray(members) ){ 
    return false;
  }else{
    return members.map(item=> {
      if(typeof(item)==="string") return item.toUpperCase().trim()[0]}).sort().join('');
  }
  
};
