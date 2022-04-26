export default function IsAdmin({ children }) {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("/api/current").then((resp) => {
            setUser(resp.data);
        });
    }, []);

    if (user.role === "admin") {
        return children;
    } else {
        return <div>Не администратор</div>;
    }
}
