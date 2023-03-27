<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { Post, User } from "../../interfaces";
import { usePostStore } from "../../store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const props = defineProps<{
  item: Post | undefined;
  user: User | undefined;
  tipo:string | undefined;
}>();


const showDescription = ref(false);
const router = useRouter();

watch(
  () => props.item,
  async (newValue, oldValue) => {

    if (newValue?.id === oldValue?.id && showDescription.value && homeView) {
      showDescription.value = false;
    } else {
      showDescription.value = true;
    }
  }
);

onMounted(() => {
  console.log(props.tipo,'prototipo')
  if(props.tipo !== 'home'){
    showDescription.value = true;
  }
})

const homeView = computed(()=>{
  return props.tipo === 'home'
})
const sizeText  = computed(()=>{
  return props.tipo !== 'home' ? 'text-lg' : 'text-xs'
})


watch(()=>props.tipo,async(newValue,oldValue)=>{
  console.log(newValue,1)
  console.log(oldValue,2)
  if(newValue !== 'home'){
    showDescription.value = true;
  }
})
</script>

<template>
      <div v-if="showDescription" :class="homeView ?  '' : 'text-black p-4'">
        <span>
          <p :class="`font-semibold ${sizeText}`">Titulo: <span :class="`font-normal ${sizeText}`">{{ item?.title }}</span></p>
        </span>
        <span>
          <p :class="`font-semibold ${sizeText}`">Autor: <span :class="`font-normal ${sizeText}`">{{ user?.name }}</span></p>
        </span>
        <span>
          <p :class="`font-semibold ${sizeText}`" v-if="homeView" v-truncate>Body: <span :class="`font-normal ${sizeText}`">{{ item?.body }}</span></p>
          <p :class="`font-semibold ${sizeText}`" v-else >Body: <span :class="`font-normal ${sizeText}`">{{ item?.body }}</span></p>
        </span> 
        <slot></slot>
      </div>
</template>
