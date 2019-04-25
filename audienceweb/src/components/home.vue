<template>
    <div>
        <div>
            <b-list-group>
            <b-list-group-item disabled>My Audience</b-list-group-item>
            <b-list-group-item button v-for="person in people" :key="person.Key"><router-link :to="`/project/${person.Key}/overview`">{{ person.Name }}</router-link></b-list-group-item>
            </b-list-group>
        </div>

        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">Loading...</div>
        </section>
    </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'home',
  data () {
    return {
      people: [],
      loading: true,
      errored: false,
    }
  },
  mounted () {
    api.getAudience()
      .then(response => {
        this.people = response.audience
      })
      .catch(() => this.errored = true )
      .finally(() => this.loading = false )
  }  
}
</script>