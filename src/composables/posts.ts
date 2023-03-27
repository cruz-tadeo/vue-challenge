import { ref } from "vue";
import { APISettings } from "../helpers";
import { CommentPost, Post } from "../interfaces";
import { UsablePosts,UsablePost, UsablePostComments } from "../types";
import useApi from "./api";


export const getPosts = async (): UsablePosts => {
  const { response: posts, request } = useApi<Post[]>(
    `${APISettings.baseURL}posts`,
    {
      headers: APISettings.headers
    }
  );

  await request();

  return { posts };
  
}

export const getPost = async (id: number | string = ''): UsablePost => {
  const { response: post, request } = useApi<Post>(
    `${APISettings.baseURL}posts/${id}`,
    {
      headers: APISettings.headers
    }
  );

  await request();

  return { post };
  
}

export const getPostComments = async (id: number | string = ''): UsablePostComments => {
  const { response: comments, request } = useApi<CommentPost[]>(
    `${APISettings.baseURL}comments/?postId=${id}`,
    {
      headers: APISettings.headers
    }
  );

  await request();

  return { comments };
  
}