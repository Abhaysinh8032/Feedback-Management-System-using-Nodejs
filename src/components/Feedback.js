import {useState , useRef} from "react";
import axios from "axios";

function Feedback(){
    const[name , setName] = useState("");
    const [feedback , setFeedback] = useState("");
    const[ans , setAns] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    const rName = useRef();
    const rEmail = useRef();
    const rFeedback = useRef();

    const hName = (event) =>{setName(event.target.value);}
    const hEmail = (event) =>{setEmail(event.target.value);}
    const hFeedback = (event) =>{setFeedback(event.target.value);}
    const handleRatingChange = (selectedRating) => {
        setRating(selectedRating);
      };
    // const find = (event)=>{
    //     event.preventDefault();
    //     if((name ==="")||(name.trim() ==="")||(!name.match(/^[A-Za-z]+$/))){
    //         alert("invalid name");
    //         setName("");
    //         setAns("");
    //         rName.current.focus();
    //         return;
    //     }
    //     else {};
    //     // let msg="name =" +name + " feedback " +feedback;
    //     // setAns(msg);
    // }
    const save =(event) => {
        event.preventDefault();
        if((email.trim() === "") ||
        !email.match(/^\S+@\S+\.\S+$/)){
            alert("empty or invalid eamil");
           
            setEmail("");
            setAns("");
            rEmail.current.focus();
            
            return;
        }else if((name ==="")||(name.trim() ==="")||(!name.match(/^[A-Za-z]+$/))){
            alert("name shold not empty and incluede only chars ");
            setName("");
            rName.current.focus();
        }
        else if((feedback ==="")||(feedback.trim() ==="")){
            alert("empty feedback");
            setFeedback("");
            rFeedback.current.focus();
           
        }
        else if((rating===0)){
            alert("rating shuld not be empty ");
        }
        else {let data = {name , feedback ,email, rating };
        let urladd = "http://localhost:9000/save";
        axios.post(urladd , data)
        .then(res=>{
            if(res.data.affectedRows===1){
                // setAns("recorded Updated");
                alert("record updated successfully");
                setName("");
                setFeedback("");
                setEmail("");
                setRating(0);
            }
            else if (res.data === "Email already exists") {
                alert("Email already exists");
              } 
            else{
                setAns(email + " email  exists");
                setName("");
                setFeedback("");
            }
        })
        .catch(err => {
            if(err.code==="ERR_NETWORK")
            setAns("Please try after sometime");
        })};
        


    }
    
    return(
        <>
        <center>
            <h1>Feedback Please</h1>
            <form onSubmit={save}>
                <input type="text" placeholder="enter ur name" onChange={hName}
                ref={rName} value={name}/>
                <br/><br/>
                <input type="email" placeholder="Enter your email" onChange={hEmail} ref={rEmail} value={email}
        />
        <br/><br/>
                <input type="text"  placeholder="enter ur feedback" value={feedback} ref={rFeedback} onChange={hFeedback}/>
                <br/><br/>
                <div>
      <p>Select your rating:</p>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => handleRatingChange(value)}
          style={{ cursor: 'pointer', color: value <= rating ? 'gold' : 'gray' }}
        >
          &#9733;
        </span>
      ))}
    </div>
                <input type="submit" value="Save"/>
                
            </form>
            <h1>{ans}</h1>
        </center>
        </>
    );
}
export default Feedback;