import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const Homepage: FC = () => {
  return (
    <>
      <h1 className="mt-5">Samples</h1>
      <ListGroup as="ul">
        <ListGroup.Item as="li">
          <Link className="nav-link active" aria-current="page" to="/samples/data-table">
            Data Table
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Homepage;
