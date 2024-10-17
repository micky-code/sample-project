<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
      <!-- Search Input -->
      <div class="mb-4">
        <input 
          v-model="prefix" 
          placeholder="Search Name" 
          class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <!-- Select Dropdown -->
      <select 
        size="5" 
        v-model="selected" 
        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        <option v-for="name in filteredNames" :key="name">{{ name }}</option>
      </select>

      <!-- Gender and Name Inputs -->
      <div class="space-y-2 mb-4">
        <label class="block">
          First Name:
          <input 
            v-model="first" 
            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </label>
        <label class="block">
          Last Name:
          <input 
            v-model="last" 
            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </label>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-between space-x-4">
        <button 
          @click="create" 
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create
        </button>
        <button 
          @click="update" 
          class="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Update
        </button>
        <button 
          @click="del" 
          class="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, defineEmits } from 'vue'

const emit = defineEmits(['nameCreated', 'nameUpdated', 'nameDeleted'])

const names = reactive(['Eric, Chii', 'Da, Da', 'Dara, Steav'])
const selected = ref('') // for select names
const prefix = ref('') // for search 
const first = ref('')
const last = ref('')

const filteredNames = computed(() =>
  names.filter((n) =>
    n.toLowerCase().startsWith(prefix.value.toLowerCase())
  )
)

watch(selected, (name) => {
  [first.value, last.value] = name.split(' ')
})

function create() {
  if (hasValidInput()) {
    const fullName = `${first.value}, ${last.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      emit('nameCreated', fullName) // Emit event
      first.value = last.value = ''
    }
  }
}

function update() {
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${first.value}, ${last.value}`
    emit('nameUpdated', selected.value) // Emit event
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    emit('nameDeleted', selected.value) // Emit event
    selected.value = first.value = last.value = ''
  }
}

function hasValidInput() {
  return first.value.trim() && last.value.trim()
}
</script>

<style>
/* Custom styles can go here if needed */
</style>