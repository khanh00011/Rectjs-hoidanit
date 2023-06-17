import instance from "../axios"

const getAllUser = (page) => {
    return instance.get(`/users?page=${page}`);
}

const AddNewUser = (name , job) => {
    return instance.post('/users',{name :name , job : job});
}
export {getAllUser , AddNewUser};