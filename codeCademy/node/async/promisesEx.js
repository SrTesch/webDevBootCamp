let prom = new Promise((resolve, reject) =>{
    let num = Math.random();
    if(num < .5)
        resolve('Yay!');
    else
        reject('Ohh nooo!');
});

const handleSuccess = resolvedValue =>{
    console.log(resolvedValue);
}

const handleFailure = rejectionReason =>{
    console.log(rejectionReason);
}

prom.then(handleSuccess).catch(handleFailure);