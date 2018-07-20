<template>
  <v-content>
    <v-layout row wrap>
    <v-flex xs4 v-for="(post, index) in posts" :key="index">
      <v-card class="mr-2">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ post.title }}</h3>
            <div>{{ post.body.substring(0, 10) }}...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            icon
            :to="{
              name: 'post',
              params: {
                id: post.id
              }
            }"
          >
            <v-icon color="green">link</v-icon>
          </v-btn>
          <v-btn icon @click="removePost(post.id)">
            <v-icon color="red">delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-content>
</template>

<script>
import API from '@/lib/api'

export default {
  data: () => ({
    posts: []
  }),
  mounted () {
    this.load()
  },
  methods: {
    load () {
      API
        .getPosts()
        .then(response => {
          this.posts = response
        })
        .catch(error => {
          console.log(error)
        })
    },
    removePost (id) {
      API
        .removePost(id)
        .then(response => {
          this.load()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
