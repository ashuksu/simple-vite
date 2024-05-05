import Title from "../elements/Title";

export default function Header() {
    return (
        <header className='header shrink-0 bg-gray-800'>
            <div className="container flex justify-center items-center py-3  text-white">
                <Title title='Header'/>
            </div>
        </header>
    )
}