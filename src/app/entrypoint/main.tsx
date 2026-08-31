import ReactDOM from 'react-dom/client'
import {RouterProvider} from '@tanstack/react-router'
import {QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import {queryClient} from "../tanstack-query/query-client-instance.tsx";
import {router} from "../tanstack-router/router-instance.tsx";

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}