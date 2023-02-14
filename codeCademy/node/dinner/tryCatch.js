const cookBeanSouffle = require('./functionsTryCatch.js');

async function hostDinnerParty(){
  try{
    let msg = await cookBeanSouffle();
    console.log(`${msg} is served!`)
  }catch (error){
    console.log(error);
    console.log("Ordering a pizza!");
  }
}


hostDinnerParty();