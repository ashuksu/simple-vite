import {useQuery} from '@tanstack/react-query'
import {client} from '../../../shared/api/client.ts'
import {authKeys} from "../../../shared/api/keys-factories/auth-keys-factory.ts";

export const useMeQuery = () => useQuery({
    queryKey: authKeys.me(),
    queryFn: async () => {
        const {data} = await client.GET('/auth/me')
        return data ?? null
    },
    retry: false,
})