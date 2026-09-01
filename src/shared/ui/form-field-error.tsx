export const FormFieldError = ({message}: { message?: string }) => {
    if (!message) return null;

    return (
        <p className="text-red-500 mt-1 wrap-break-word">
            {message}
        </p>
    )
}