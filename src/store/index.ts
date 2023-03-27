import {defineStore} from 'pinia'
import { Post, User,CommentPost } from "../interfaces";
import { Ref, computed, ref } from 'vue';
import {getPosts as obtenerPosts,getPost as obtenerPost,getPostComments as obtenerComentarios} from '../composables/posts';
import {getUser,getUsers} from '../composables/users';

export const usePostStore = defineStore('posts',()=>{
    const posts:Ref<Post[] | undefined> = ref();
    const post:Ref<Post | undefined> = ref(); 
    const commentsPost:Ref<CommentPost[] | undefined> = ref();
    async function getPosts(){
        try {
          const {posts:data} = await obtenerPosts();
          posts.value = data.value;
        } catch (error) {
            console.log(error);
        }
    }

    async function getPost(id:number){
        try {
          const {post:data} = await obtenerPost(id);
          post.value = data.value;
        } catch (error) {
            console.log(error);
        }
    }
    async function getPostComments(id:number){
        try {
            const {comments:data} = await obtenerComentarios(id);
            commentsPost.value = data.value;
        } catch (error) {
            
        }
    }

    return {posts,post,commentsPost,getPosts,getPost,getPostComments}
})


export const UseUserStore = defineStore('users',()=>{
    const users:Ref<User[] | undefined> = ref();
    const user:Ref<User | undefined> = ref();

    async function getUsuario(id:number){
        try {
            const {user:data} = await getUser(id);
            user.value = data.value;
            return user.value;
        } catch (error) {
            console.log(error);
        }
    }

    async function getUsuarios(){
        try {
            const {users:data} = await getUsers();
            users.value = data.value;
        } catch (error) {
            console.log(error)
        }
    }

    return{getUsuario,users,user,getUsuarios}
})


export const useStoreCommon = defineStore('general',()=>{
    const loader:Ref<boolean> = ref(true);

    function hideLoader(){
        loader.value = false;
    }

    function showLoader(){
        loader.value = true;
    }

    return{loader,hideLoader,showLoader}
});