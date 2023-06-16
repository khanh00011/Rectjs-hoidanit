import instance from "../axios"

const getAllUser = (page) => {
    return instance.get(`/users?page=${page}`);
}
export default getAllUser;