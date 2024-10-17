<template>
<CallEvent 
          @nameCreated="handleNameCreated" 
          @nameUpdated="handleNameUpdated" 
          @nameDeleted="handleNameDeleted"
        />
</template>
<script setup>
import CallEvent from './CallEvent.vue';

// Event handlers for CallEvent
const handleNameCreated = (newName) => {
  console.log('Name created:', newName);
};

const handleNameUpdated = (updatedName) => {
  console.log('Name updated:', updatedName);
};

const handleNameDeleted = (deletedName) => {
  console.log('Name deleted:', deletedName);
};

</script>