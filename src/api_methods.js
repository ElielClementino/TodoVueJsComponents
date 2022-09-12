import axios from "axios"


axios.defaults.baseURL = "http://localhost:3000"

export default {
    getData: (callback) => {
        axios.get("/tasks").then((response) => {
            callback(response.data)
        })
    },
    removeData: (id, callback) => {
        axios.delete(`/tasks/${id}`).then((response) =>{
            callback(response.data)
        })
    },
    addData : (task, callback) =>{
        axios.post('/tasks', task).then((response) =>{
            callback(response.data)
        })
    },
    editTask: (task, callback) =>{
        axios.put(`/tasks/${task.id}`, task).then((response) =>{
            callback(response.data)
        })
    }
}