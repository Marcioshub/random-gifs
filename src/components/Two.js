import React, { useEffect, useState } from "react";
import useGif from "./useGif";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Two() {
  const [tag, setTag] = useState("cats");
  const { gif, fetchGif } = useGif(tag);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <Card
      style={{
        width: "20rem",
        padding: 10,
        margin: 5,
        display: "inline-block",
      }}
    >
      <Card.Img variant="top" width={200} height={200} src={gif} alt="random" />
      <Card.Body>
        <Card.Title>Random gifs</Card.Title>
        <Card.Text>
          <Form.Control
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Enter tag"
          />
        </Card.Text>
        <Button
          variant="success"
          style={{ width: "100%", marginBottom: 5 }}
          onClick={() => fetchGif(tag)}
        >
          Refresh
        </Button>
        <CopyToClipboard text={gif} onCopy={() => setCopied(true)}>
          <Button variant="info" style={{ width: "100%", marginBottom: 5 }}>
            Copy gif
          </Button>
        </CopyToClipboard>
        {copied ? (
          <Alert variant="primary" className="mt-2">
            Copied!
          </Alert>
        ) : null}
      </Card.Body>
    </Card>
  );
}
