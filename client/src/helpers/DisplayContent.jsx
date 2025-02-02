import Loading from "../components/Loading";
import Error from "../components/Error";

function DisplayContent(loading, error, data) {
    if (!loading && !error) {
        return data;
    }
    else if (loading) {
        return <Loading />
    }
    else {
        return <Error error = {error}/>
    }
}

export default DisplayContent;