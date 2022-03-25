function getCardInfoByUserId(userId) {
    fetch('http://localhost:8081/card/'+userId)
        .then(res=>{
            console.log('status:',res.status);
        })
        .then(jsonData=>{
            console.log(jsonData);
        })
        .catch(err=>{
            console.log(err);
        })
}

export {getCardInfoByUserId}