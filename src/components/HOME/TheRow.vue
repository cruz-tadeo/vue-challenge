<script lang="ts" setup>
import { onMounted, ref, Ref } from "vue";
import ThePostItem from "../COMMON/ThePostItem.vue";
import { UseUserStore } from "../../store/index";
import { storeToRefs } from "pinia";
import { Post, User } from "../../interfaces";
import { useRouter } from "vue-router";
const props = defineProps<{
  title: string;
  userId: number;
  id: number;
  body: string;
}>();
const title = ref(props.title);
const userId = ref(props.userId);
const id = ref(props.id);
const body = ref(props.body);

const store = UseUserStore();
// const { users, user } = storeToRefs(store);
const { getUsuario } = store;
const postActive: Ref<Post | undefined> = ref();
const router = useRouter();
const UserActive: Ref<User | undefined> = ref();
const showDescription = () => {
  console.log("Mostrando");
  postActive.value = undefined;
  postActive.value = {
    id: id.value,
    body: body.value,
    title: title.value,
    userId: userId.value,
  };
};
onMounted(async () => {
 UserActive.value = await getUsuario(userId.value);
});
</script>

<template>
  <div class="w-auto h-auto text-left text-black p-2">
    <div
      class="mx-auto flex flex-col justify-center items-center bg-gray-400 p-4 pb-1 rounded-xl rounded-b-none"
      @click="showDescription"
    >
      <a v-truncate>{{ title }}</a>
      <span>{{ UserActive?.name }}</span>
    </div>
    <div
      class="mx-auto flex flex-col justify-center items-center bg-gray-400 p-4 pb-1 rounded-xl rounded-t-none"
    >
      <!--  -->
      <div class="w-52 h-auto">
        <Transition
          enter-active-class="animate__animated animate__fadeInDown"
          leave-active-class="animate__animated animate__fadeOutUp"
        >
          <the-post-item tipo="home" :user="UserActive" :item="postActive">
            <span class="flex flex-row justify-around items-center p-3">
              <button
                class="p-2 rounded-xl bg-[#001529] text-white"
                @click="router.push(`/details/autor/${postActive?.userId}`)"
              >
                Ver autor
              </button>
              <button
                class="p-2 rounded-xl bg-[#001529] text-white"
                @click="router.push(`/details/post/${postActive?.id}`)"
              >
                Ver detalle
              </button>
            </span>
          </the-post-item>
        </Transition>
      </div>
    </div>
  </div>
</template>
