/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





// eslint-disable-next-line no-unused-vars
export const Item = ({item}) => {
    


    return (

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.pictureUrl} />

      <Card.Body>
        <Card.Title>{item.tittle}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
       <Link to={`/item/${item.id}`}> <Button variant="primary">{item.price}</Button></Link>
      </Card.Body>
    </Card>
    )
}


