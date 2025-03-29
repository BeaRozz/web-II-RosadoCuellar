export default function Verification() {
    const doesntHaveToken = localStorage.getItem("token") === undefined || localStorage.getItem("token") === null
    //const navigate = useNavigate();

    console.log("token:", localStorage.getItem("token"));

    if(doesntHaveToken)
    {
        window.location.href = "/login"
        // console.log("doesn't have token")
        // navigate("/login");
        return
    }
}