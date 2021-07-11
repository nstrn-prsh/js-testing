// unit test on generateText from util.js

const { generateText }= require('./util')

test('output title and price', ()=>{
   const text= generateText('book', 29)
   expect(text).toBe('book 29')
})