<template>
  <div id="app">
    <button class="btn-floating btn-large waves-effect waves-light red" @click="renderFormAdd">
      <i class="fa-solid fa-plus" ></i>
    </button>
    <div class="container">
    <div class="section">
      <div class="row">
        <!-- card de tarefa que repete para cada item do array -->
        <div v-for="tarefa in tasks" :key="tarefa.id" class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <div>
                {{ tarefa.title }}
                <span class="new badge" data-badge-caption="">{{
                  tarefa.dueTo
                }}</span>
                <div class="chip">{{ tarefa.project }}</div>
              </div>
            </div>
            <div class="card-action">
              <a @click='renderFormEdit'><i class="fa-solid fa-pen-to-square"></i></a>
              <a @click='deleteTask(tarefa)'><i class="fa-solid fa-trash-can"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AddTask  v-show="showAdd"  @newTaskPush="addNewTask" />
  <EditTask v-show='showEdit' @editingTask="editTask(tarefa)"/>
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue'
import EditTask from './components/EditTask.vue'
import api_methods from '@/api_methods.js'

export default {
  name: 'App',
  data: () =>{
    return{
      tasks:[],
      showAdd:false,
      showEdit:false,
    }
  },
  components: {
    AddTask,
    EditTask,
  },
  methods:{
    renderTasks(){
      api_methods.getData((data)=> this.tasks = data)
      },
    deleteTask(task){
      api_methods.removeData(task.id, this.renderTasks())
    },
    addNewTask(task){
      this.showAdd = !this.showAdd
      api_methods.addData(task, this.renderTasks())
    },
    editTask(task){
      api_methods.editData(task.id, this.renderTasks())
    },
    renderFormAdd(){
      this.showAdd=!this.showAdd
    },
    renderFormEdit(){
      this.showEdit=!this.showEdit
    },
  },
  created(){
    this.renderTasks()
  }
}
</script>
