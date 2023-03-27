import { Ref } from "vue";
import { CommentPost, Post, User } from "../interfaces";

export type ApiRequest = () => Promise<void>;

export type UsablePosts = Promise<{ posts: Ref<Post[] | undefined> }>;
export type UsablePost = Promise<{ post: Ref<Post | undefined> }>;

export type UsableUsers = Promise<{ users: Ref<User[] | undefined> }>;

export type UsableUser = Promise<{ user: Ref< User | undefined> }>;

export type UsablePostComments = Promise<{ comments: Ref<CommentPost[] | undefined> }>;