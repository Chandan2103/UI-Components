import classes from "./SuccessModal.module.scss";
import Button from "@mui/joy/Button";
import signUp from "../../assets/Images/signup.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Props{
  heading:any;
  subHeading:any;
}

const SuccessModal: React.FC<Props>  = ({heading,subHeading}) => {
  const navigate = useNavigate();
  const handleSuccess=()=>{
    navigate("/");
  }
  
  return (
    <>
      <div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.modalContainer}>
            <div className={classes.modalLeft}>
              <h1 className={classes.modalTitle}>{heading}</h1>
              <p className={classes.modalDesc}>
                {subHeading}{" "}
              </p>
              <p className={classes.signUp}></p>
                  <Button
                    type="submit"
                    size="lg"
                    style={{ padding: "14px 50px" }}
                    onClick={handleSuccess}
                  >
                    Login
                  </Button>
                
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
