import { useEffect, useState } from "react";
import { customAxios } from "../../src/axios/axios";
import {AxiosResponse } from 'axios'

export function useFetch(baseURL: string) {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(!baseURL) return
        async function fetchData() {
            const response :AxiosResponse = await customAxios({baseURL}).get(baseURL)
            setData(response)
            setIsLoading(false)
        }
        setIsLoading(true)
        fetchData()
    }, [baseURL])

    return {data, isLoading}
}