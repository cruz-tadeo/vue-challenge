import { Ref, ref } from "vue";
import { UsableAPI } from "../interfaces";
import { ApiRequest } from "../types";



export default function useApi<T>(
    url: RequestInfo,
    options?: RequestInit
): UsableAPI<T> {

    const response: Ref<T | undefined> = ref();

    const request: ApiRequest = async () => {
        const res = await fetch(url, options);
        const data = await res.json();
        response.value = data;
    };

    return { response, request }
}