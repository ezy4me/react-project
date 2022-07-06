import React from 'react';
import './App.css';
import { Button, Alert, Container, Card, Navbar, NavLink, Nav, Image } from 'react-bootstrap';
const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer/>
    </div>

  );
}

const Header = () => {
  return (
    <div className="container">
      <Navbar className='bg-light sticky-top row justify-content-md-center'>
        <Container>
          <Navbar.Brand href='#'>React-project</Navbar.Brand>
          <Nav className='me'>
            <NavLink href='#'>Lorem</NavLink>
            <NavLink href='#'>Lorem</NavLink>
            <NavLink href='#'>Lorem</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <div className='text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 400 }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3 '>Lerning</h1>
              <h4 className='mb-3'>React+Bootstrap</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to actionfsdfsd
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Content = () => {
  return (
    <Container className='md-5 justify-content-md-center'>
      <div className='p-5'>
        <ul>
          <li>
            Eu non ullamco officia dolor. Est sint esse aliqua dolor minim dolore adipisicing nulla elit labore ut. Nisi ea dolore ipsum nisi aliqua duis ex dolore exercitation nostrud enim officia nulla aliqua. Magna consectetur sint consequat aliqua fugiat ea in dolor enim veniam occaecat. Ea tempor sint occaecat enim.
          </li>
          <li>
            Est elit reprehenderit velit deserunt laborum nostrud deserunt esse ex veniam nostrud nulla. Pariatur deserunt do consectetur irure irure sint occaecat exercitation consectetur non velit dolore consectetur. Qui anim est quis fugiat magna dolore in do fugiat ex culpa. Et ad quis veniam qui nulla magna eiusmod et consectetur aute adipisicing consectetur ad incididunt. Ea officia occaecat aliqua exercitation labore qui ullamco. Nostrud duis exercitation esse irure ad cillum. Eu et do mollit cupidatat in labore enim enim labore amet.
          </li>
          <li>
            Consequat aliqua exercitation velit nulla dolore ullamco duis magna ut elit commodo nulla ipsum deserunt. Ullamco magna laboris velit dolor tempor nostrud magna fugiat elit eu anim aute veniam in. Magna officia id consequat velit aliqua aliqua minim laboris enim. Ad do do irure amet cupidatat quis labore ullamco. Pariatur incididunt quis mollit est consectetur dolor sunt. Consequat velit esse veniam voluptate. Tempor in pariatur cupidatat elit aute occaecat nulla.

            Aliquip et cillum et incididunt enim. Velit officia minim sunt Lorem qui ex aliquip occaecat dolore ex ea sit pariatur sit. Ut mollit sunt eu est ut deserunt. Ea excepteur officia deserunt proident sint duis laborum minim nisi sint dolore consectetur et aliqua. Magna consectetur ex deserunt et quis aliqua aliqua pariatur. Et id esse irure anim. Laborum nisi ullamco veniam commodo amet mollit quis sint cillum duis quis cillum elit.

            Officia culpa mollit aute anim ullamco aliquip laboris. Ullamco culpa magna esse reprehenderit proident consectetur duis reprehenderit ullamco aute laboris Lorem. Tempor magna fugiat ea elit nisi sunt veniam Lorem. Adipisicing ullamco incididunt consequat esse in aliquip dolore laboris consectetur.

            Ipsum elit labore cupidatat nisi eiusmod excepteur aliqua eiusmod eiusmod occaecat ut. Non ad consequat fugiat incididunt exercitation duis magna velit eiusmod do ea aute sint culpa. Amet sit deserunt nulla nostrud eiusmod enim mollit anim in dolore tempor cupidatat Lorem sint. Irure enim ipsum do dolore esse. Nulla ea irure est aute do.

            Officia anim voluptate mollit laboris et enim do reprehenderit dolore deserunt. Consectetur do elit tempor in tempor id officia ut magna. Aliquip deserunt id reprehenderit aliquip id veniam commodo consequat quis. Laboris incididunt ipsum officia commodo nulla excepteur esse veniam magna sint in. Ipsum qui laboris consequat nulla id qui id consectetur ipsum tempor exercitation ex. Ex sunt ex sunt amet quis id et quis sunt proident laboris veniam anim. Minim irure ex quis aliqua nisi laboris nulla.
          </li>
          <li>
            Sint ea excepteur nisi irure amet proident ad duis dolor. Pariatur ad fugiat laboris elit sunt exercitation sit est ex enim. Ea deserunt non eiusmod elit. Lorem ut exercitation adipisicing ullamco in occaecat fugiat consectetur quis consequat eiusmod officia sit. Nulla ut laboris commodo non aliqua aliquip laborum ut consectetur in.
          </li>
        </ul>
      </div>
      <div className='row justify-content-md-center'>
      <Card className='m-1 p-5' style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>GEEKSFORGEEKS</Card.Title>
          <Card.Subtitle className="mb-5 text-success">
            One Stop For all CS subjects
          </Card.Subtitle>
          <Card.Text className='text-primary'>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
          </Card.Text>
          <Card.Link href="#"> For Students</Card.Link>
        </Card.Body>
      </Card>
      <Card className='m-1 p-5' style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>GEEKSFORGEEKS</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            One Stop For all CS subjects
          </Card.Subtitle>
          <Card.Text>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
          </Card.Text>
          <Card.Link href="#"> For Students</Card.Link>
        </Card.Body>
      </Card>
      </div>
      
    </Container>
  );
}
const Footer = () => {
  return (
    <Container bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='#'>
          asdfghjkl;sdfghjkl;
        </a>
      </div>
    </Container>
  );

}
export default App;
