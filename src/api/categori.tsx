import instance from "./instance";

const getAllCategori = () => {
    return instance.get('/api/categories')
}
const deleteCategori = (id: any) => {
    return instance.delete('/api/categories/' +id)
}
const addCategori = (categori: any) => {
    return instance.post('/api/categories', categori);
}
const updateCategori = (categori: any) => {
    return instance.patch('/api/categories/' + categori._id, categori)
}
export {getAllCategori, deleteCategori, addCategori, updateCategori}