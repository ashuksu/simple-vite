import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {client} from "../shared/api/client.ts";
import {Pagination} from "../widgets/pagination/ui/pagination.tsx";
import {useState} from "react";

type Props = {
    userId?: string
}
export const Playlists = ({userId}: Props) => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const query = useQuery({
        queryKey: ['playlists', {page, search, userId}],
        queryFn: async ({signal}) => {
            const {data, error} = await client.GET('/playlists', {
                params: {
                    query: {
                        pageNumber: page,
                        search,
                        userId
                    }
                },
                signal //request interruption
            });

            if (error) {
                throw error;
                // console.warn('Error playlists: ', error);
                // return null;
            }

            return data;
        },
        placeholderData: keepPreviousData
    });

    if (query.isPending) return <div>Loading...</div>;
    if (query.isError || !query.data) return <div>Error: {JSON.stringify(query.error?.message)}</div>;

    return (
        <>
            <div>
                <input
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded px-2 py-1"
                />
            </div>
            <Pagination
                pagesCount={query.data.meta.pagesCount}
                current={page} // query.data.meta.page
                changePageNumber={setPage}
                isFetching={query.isFetching}
            />
            <ul className="pt-3">
                {query.data.data.map((playlist) => (
                    <li key={playlist.id}>{playlist.attributes.title}</li>
                ))}
            </ul>
        </>
    )
}