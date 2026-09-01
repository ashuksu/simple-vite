import {useQuery} from '@tanstack/react-query'
import {authKeys, client} from "../../../shared/api";

export const useMeQuery = () => useQuery({
    queryKey: authKeys.me(),
    queryFn: async () => {
        const {data} = await client.GET('/auth/me')
        return data ?? null
    },
    retry: false,
})