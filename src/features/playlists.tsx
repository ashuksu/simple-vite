import {useQuery} from "@tanstack/react-query";
import {client} from "../shared/api/client.ts";

export const Playlists = () => {
    const query = useQuery({
        queryKey: ['playlists'],
        queryFn: () => client.GET('/playlists')
    })

    return (
        <ul>
            {query.data?.data?.data.map((playlist) => {
                return <li>{playlist.attributes.title}</li>
            })}
        </ul>
    )
}