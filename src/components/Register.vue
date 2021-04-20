<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
    
        <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        >
        <b-form-input
        id="input-1"
        v-model="form.name"
        type="text"
        placeholder="Enter Name"
        required
        ></b-form-input>
        </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          placeholder="Password"
          autocomplete="on"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Confirm Password:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.conpassword"
          type="password"
          placeholder="Confirm Password"
          autocomplete="on"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Register</b-button>
      <b-button type="reset" variant="warning" href="/">Back</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import Axios from 'axios'
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        console.log('submit');
        Axios.post('http://127.0.0.1:8000/users', {
            name : this.form.name,
            email : this.form.email,
            password : this.form.password
        }).then(resp => {
            console.log(resp.data);
            alert('register success')
            this.$router.push('/');
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

                alert(error.response.data.error)
            }
        });      
        event.preventDefault()
      }
    }
  }
</script>