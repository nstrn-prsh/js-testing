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