import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const App = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div className="form">
        <Container>
          <form>
            <div>
              <label>Name</label>
              <br />
              <input
                className="input"
                placeholder="Name"
                type="text"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Age</label>
              <br />

              <input className="input" placeholder="Age" type="number" />
            </div>
            <div>
              <label>Password</label>
              <br />

              <input className="input" placeholder="Password" type="password" />
            </div>
            <div>
              <label>Confirm Password</label>
              <br />

              <input
                className="input"
                placeholder="Confirm Password"
                type="password"
              />
            </div>

            <Button variant="primary" className="submit">
              Submit
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default App;
