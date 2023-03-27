<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { usePostStore, useStoreCommon } from "../../store/index";
import { onMounted } from "vue";
import ThePostList from "../../components/HOME/ThePostList.vue";
import TheRow from "../../components/HOME/TheRow.vue";
import TheBaseLoader from "../../components/UI/TheBaseLoader.vue";
const storePost = usePostStore();
const { posts } = storeToRefs(storePost);
const { getPosts } = storePost;
const storeGeneral = useStoreCommon();
const { loader } = storeToRefs(storeGeneral);
const { hideLoader, showLoader } = storeGeneral;

onMounted(async () => {
  await getPosts();
  setTimeout(() => {
    if (posts.value?.length) {
      hideLoader();
    }
  }, 1000);
});
</script>

<template>
  <div class="container w-full mx-auto p-10">
    <h1 class="text-center text-2xl">Posts</h1>
    <the-base-loader v-if="loader"></the-base-loader>
    <the-post-list v-else>
      <the-row
        v-for="{ id, title, userId, body } in posts"
        :key="id"
        :title="title"
        :userId="userId"
        :id="id"
        :body="body"
      ></the-row>
    </the-post-list>
  </div>
</template>
