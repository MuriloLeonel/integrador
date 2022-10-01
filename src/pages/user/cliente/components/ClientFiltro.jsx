import { Form, Row, Col } from "react-bootstrap";
import {useContext} from 'react';
import {Context} from "../context/ClientContext";

export default function ClienteFiltro() {
    const{ filter, setFilter} = useContext(Context);
        return(
            <div className="ClienteFiltro bg-light p-3 mb-3">
                <Form as={Row}>
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Pesquisar" value={filter} onChange={(event) => setFilter(event.target.value)}/>
                    </Form.Group>
                </Form>

            </div>

        )

}