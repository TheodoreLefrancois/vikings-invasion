import { useState } from "react";
import { Container, Progress } from "reactstrap";

export default function ProgressHack() {
    const [progression, setProgression] = useState();
    for (let i = 0; i < 4; i++) {
        setTimeout(() => setProgression(i * 25));
    }
    return (
        <Container className="text-center m-auto">
            <h1>Hacking city data</h1>

            <Progress striped bar color="danger" value={progression} />
        </Container>
    );
}
