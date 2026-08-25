import {useQuery} from "@tanstack/react-query";
import {client} from "../shared/api/client.ts";
import {cx} from "tailwind-variants";

export const Playlists = () => {
    const query = useQuery({
        queryKey: ['playlists'],
        queryFn: async () => {
            const response = await client.GET('/playlists' as unknown as '/playlists')

            if (response.error) {
                throw (response as unknown as { error: Error }).error;
            }

            return response.data
        }
    })

    if (query.isPending) {
        return <div>Loading...</div>
    }

    return (
        <>
            <i className={cx(
                'flex w-3 h-3 rounded-full transition-color duration-2000',
                query.isFetching && 'bg-blue-400'
            )}/>
            <ul className="pt-3">
                {query.data?.data.map((playlist) => {
                    return <li key={playlist.id}>{playlist.attributes.title}</li>
                })}
            </ul>
        </>
    )
}