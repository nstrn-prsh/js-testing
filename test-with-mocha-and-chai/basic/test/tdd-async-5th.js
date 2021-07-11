const assert= require('chai').assert
const libs= require('../src/index')

describe( 'async test', ()=>{
    it( 'callback results', (done)=>{
        let input= [1,2,3,4,5,6,7,8,9]
        let filter= item=> item%2==0

        libs.delayedFilter( input, filter, (result)=>{
            assert.deepStrictEqual( result, [2,4,6,8])
            done()
        })
    })
    
    it( 'promise results', ()=>{
        let input= [1,2,3,4,5,6,7,8,9]
        let filter= item=> item%3==0

        return libs.filterPromise( input, filter)
            .then( result=>{
                assert.deepStrictEqual( result, [3,6,9])
            })
    }) 

    it( 'async results', async()=>{
        let input= [1,2,3,4,5,6,7,8,9]
        let filter= item=> item%5==0

        let result= await libs.filterPromise( input, filter)
        assert.deepStrictEqual( result, [5])
    }) 


})