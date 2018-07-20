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
          <v-btn icon :to="{name: 'posts'}">
            <v-icon color="green">arrow_back</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import API from '@/lib/api'

export default {
  data: () => ({
    post: {}
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
    }
  }
}
</script>
