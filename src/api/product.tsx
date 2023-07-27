import instance from "./instance";

const getAllProduct = () => {
    return instance.get(`/api/products`)}
const getProductId = (id: any) => {
    return instance.get('/api/products/' +id)
}
const deleteProduct = (id: any) => {
    return instance.delete('/api/products/' +id)
}
const addProduct = (product: any) => {
    return instance.post('/api/products', product);
}

const updateProduct = (product: any) => {
    return instance.patch('/api/products/' + product._id, product)
}


const signup = (user: any) => {
    return instance.post('/api/signup', user);
}
const signin = (user: any) => {
    return instance.post('/api/signin', user);
}

export {getAllProduct, deleteProduct, addProduct, updateProduct, signup, signin, getProductId}