import { useEffect, useState } from "react";

export interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }


function FromServer(): JSX.Element {
    const [user, setUser] = useState<Users[]>([]);
    const [isLoading, setIsLoading] =useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonData: Users[] = await data.json();
            setUser(jsonData);
            setIsLoading(false);
            }
            catch(error) {
                console.error("Error finding data", error)
            }
        }
        fetchUsers()
    }, []);
    return (
        <div className="showData">
            {isLoading ? (
                <p>loading...</p>
            ): (
                <div>
                    <h1>USERS</h1>
                    <ul>
                        {user.map((use) => (
                            <li key = {use.id}>{use.id +" " + use.name}</li>
                        ))}
                    </ul>
       
                </div>
            )}
            <button onClick={() => setUser([])}>clear data</button>
        </div>

    )
}

export default FromServer