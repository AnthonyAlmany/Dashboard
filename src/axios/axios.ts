import axios, { AxiosInstance, AxiosRequestHeaders} from 'axios'

export type axiosConfig = {
    baseURL: string,
    headers?: AxiosRequestHeaders
}

export function customAxios(options: axiosConfig):AxiosInstance {
    const axiosInstance :AxiosInstance= axios.create({
        baseURL: options.baseURL,
        headers: options.headers
    })
    return axiosInstance
}