const { checkAndGenerate, createElement } = require('./util')

const initApp= ()=>{
    const newProductBtn = document.querySelector('#add-product')
    newProductBtn.addEventListener('click', addProduct)
}

const addProduct= ()=>{
    const productTitle= document.querySelector('#title')
    const productPrice= document.querySelector('#price')
    const products= document.querySelector('.products')

    const titleValue= productTitle.value
    const priceValue= productPrice.value

    const output= checkAndGenerate(titleValue, priceValue)

    // yani age output nadashtin ejra ro motevaghef kon
    if(!output){
        return
    }

    const productEl= createElement('li', output, 'product-list')
    products.appendChild(productEl)
}

initApp()