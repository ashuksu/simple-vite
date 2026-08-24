import {client} from "../../shared/api/client.ts";
import {useQuery} from "@tanstack/react-query";

export function AboutPage() {
    return (
        <div className="container">
            Hello from About!
            <hr/><br/>
            <Playlists/>
        </div>
    )
}

const Playlists = () => {
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