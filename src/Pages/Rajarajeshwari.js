import React from "react";
import { IoMdFlash } from "react-icons/io";
import { Link } from "react-router-dom";
import Our_Team_Comp from "../Component/Our_Team_Comp";
import "../App.css";

const Rajarajeshwari = () => {
  const goalsData = [
    {
      title: "Client Interest above all",
      description: `We hold ourselves accountable to our clients by taking
      responsibility of our actions & how it can affect people we
      serve.`,
    },
    {
      title: "Integrity & Honesty",
      description: `Conducting ourselves with integrity & doing the right thing
      for our clients under all circumstances`,
    },
    {
      title: "Respect & Reverence",
      description: `Committed to a philosophy of mutual respect in all our
      dealings with clients, and all our stakeholders`,
    },
    {
      title: "Loyalty",
      description: `Committed to exhibit loyalty to those we serve and work
      with. It is a key to maintain a culture of mutual support.`,
    },
    {
      title: "Professionalism",
      description: `Committed to providing innovative, creative, consistent and
      high-quality value-added services`,
    },
    // Add more goals here
  ];

  return (
    <div className="">
      <div className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div style={{ display: "inline-block", textAlign: "center" }}>
              <h2 style={{ display: "inline", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", margin: "0 10px" }}>
              Rajarajeshwari Nagar Office - Shoolin Consultancy
</h2>

                <p className="text-center">Best Divorce advocates in Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="about">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-7 col-md-6">
                <div className="section-header text-center">
                  <h2>Specialized in Divorce Law</h2>
                </div>
                <div className="about-text">
                  <p>
                    We are an Advocate law firm located at Malleshwaram,
                    Bengaluru. We are a team of experienced lawyers practicing
                    before the High Court, City Court, Magistrate Court, and
                    Family Court. We specialize in Criminal Law, Cheque Bounce cases, 
                    Matrimonial / Divorce cases, and more. We are known for providing 
                    reliable and quick solutions to our clients in accordance with the Law. 
                    At Shoolin, we hold a record of achieving the best possible results for our clients 
                    and are known for being responsive and reliable. Our main goal is to serve our clients 
                    and secure their interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-top">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className="feature-item text-center">
                  <h3>Comprehensive Divorce Solutions</h3>
                  <p>
                    Handling all aspects of divorce proceedings including mediation, 
                    child custody, financial settlements, and asset division.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feature-item text-center">
                  <h3>Personalized Legal Support</h3>
                  <p>
                    Every case is handled with utmost sensitivity and tailored strategies 
                    that cater to the unique needs of our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="section-header text-center">
                  <h2>Visit Us</h2>
                  <p className="text-center">
  For a consultation, please visit our{" "}
  <a href="https://maps.app.goo.gl/1atqULYczz3YeoQc8" style={{ color: 'blue' }}>
    office
  </a>.
</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Rajarajeshwari;
