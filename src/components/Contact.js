import { useState } from "react";
import { call, emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const [error, setError] = useState(null);
  const { name, email, phone, msg } = formData;
  const onChnage = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    // e.preventDefault();
    if (name && email && phone && msg) {
      setError(false);
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };
  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Get in Touch</span>
            <h3>Connect with Me with Confidence</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div className="text">
                <p>
                  Please fill out the form on this section to contact with me.
                  Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
                  Friday
                </p>
              </div>
              <ul>
                <li>
                  <div className="list_inner">
                    {call}
                    <span>Call me</span>
                    <h3>+1234 5678 9000</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <h3>
                      <a className="line_anim" href="mailto:hello@aali.com">
                        hello@aali.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                    style={{
                      display: error !== null && !error ? "block" : "none",
                    }}
                  >
                    <span className="contact_success">
                      Your message has been received, We will contact you soon.
                    </span>
                  </div>
                  <div
                    className="empty_notice"
                    style={{ display: error ? "block" : "none" }}
                  >
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => onChnage(e)}
                          placeholder="Your Name"
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          name="email"
                          value={email}
                          onChange={(e) => onChnage(e)}
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="number"
                          placeholder="Your Phone"
                          name="phone"
                          value={phone}
                          onChange={(e) => onChnage(e)}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      name="msg"
                      value={msg}
                      onChange={(e) => onChnage(e)}
                      placeholder="Your message here"
                    />
                  </div>
                  <div className="aali_tm_button">
                    <a id="send_message" href="#" onClick={() => onSubmit()}>
                      <span>Submit Message {msgSent}</span>
                    </a>
                  </div>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Contact;
