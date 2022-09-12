import axios from "axios";


axios.defaults.baseURL = 'http://localhost:3000'
export default {
    getData : callback =>{
        axios.get('/tasks').then((response)=>{
            callback(response.data)
        }).catch((error)=>[
            console.log('Erro:', error)
        ])
    },

    removeData: id =>{
        new Promise((resolve, reject) =>{
            axios.delete(`/tasks/${id}`).then((response)=>{
                resolve(response.data)
            }).catch((error)=>[
                reject('Erro:', error)
            ])
        })
    },
    
    addData : () => {
        new Promise((resolve, reject)=>{
            axios.post('/tasks').then((response) =>{
                resolve(response.data)
            }).catch((error)=>[
                reject('Erro:', error)
            ])
        })
    },
    editData: (id, callback) =>{
        axios.put(`/tasks/${id}`).then((response)=>{
            callback(response.data)
        }).catch((error)=>[
            console.log('Erro:', error)
        ])
    },
}