import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {client} from "../shared/api/client.ts";
import {Pagination} from "../widgets/pagination/ui/pagination.tsx";
import {useState} from "react";

export const Playlists = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    const query = useQuery({
        queryKey: ['playlists', {page, search}],
        queryFn: async ({signal}) => {
            const response = await client.GET('/playlists', {
                params: {
                    query: {
                        pageNumber: page,
                        search
                    }
                },
                signal //request interruption
            });

            if (response.error) {
                throw (response as unknown as { error: Error }).error;
            }

            return response.data
        },
        placeholderData: keepPreviousData
    })

    if (query.isPending) return <div>Loading...</div>
    if (query.isError) return <div>Error: {JSON.stringify(query.error.message)}</div>

    return (
        <>
            <div>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded px-2 py-1"/>
            </div>
            <Pagination
                pagesCount={query.data.meta.pagesCount}
                current={page} // query.data.meta.page
                changePageNumber={setPage}
                isFetching={query.isFetching}
            />
            <ul className="pt-3">
                {query.data.data.map((playlist) => {
                    return <li key={playlist.id}>{playlist.attributes.title}</li>
                })}
            </ul>
        </>
    )
}