<template>
<div class="section task-add">
    <div class="row">
      <div class="input-field col s12">
        <input
          :value="title"
          placeholder="Entre com uma tarefa"
          id="title"
          type="text"
          class="validate"
        />
        <label for="title">Tarefa</label>
      </div>
      <div class="input-field col s12">
        <label for="project">Pick a Project</label>
        <select id="project" :value="project">
          <option value="Estudos">Estudos</option>
          <option value="Financeiro">Financeiro</option>
          <option value="Trabalho">Trabalho</option>
        </select>
      </div>
      <div class="input-field col s6">
        <input :value="dueTo" type="text" class="datepicker" />
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
  props:{ 
    title:String,
    project:String,
    dueTo:String,
  },
  emits:['newTask'],
  data: () =>{
    return{
      newTask:{
        title:'Agora',
        project:'Estudo',
        dueTo:'Adicionar',
      }
    }
  },
  methods:{
    addNewTask(){
      this.$emit('newTask', this.newTask)
    }
  },
}
</script>


<style scoped>

</style>
