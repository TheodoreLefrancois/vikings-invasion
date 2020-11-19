import { useState } from "react";
import { Button, Collapse, Card, CardBody } from "reactstrap";

export default function Filtertools(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <Button
          color="primary"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          Toggle
        </Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </>
  );
}
