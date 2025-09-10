<script setup lang="js">
import { ref } from 'vue';
const firstName = ref('');
const lastName = ref('');
const errorMessage = ref('');

const emit = defineEmits(['developer-registered', 'registration-deferred']);

function submitRegistrationRequest(){
  let submittedFirstName = firstName.value.toString().trim();
  let submittedLastName = lastName.value.toString().trim();
  if (submittedFirstName || submittedLastName){
    console.log("Registering developer");
    emit('developer-registered', {firstName: submittedFirstName, lastName: submittedLastName});
    clearFields();
    errorMessage.value = '';
  } else {
    console.log("Cannot register: Both fields are required");
    errorMessage.value = "Please provide at least first name and lastname.";
  }
}

function deferRegistration(){
  console.log("Defering registration");
  emit('registration-deferred', { firstName: '', lastName: ""});
  errorMessage.value = '';
}

function clearFields(){
  firstName.value = '';
  lastName.value = '';
  errorMessage.value = '';
}

</script>

<template>
  <!-- Developer Registration Form -->
  <div>
    <h2>New Developer</h2>
    <div>
      <form v-on:submit.prevent="submitRegistrationRequest">
        <div class="field">
          <label for="firstName">FirstName</label>
          <input id="firstName" v-model="firstName" type="text" placeholder="First Name"/>
        </div>
        <div class="field">
          <label for="lastName">LastName</label>
          <input id="lastName" v-model="lastName" type="text" placeholder="Last Name"/>
        </div>
        <div class="action">
          <button type="submit">Register</button>
          <button type="button" v-on:click="deferRegistration">Later</button>
          <button type="button" v-on:click="clearFields">Clear</button>
        </div>
      </form>
      <p v-if="errorMessage" role="alert">{{ errorMessage }}</p>
    </div>
  </div>

</template>

<style scoped>

  button {
    margin-right: 10px;
    padding: 8px 16px;
    cursor:pointer;
  }

  .error{
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }

  .field{
    margin-bottom: 10px;
  }

  .action {
    margin-bottom: 10px;
  }

</style>