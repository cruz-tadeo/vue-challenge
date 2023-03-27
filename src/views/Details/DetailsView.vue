<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { UseUserStore, usePostStore } from "../../store";
import { Ref, onMounted, ref } from "vue";
import { Post } from "../../interfaces";
import { useRoute } from "vue-router";
import ThePostItem from "../../components/COMMON/ThePostItem.vue";
import TheUserDetails from "../../components/DETAILS/TheUserDetails.vue";
//Store users
const userStore = UseUserStore();
const { user } = storeToRefs(userStore);
const { getUsuario } = userStore;
//Store Posts
const postStore = usePostStore();
const { post, commentsPost } = storeToRefs(postStore);
const { getPost, getPostComments } = postStore;

const title: Ref<string> = ref("");
const route = useRoute();
const { tipo, id } = route.params;
const showUser: Ref<boolean> = ref(false);
// const post: Ref<Post | null> = ref(null);
// const postActive: Ref<Post | null> = ref(null);
onMounted(async () => {
  if (tipo == "autor") {
    await getUsuario(+id);
    console.log(user);
    title.value = `Autor: ${user.value?.name}`;
    showUser.value = true;
  } else {
    await getPost(+id);
    const userid = post.value ? post.value.userId : 0;
    await getUsuario(userid);
    await getPostComments(+id);
    title.value = `Autor: ${user.value?.name} - Post: ${post.value?.title}`;
    showUser.value = false;
  }
});
</script>

<template>
  <div class="container w-full mx-auto p-10">
    <h1 class="text-center text-2xl text-black">Details</h1>
    <div class="bg-white mx-auto font-bold rounded-xl my-10 p-4">
      <h2 class="text-black text-2xl">{{ title }}</h2>
      <the-post-item tipo="details" v-if="!showUser" :user="user" :item="post">
        <div class="mx-auto w-[90%] bg-gray-200 rounded-xl p-3">
          <h2 class="font-bold text-2xl">Comments</h2>
          <ul v-for="(item, index) in commentsPost" :key="index">
            <li class="flex flex-col m-2">
              <span>Autor: {{ item.email }}</span>
              <span>{{ item.body }}</span>
            </li>
          </ul>
        </div>
      </the-post-item>
      <the-user-details v-else :user="user"></the-user-details>
    </div>
  </div>
</template>
