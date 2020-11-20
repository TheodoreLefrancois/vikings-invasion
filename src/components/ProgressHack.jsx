import { useContext, useState } from "react";
import { Container, Progress } from "reactstrap";
import AppContext from "../Context";

export default function ProgressHack() {
    const { setDisplayPage } = useContext(AppContext);
    const [progression, setProgression] = useState();

    setTimeout(() => {
        setProgression(25);
        setTimeout(() => {
            setProgression(50);
            setTimeout(() => {
                setProgression(75);
                setTimeout(() => {
                    setProgression(100);
                    setDisplayPage(true);
                }, 500);
            }, 500);
        }, 500);
    }, 500);

    return (
        <Container className="text-center hackProgress">
            <h1>Hacking city data</h1>
            <Progress multi>
                <Progress striped bar color="danger" value={progression} />
            </Progress>
        </Container>
    );
}
