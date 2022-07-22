import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Acitivity() {
    return (
      <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Activity 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>Activity 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>Activity 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}