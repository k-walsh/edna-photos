import "../../styles/Contact.css";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    // would be cool if it switched to a mail thing following the mouse here
    <div className="content">
      <div className="contact">
        <h2 className="contactCol1">Let's work together.</h2>
        <div className="contactCol2">
          <p className="workTypes">
            Portraits / Landscapes / Creative Expression / Love / Laughter /
            Videos / Film / Social Media / Art / Fashion / Friendship
          </p>
          <div className="contactLinks">
            <p>Reach out!</p>
            <a
              href="https://www.google.com/search?q=edna+agyemang&rlz=1C5CHFA_enUS964US964&oq=edna&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyCQgCEEUYORiABDIHCAMQLhiABDIGCAQQRRhAMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHODcxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noreferrer"
              className="underlinelink"
            >
              <MailOutlineRoundedIcon className="icon" fontSize="large" />
            </a>
            <a
              href="https://www.google.com/search?q=edna+agyemang&rlz=1C5CHFA_enUS964US964&oq=edna&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyCQgCEEUYORiABDIHCAMQLhiABDIGCAQQRRhAMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHODcxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noreferrer"
              className="underlinelink"
            >
              <LinkedInIcon className="icon" fontSize="large" />
            </a>
            <a
              href="https://www.google.com/search?q=edna+agyemang&rlz=1C5CHFA_enUS964US964&oq=edna&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyCQgCEEUYORiABDIHCAMQLhiABDIGCAQQRRhAMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHODcxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noreferrer"
              className="underlinelink"
            >
              <InstagramIcon className="icon" fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
