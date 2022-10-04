import ClientContext from "../context/ClientContext";
import ClientUserContext from "../context/ClientUserContext"

export default function Cliente() {
    return(
        <div>
        <ClientContext />
        <ClientUserContext/>
        </div>
    )
}