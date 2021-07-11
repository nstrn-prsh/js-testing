const expect= require('chai').expect
const mat= require('../src/index')

describe('function calculator test', ()=>{
    it('sum', ()=>{
        expect(mat.sum(1,1)).to.equal(2)
    })
    it('mul', ()=>{
        expect(mat.mul(80,0)).to.not.equal(80)
    })
})

describe('first array item', ()=>{
    it('return first element of an array', ()=>{
        let result= mat.firstItem([1,2,3])
        expect(result).to.equal(1)

    })
})

describe( 'async test', ()=>{
    
    it( 'callback results', (done)=>{
        let input= [1,2,3,4,5,6,7,8,9]
        let filter= item=> item%2==0

        mat.delayedFilter( input, filter, (result)=>{
            expect(result).to.deep.equal([2,4,6,8])
            expect(result).to.have.lengthOf(4)
            done()
        })
    })
    
    it( 'promise results', ()=>{
        let input= [1,2,3,4,5,6,7,8,9]
        let filter= item=> item%3==0

        return mat.filterPromise( input, filter)
            .then( result=>{
                expect(result).to.deep.equal([3,6,9])
                expect(result).to.have.lengthOf(3)
            })
    }) 

    it( 'async results', async()=>{
        let input= [1,2,3,4,5,6,7,8,9]
        let filter= item=> item%5==0
        let result= await mat.filterPromise( input, filter)
        expect(result).to.deep.equal([5])
        expect(result).to.have.lengthOf(1)
    }) 

})