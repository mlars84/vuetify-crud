<template>
  <v-form v-model="valid" ref="form">
    <v-text-field
      label="Title"
      v-model="title"
      :rules="titleRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Body"
      v-model="body"
      :rules="bodyRules"
      :counter="50"
      required
    ></v-text-field>
    <!-- <v-select
      label="Item"
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      required
    ></v-select> -->
    <v-checkbox
      label="Do you agree?"
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      required
    ></v-checkbox>

    <v-btn @click="submit" :class="{ red: !valid, green: valid }">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
    <v-alert
      v-model="status"
      dismissible
      type="success"
    >
      {{ status }}
    </v-alert>
  </v-form>
</template>

<script>
import API from '@/lib/api'

export default {
  data: () => ({
    title: '',
    body: '',
    valid: false,
    titleRules: [
      (v) => !!v || 'Title is required',
      (v) => v && v.length <= 10 || 'Title must be less than 10 characters'
    ],
    bodyRules: [
      (v) => !!v || 'Body is required',
      (v) => v && v.length <= 50 || 'Body must be less than 50 characters'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: true,
    post: {
      title: '',
      body: ''
    },
    status: ''
  }),
  methods: {
    submit () {
      this.$refs.form.validate()
      this.post.title = this.title
      this.post.body = this.body
      API
        .addPost(this.post)
        .then(response => {
          this.status = response.statusText
        })
        .catch(error => {
          console.log(error)
        })
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>


