import { BsHeartFill } from "react-icons/bs";
import { GiWaveSurfer } from "react-icons/gi";
import { FaMountain } from "react-icons/fa";

import "../style/footer.css";

function Footer() {
  return (
    <div className="footerMain">
      <p className="footerDesc">
        <GiWaveSurfer /> From Biarritz with{" "}
        <BsHeartFill style={{ color: "red" }} /> by Romain, David, Theodore,
        Yoan and Malo <FaMountain />
      </p>
    </div>
  );
}

export default Footer;
