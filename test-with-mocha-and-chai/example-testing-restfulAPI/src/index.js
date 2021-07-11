const sum= (x,y)=> x+y
const mul= (x,y)=> x*y
const firstItem= array=>{
    if(array && array.length)
    return array[0]
}

// callback
const delayedFilter= (array, filter, callback)=>{
    setTimeout( ()=>{
        callback(array.filter(filter))
    },1000)
}

//promise
const filterPromise= (array, filter)=>{
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve(array.filter(filter))
        },1000)
    })
}



module.exports= {sum, mul, firstItem, delayedFilter, filterPromise}