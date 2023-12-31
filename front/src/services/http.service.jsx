// import { useNavigate } from "react-router-dom";

export async function call({ uri, method = "GET", body = undefined }) {

    // const navigate = useNavigate()

    return fetch(`http://localhost:3333/api/${uri}`, {
        headers: {
            "auth-token": localStorage.getItem("token"),
            "Content-Type": "application/json",
        },
        method,
        body: JSON.stringify(body),
    })
        .then(async (response) => {

            if (!response.ok || response.status === 401) {
                localStorage.removeItem("token");
                throw await response.json()
            }

            if (response.status === 204) {
                return response
            }

            return response.json();

        })
        .catch((error) => console.log(error));
}

export default {
    call
}