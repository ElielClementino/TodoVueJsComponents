<template>
<div class="section task-add">
    <div class="row">
      <div class="input-field col s12">
        <input
          v-model="newTask.title"
          placeholder="Entre com uma tarefa"
          id="title"
          type="text"
          class="validate"
        />
        <label for="title">Tarefa</label>
      </div>
      <div class="input-field col s12">
        <label for="project">Pick a Project</label>
        <select id="project" v-model="newTask.project">
          <option value="Estudos">Estudos</option>
          <option value="Financeiro">Financeiro</option>
          <option value="Trabalho">Trabalho</option>
        </select>
      </div>
      <div class="input-field col s6">
        <input v-model="newTask.dueTo" type="text" class="datepicker" />
        <label for="date">Data Vencimento</label>
      </div>
    </div>
    <button class="btn-large waves-effect waves-light red" @click="addNewTask()">
      SALVAR
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  emits:['newTaskPush'],
  data() {
    return{
      newTask:{
        title:'',
        project:'',
        dueTo:'',
        }
    }
  },
  methods:{
    addNewTask(){
      this.$emit('newTaskPush', this.newTask)
    }
  },
}
</script>
