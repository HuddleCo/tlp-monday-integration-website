import React, { useState } from "react";
import "./Input.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { firestore } from "./firebase";
import { addDoc, collection } from "@firebase/firestore";

function Input() {
  const [username, setUsername] = useState("");
  const [apikey, setApikey] = useState("");
  const [boardid, setBoardid] = useState("");
  const ref = collection(firestore, "clients");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (username !== "" && apikey !== "" && boardid !== "") {
      let data = {
        username: username,
        api_key: apikey,
        board_ID: boardid,
      };

      try {
        addDoc(ref, data);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Container
      className="mt-2" // className="d-flex flex-column justify-content-center"
      style={{ backgroundColor: "#b8d4b4", height: "100vh", width: "100vw" }}
    >
      <Card className="h-40 w-50" style={{ margin: "auto" }}>
        <Card.Header>CRM credantial</Card.Header>
        <Card.Body>
          <Form
            className="h-50 w-40"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <InputGroup hasValidation size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Username
              </InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please write a username.
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup hasValidation size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                API Key
              </InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={apikey}
                required
                onChange={(e) => setApikey(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please write an API Key.
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup hasValidation size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Board ID
              </InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={boardid}
                required
                onChange={(e) => setBoardid(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please write a Board ID.
              </Form.Control.Feedback>
            </InputGroup>
            <Button
              className="Input__Button"
              onClick={handleSubmit}
              type="submit"
            >
              Connect
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Input;
