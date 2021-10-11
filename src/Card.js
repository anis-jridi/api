import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = ({ post }) => {
  return (
    <div className="div">
      <Card className="input">
        <Card.Body>
          <Card.Title>{post.name}</Card.Title>
          <Card.Text>
            <div> Username: {post.username}</div>
            <div> Mail:{post.email} </div>
            <div> Address: {post.address.street}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
