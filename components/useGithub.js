import { useState, useEffect } from "react";
import axios from "axios"
function useGithubApis() {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const fetchGithubUser = async () => {
        try {
            setLoading(true)
            let res = await axios.get("http://api.github.com/users/usamarazzaq4300")
            console.log(res)
        }
        catch {
            console.log("error")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchGithubUser()
    }, [])
    return [user,]
}
export default useGithubApis;