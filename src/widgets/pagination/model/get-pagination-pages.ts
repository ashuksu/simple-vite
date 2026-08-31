/**
 * Generates an array of pages for displaying pagination, taking into account ellipses
 */
export const getPaginationPages = (
    current: number,
    pagesCount: number,
    siblingCount: number
): (number | '...')[] => {
    if (pagesCount <= 1) return []

    const pages: (number | '...')[] = []

    // Range bounds around the current page
    const leftSibling = Math.max(2, current - siblingCount)
    const rightSibling = Math.min(pagesCount - 1, current + siblingCount)

    // Always show the first page
    pages.push(1)

    // Left ellipses
    if (leftSibling > 2) {
        pages.push('...')
    }

    // Sibling pages around the current page
    for (let page = leftSibling; page <= rightSibling; page++) {
        pages.push(page)
    }

    // Ellipsis on the right
    if (rightSibling < pagesCount - 1) {
        pages.push('...')
    }

    // Always show the last page (if more than one)
    if (pagesCount > 1) {
        pages.push(pagesCount)
    }

    return pages
}
