<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="mr-2">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ post.title }}</h3>
            <div>{{ post.body }}...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="updatePost()">
            <v-icon color="yellow">edit</v-icon>
          </v-btn>
          <v-btn icon :to="{name: 'posts'}">
            <v-icon color="green">arrow_back</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    
    <v-dialog
      v-model="dialog"
      max-width="1000"
    >
      <v-form ref="form">
        <v-text-field
          label="Title"
          v-model="post.title"
        ></v-text-field>
        <v-text-field
          label="Body"
          v-model="post.body"
        ></v-text-field>

        <v-btn @click="submit()">submit</v-btn>
      </v-form>
    </v-dialog>
    <v-alert
      v-model="status"
      dismissible
      type="success"
    >
      {{ status }}
    </v-alert>
  </v-layout>
</template>

<script>
import API from '@/lib/api'

export default {
  data: () => ({
    post: {},
    dialog: false,
    status: ''
  }),
  mounted () {
    let id = this.$route.params.id
    this.getPostByID({id})
  },
  methods: {
    getPostByID (id) {
      API
        .getPostByID(id)
        .then(response => {
          console.log(response)
          this.post = response
        })
        .catch(error => {
          console.log(error)
        })
    },
    updatePost () {
      this.dialog = !this.dialog
    },
    submit () {
      console.log(this.post)
    }
  }
}
</script>
