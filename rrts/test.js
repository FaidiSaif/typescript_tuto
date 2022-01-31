//asynchronous function are 2types :
// 1- defined with asyn ===> returns promise 
// 2- not defined with async but has a clbk functoin ===> does not return a promise : applying the await keyword on it does not do anything  

const promise  = new Promise (resolve, reject)

const func = async () => {
 await setTimeout(()=>console.log('event fired'), 1000) 
 console.log('func called');
}

func();
