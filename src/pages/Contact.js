import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import * as yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux'
import { createQuery } from "../features/contact/contactSlice";

const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
    email: yup.string().nullable().email("Email should be valid").required("Email is required"),
  mobile: yup.string().default('').nullable().required("Mobile Number is Required"),
comment: yup.string().default('').nullable().required("Comment is Required"),
});
 

const Contact = () => {
    const dispatch = useDispatch();

  const formik = useFormik({
    initialValues:{
      name:'',
      email: '',
      mobile: '',
      comment: '',

    },

     validationSchema:contactSchema,
    onSubmit: values =>{
     dispatch(createQuery(values))
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63408.389091907266!2d3.251363039016726!3d6.643901864111262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b914fb838b3cb%3A0xd16affe94a669589!2sGeorgious%20Cole%20Estate!5e0!3m2!1sen!2sng!4v1687099787220!5m2!1sen!2sng"
  width="600"
  height="450"
  style={{ border: "0" }}
  allowFullScreen=""
  className="border-0 w-100"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className="errors">
                      {
                        formik.touched.name && formik.errors.name
                      }
                      </div>    
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                       name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                         <div className="errors">
                      {
                        formik.touched.email && formik.errors.email
                      }
                      </div> 
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                       <div className="errors">
                      {
                        formik.touched.mobile && formik.errors.mobile
                      }
                      </div> 
                  </div>
                  <div>
                    <textarea
                     
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                       name="comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    ></textarea> 
                      <div className="errors">
                      {
                        formik.touched.comment && formik.errors.comment
                      }
                      </div>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno:277 , Near village chopal , Mandaura, Sonipat,
                        Haryana
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 8264954234">+91 8264954234</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:navdeepdahiya753@gmail.com">
                        navdeepdahiya753@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
