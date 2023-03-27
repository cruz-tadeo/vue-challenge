<script lang="ts" setup>
import { Post, User } from "../../interfaces";
const props = defineProps<{
  user: User | undefined;
}>();
</script>
<template>
  <div class="text-black p-4">
    <span>
      <p :class="`font-semibold text-lg`">
        Nombre: <span :class="`font-normal text-lg`">{{ user?.name }}</span>
      </p>
    </span>
    <span>
      <p :class="`font-semibold text-lg`">
        telefono: <span :class="`font-normal text-lg`">{{ user?.phone }}</span>
      </p>
    </span>
    <span>
      <p :class="`font-semibold text-lg`">
        correo: <span :class="`font-normal text-lg`">{{ user?.email }}</span>
      </p>
    </span>
    <span>
      <p :class="`font-semibold text-lg`">
        dirección: <span :class="`font-normal text-lg`">{{ user?.address.street }}</span>
      </p>
    </span>
  </div>
</template>
