import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {

    const [cData,setData] = useState({
        fName:"",
        LName:"",
        email:"",
        phone:"",
        message:""
    })

    const fromFillEvent =(event)=>{

        const {name,value} = event.target;
        setData((preVal)=>{
            return {
            ...preVal,
                [name]:value,
            }
        })
    }
    const FormSubmit =(e)=>{
        e.preventDefault();
        alert(`I am ${cData.fName} ${cData.LName} my phone no ${cData.phone}. Thank you`);
    }

    return (
        <>
          <section className="Contact_Us d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto contact_maxwidth">
                                    <div className="section_heading">
                                        <h1>Contact Us</h1>
                                    </div>
                                    <div className="contact_from">
                                    <form className="" onSubmit={FormSubmit} >
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={fromFillEvent} name="fName" value={cData.fName} placeholder="Enter First Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={fromFillEvent} name="LName" value={cData.LName} placeholder="Enter Last Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" onChange={fromFillEvent} name="email" value={cData.email}  placeholder="liakutali@yahoo.com"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" onChange={fromFillEvent} name="phone" value={cData.phpne}  placeholder="880 1720 827368"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" onChange={fromFillEvent} name="message" value={cData.message} id="message" placeholder="Write Your Message " rows="2"></textarea>
                                        </div>
                                        <button type="submit" className="btn form_button">Submit</button>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </section>  
        </>
    );
};

export default Contact;