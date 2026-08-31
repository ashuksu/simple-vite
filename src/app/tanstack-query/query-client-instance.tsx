import {MutationCache, QueryClient} from "@tanstack/react-query";
import {mutationGlobalErrorHandler} from "../../shared/ui/util/query-error-handler-for-rhf-factory.ts";

export type MutationMeta = {
    /**
     * If 'off' — skip the global error handler,
     * if 'on' (or field is missing) — call it.
     */
    globalErrorHandler?: 'on' | 'off'
}
declare module '@tanstack/react-query' {
    interface Register {
        /**
         * Type for the `meta` field in useMutation(...)
         */
        mutationMeta: MutationMeta
    }
}
export const queryClient = new QueryClient({
    mutationCache: new MutationCache({
        onError: mutationGlobalErrorHandler
    }),
    defaultOptions: {
        queries: {
            staleTime: 60 * 60 * 1000, // 1 hour
            refetchOnMount: true,
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
            gcTime: 5 * 60 * 1000, // 5 minutes
        }
    }
})