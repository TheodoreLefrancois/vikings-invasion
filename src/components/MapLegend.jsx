import { Table } from "reactstrap";

import viking from "../image/viking_PNG10.png";
import cible from "../image/cible2.png";
import { BsHeartFill } from "react-icons/bs";

function MapLegend() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "25%", paddingTop: "1em" }}>
        <Table dark borderless>
          <thead>
            <tr>
              <th>Legend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" style={{ width: "90px" }}>
                <img
                  src={viking}
                  alt="viking head with haxes"
                  style={{ width: "100%" }}
                />
              </th>

              <td>Villages Destroyed</td>
              <td>8</td>
            </tr>
            <tr>
              <th scope="row" style={{ width: "90px" }}>
                <img
                  src={cible}
                  alt="viking head with haxes"
                  style={{ width: "100%" }}
                />
              </th>
              <td>Next Targets</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">NEXT ICON HERE</th>
              <td>Home sweet home</td>
              <td>
                <BsHeartFill style={{ color: "red" }} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MapLegend;
