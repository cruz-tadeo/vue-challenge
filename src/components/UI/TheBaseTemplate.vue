<template >
    <slot name="header"></slot>
   <div class="flex-1 bg-[#F0F2F5]">
     <div class="relative flex min-h-screen xs:justify-center ">
     <slot name="aside"></slot>
     <!--content-->
     <slot name="contenido"></slot>
     </div>
   </div>
 
 </template>