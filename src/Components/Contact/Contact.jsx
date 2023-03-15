import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  let [submitBtnText, setSubmitBtnText] = useState("Send Message")
  const sendEmail = (e) => {
    e.preventDefault()
    setSubmitBtnText("Message Sent !")
  }

  return (
    <div className="contactContainer">
      <div className="contactMain">
        <div className="contactFormDiv">
          <form className="contactForm">
            <div className="contactInputDiv">
              <input type="text" className="contactInput" placeholder="Name" />
            </div>
            <div className="contactInputDiv">
              <input type="text" className="contactInput" placeholder="Email" />
            </div>
            <div className="contactInputDiv">
              <textarea placeholder="Don't feel shy to say Hello..." className="contactMessageBox" />
            </div>
            <div className="contactCheckboxDiv">
              <input type="checkbox" className="contactCheckbox" />
              <label>Do you want my resume to be send on your given mail ?</label>
            </div>
            <div className="contactInputDiv">
              <button onClick={(e) => sendEmail(e)} className="contactFormSubmitBtn">
                {submitBtnText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
