const assert= require('chai').assert
const mat= require('../src/index')

describe('function calculator test', ()=>{
    it('sum', ()=>{
        assert.strictEqual(mat.sum(1,1),2)
    })
    it('mul', ()=>{
        assert.strictEqual(mat.mul(2,4),8)
    })
})

describe('first array item', ()=>{
    it('return first element of an array', ()=>{
        let result= mat.firstItem([1,2,3])
        assert.strictEqual(result, 1)
    })
})