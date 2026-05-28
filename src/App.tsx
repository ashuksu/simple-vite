import './App.css'
import {useEffect, useState} from "react";

interface User {
    id: number;
    name: string;
}

function App() {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json: User[]) => {
                setData(json);
                setLoading(false);
            })
            .catch((error: unknown) => {
                console.error('Error: ', error);
                setLoading(false);
            });
    }, []);

    return (
        <main className="py-10 px-4">
            <div
                className="flex flex-col items-center justify-center max-w-100 bg-gray-200 rounded-lg p-6 text-gray-700 text-lg">
                {loading ? (
                    <div>Loading...</div>
                ) : data.length === 0 ? (
                    <div>No Users</div>
                ) : (
                    data.map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))
                )}
            </div>
        </main>
    )
}

export default App
