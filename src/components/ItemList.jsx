/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Container } from "react-bootstrap";
import { Item } from "./Item";
export const ItemList = ({items}) => {

    return (
        <Container className="d-flex px-2">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </Container>



    )
};