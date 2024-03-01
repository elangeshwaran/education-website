 import React from "react";
const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cb09c3a6-f678-46d8-9560-bd993da5b1b7");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {

        console.log("Error", res);
        setResult(res.message);
      }
    };

  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send a message <img src="msg-icon.png"/></h3>
            <p>Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. 
                Cum velit culpa ut sed libero quasi aut, 
                tempore accusantium 
                laboriosam dolores necessitatibus fugiat Eum, 
                atque non. Distinctio aliquid unde nihil culpa.</p>
                <ul>
                    <li><img src="mail-icon.png"/>contact@elangeshwaran58@gmail.com</li>
                    <li> <img src="phone-icon.png"/>6379475975</li>
                    <li> <img src="location-icon.png"/>77 4th street Chennai,<br/> 630005,Tamilnadu</li>
                     </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder="Enter Your name" required/>
                <label>Phone number</label>
                <input type="tel" name='phone'placeholder="Enter your moblie number" required/>
                <label>Write message here</label>
                <textarea name="message"  rows="6" placeholder="Enter your message" required></textarea>
                <button type="submit" className="btn dark-btn">Submit now <img src="white-arrow.png"/></button>
            </form>
            <span>{result}</span>
        </div>
        </div>
  )
}

export default Contact
