import {useQuery} from '@tanstack/react-query'
import {client} from '../../../shared/api/client.ts'

export const useMeQuery = () =>
    useQuery({
        queryKey: ['auth', 'me'],
        queryFn: async () => {
            const {data} = await client.GET('/auth/me')
            return data ?? null
        },
        retry: false
    })