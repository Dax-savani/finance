import React from "react";
import Hero from "../../components/global/Hero";
import heroBack from "../../assets/images/policy/heroImage.jpg";
import Faqs from "../../components/global/Faqs";
import Subscribe from "../../components/global/Subscribe";
import FormPolicy from "../../components/policy/FormPolicy";

function Policy() {
  const itemData = [
    {
      title: "WHAT INFORMATION DO WE COLLECT?",
      descripition:
        "We collect information from you when you register on our site, put in a query, subscribe to our newsletter, respond to a survey, or fill out a form. When ordering or registering on our site, as appropriate, you may be asked to provide the following details: your name, e-mail address, mailing address, phone number.",
    },
    {
      title: "WHAT DO WE USE YOUR INFORMATION FOR?",
      descripition:
        "The Muthoot Group has a presence in USA, UK, UAE, Sri Lanka, and Central America.",
    },
    {
      title: "HOW DO WE PROTECT YOUR INFORMATION?",
      descripition:
        "We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.",
    },
    {
      title: "DO WE USE COOKIES?",
      descripition:
        "Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your web browser (if you allow) that enable the site’s or service provider’s systems to recognize your browser and capture and remember certain information. We use cookies to help us understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction, so that we can offer better site experiences and tools in the future.",
    },
    {
      title: "DO WE DISCLOSE ANY INFORMATION TO OUTSIDE PARTIES?",
      descripition:
        "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.",
    },
    {
      title: "ONLINE PRIVACY POLICY ONLY",
      descripition:
        "This online privacy policy applies only to information collected through our website and not to information collected offline.",
    },
    {
      title: "YOUR CONSENT",
      descripition:
        "By using our site, you consent to our websites privacy policy.",
    },
    {
      title: "CONTACTING US",
      descripition:
        "If there are any questions regarding this privacy policy you may contact us by providing the information requested below.",
    },
  ];
  const data = (
    <div className={`accordion-item`}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed fs-16 fw-semibold accordionhead px-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="true"
          aria-controls="flush-collapseOne"
        >
          WHAT DO WE USE YOUR INFORMATION FOR?
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse  collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body fs-16 black px-0 ms-2">
          The information we collect from you may be used in one of the
          following ways:
        </div>
        <p className="mb-3">
          <span className="px-2 lightgray fs-15 d-block fw-bold">
            1. To personalize your experience
          </span>
          <p className="lightgray fs-15 lightGray  ms-2">
            Your information helps us to better respond to your individual
            needs.
          </p>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray fs-15 d-block fw-bold">
            2. To improve our website
          </span>
          <p className="lightgray fs-15 lightGray  ms-2">
            We continually strive to improve our website offerings based on the
            information and feedback we receive from you.
          </p>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray fs-15 d-block fw-bold">
            3. To improve customer service
          </span>
          <p className="lightgray fs-15 lightGray  ms-2">
            Your information helps us to respond more effectively to your
            customer service requests and support needs.
          </p>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray fs-15 d-block fw-bold">
            4. To process transactions
          </span>
          <p className="lightgray fs-15 lightGray  ms-2">
            Your information, whether public or private, will not be sold,
            exchanged, transferred, or given to any other company for any reason
            whatsoever, without your consent, other than for the express purpose
            of delivering the purchased product or service requested.
          </p>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray fs-15 d-block fw-bold">
            5. To administer a contest, promotion, survey or other site feature
          </span>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray fs-15 d-block fw-bold">
            6. To send periodic emails
          </span>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray fs-15 d-block fw-bold">
            The email address you provide may be used to send you information,
            respond to inquiries, and/ or other requests or questions.
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <>
      <div style={{ marginTop: "88px" }}>
        <Hero
          bGSrc={heroBack}
          line1={"PRIVACY POLICY"}
          line2={"OUR"}
          line3={"PROMISE TO YOU"}
        />
        <Faqs title={"PRIVACY POLICY"} data={data} itemData={itemData} />
        <FormPolicy />
        <Subscribe />
      </div>
    </>
  );
}

export default Policy;
