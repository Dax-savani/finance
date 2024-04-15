import React from "react";
import { ServicesHead } from "../../components/services/ServicesHead";
import { ServicesCard } from "../../components/services/ServicesCard";
import { ServicesChargesTable } from "../../components/services/ServicesChargesTable";
import "../../assets/style/services.css";
import { ServicesTabs } from "../../components/services/ServicesTabs";
import { ServicesGoldLoan } from "../../components/services/ServicesGoldLoan";
import { ServicesSlider } from "../../components/services/ServicesSlider";
import { ServicesGrid } from "../../components/services/ServicesGrid";
import GoldCalc from "../../components/global/GoldCalc";
import Faqs from "../../components/global/Faqs";
import ProvidedServices from "../../components/global/ProvidedServices";
import Subscribe from "../../components/global/Subscribe";
import Schemes from "../../components/global/Schemes";


export const Services = () => {

  const itemData = [
    {
      title: "Who is eligible to avail a Gold Loan from Muthoot Finance?",
      descripition:
        "  Any major Indian citizen is eligible to avail a gold loan from us. All they are required to do is provide the required documents along with the gold ornaments.If you wish to apply for a gold loan with us, visit our nearest branch by searching for ‘Muthoot Finance gold loan near me’ on the web",
    },
    {
      title:
        "  What type of security do I need to provide to Muthoot Finance? Do I need a guarantor?",
      descripition:
        " The only security that is needed from the end of the customer to avail our gold loan is the gold they pledge. There is no requirement for an external/third party guarantor for the same. The loan gets sanctioned against the gold pledged.",
    },
    {
      title:
        "What is the minimum/maximum tenure of the gold loan from Muthoot Finance?",
      descripition:
        " There is no minimum tenure of gold loan. However interest is charged for minimum period of 7/15 days depending upon the gold loan scheme chosen.",
    },
    {
      title:
        "What type of gold can I pledge to avail the gold loan from Muthoot Finance?",
      descripition:
        "You can pledge any type of gold ornaments/gold jewellery with us. This includes items like rings, necklaces, watches, bracelets, 'Kardahs,' pendants, 'Polki' sets, and more. You can always consult our executives at your nearest Muthoot Finance branch for the exhaustive list.",
    },
    {
      title:
        "How can I repay my loan at Muthoot Finance? What different options are available for the repayment?",
      descripition:
        "  You can repay your loan at any of our branches by cheque, cash, or debit cards (please note that demand drafts and credit cards are not accepted). You can even repay your loan against gold online by using iMuthoot mobile application or Online Webpay facility. To visit our Online Webpay facility, click here.",
    },
    {
      title:
        " Where do I repay my loan from Muthoot Finance? Can partial repayment be made towards the gold loan?",
      descripition:
        " The loan can be repaid at any Muthoot Finance branch, no matter the location. The CBS system of Muthoot Finance is implemented in every branch and lets customers repay their loan at any particular branch. But, it is important to note that the final collection of the gold needs to be done from the initial branch where it was pledged.",
    },
    {
      title:
        "How and when can I get back the pledged gold jewellery/ornaments from Muthoot Finance?",
      descripition:
        "You will receive back the gold which you pledge with Muthoot Finance after you repay the loan and the complete amount. If you fail to repay the loan, then Muthoot Finance Ltd will reluctantly auction off the same. The borrowers will receive periodical reminders for payment of overdue interest and after the tenure of the loan, a final Notice before the auction.",
    },
    {
      title: " What is the minimum limit on Muthoot Finance gold loan?",
      descripition:
        "The minimum amount of the gold loan range by Muthoot Finance is ₹1500.",
    },
    {
      title: " Is my Gold jewellery/ornaments safe with Muthoot Finance Ltd.?",
      descripition:
        "At Muthoot Finance, we are well aware of the customer’s sentiment attached to the ornaments. Thus, we have put in place specialized safe rooms as well as CCTV cameras for the purpose of round-the-clock surveillance in our every branch. We enter the gold items pledged with Muthoot Finance Ltd. into our systems and every submission is locked away in a packaging that is tamper-proof. So, you can remain worry free and avail a gold loan in an easy process from Muthoot Finance.",
    },
    {
      title: "How can I apply for a Gold Loan with Muthoot Finance Ltd.?",
      descripition:
        " If you wish to apply for a gold loan with us, you can visit any of our branches and talk to a customer care executive. The executive will assist you in filling out a KYC form for Gold Loan and provide you guidance for the process that follows.",
    },
    {
      title: "How much can I expect for my gold from Muthoot Finance?",
      descripition:
        " This is dependent on the purity of gold in the ornaments and the rate of gold on that date. So, for this, please visit your nearest Muthoot Finance Branch. To locate a branch of Muthoot Finance near you, simply search ‘Muthoot Finance gold loan near me’ on the internet.",
    },
    {
      title:
        "I need some more information, how can I contact Muthoot Finance Ltd.?",
      descripition:
        "You can click here for contact us page or call at 1800 313 1212. You can also voice any concerns that you may have on our Twitter handle and Facebook page",
    },
    {
      title:
        " Can gold loan be prepaid or foreclosed? Are there any prepayment charges?",
      descripition:
        " You can pay the loan amount before the completion of your loan tenure by paying the interest, without having to pay any foreclosure charges or prepayment penalties.",
    },
    {
      title: "ow do you ensure the safety of the gold I pledge?",
      descripition:
        " Muthoot Finance understands the emotional attachment that customers have to their jewellery. As a result, we have installed specialised safe rooms as well as CCTV cameras in each of our branches for round-the-clock surveillance. We enter the gold goods committed with Muthoot Finance Ltd. into our systems, and each submission is stored in tamper-proof packaging. Hence, you may relax and get a gold loan from Muthoot Finance in a simple method.",
    },
    {
      title:
        "Is it mandatory to have a co-applicant when applying for a Muthoot Finance Loan Against Gold?",
      descripition:
        "  No, a co-applicant is not required in order to obtain the Muthoot Finance gold loan. In order to proceed with the registration, you must give all of the basic information for the gold loan as specified by the company's terms and conditions. This comprises declarations and commitments made by the borrower and confirmed by him, as well as any additional papers requested by the organisation.",
    },
  ];

  const itemData2 = [
    {
      title: "What is meant by Moratorium under the regulatory package?",
      descripition:
        "Under the regulatory relief package declared by Reserve Bank of India, Moratorium would mean a temporary postponement of payment of principal/interest/ instalment of a loan upto a maximum period of 3 months.",
    },
    {
      title: "Will there be any waiver of amounts under the Moratorium?",
      descripition: "No waiver of any sorts is envisaged under the Moratorium.",
    },
    {
      title: "Will Gold Loans come under the coverage of the 'Moratorium'?",
      descripition: "Yes. To a limited extent.",
    },
    {
      title:
        "What are the eligibility criteria for claiming “Moratorium” for gold loan repayment under the package?",
      descripition:
        "Moratorium will be applicable for gold loans which are active as on 01.03.2020 and completing the sanctioned period of 12 months on or before 31.05.2020.",
    },
    {
      title: "How will be the Moratorium applied?",
      descripition:
        "We have extended the tenure of all gold loans which are falling due for payment, on expiry of the sanctioned period of twelve months between 01.03.2020 to 31.05.2020 by 90 days.",
    },
    {
      title: "Can you give an example?",
      descripition:
        "If the gold loan was availed on 15.03.2019 and falls due for payment on 08.03.2020 on expiry of 360 days period, the due date will be shifted to 06.06.2020, i.e., by 90 days.",
    },
    {
      title:
        "Will any recovery measures/auction proceedings be initiated during this extended period?",
      descripition:
        "No. You will be given 90 extra days for closing/ renewing the loan. You may, at any time during the extended period, close/renew the loan by paying the full interest at the then prevailing LTV.",
    },
    {
      title: "Will interest be applied during the extended period of 90 days?",
      descripition:
        "Yes. Interest will continue to be applied on the loan at the applicable rate as on the date of extension of the period, as per the agreed terms and conditions.",
    },
    {
      title:
        "Can I pay interest or make part payment of principal during the extended period?",
      descripition:
        "Yes. You are welcome to service the interest and / or make part payment towards the principal, which will reduce your liability and the burden of repaying the full amount on maturity.",
    },
    {
      title:
        "The interest rate has moved to a higher slab during the lockdown period. Can I be given any concession/ advantage of grace period as the non-payment of interest on the due date was due to reasons beyond any control?",
      descripition:
        "We will certainly look at such cases sympathetically and take a decision on a case to case basis after our branches reopen. Such requests for concessions can only be processed by the branches.",
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
          What are the benefits of taking a Gold Loan from Muthoot Finance Ltd.?
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse show collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body fs-16 black">
          Let’s take a close look at the advantages of availing a gold loan from
          Muthoot Finance, the company that offers the best gold loans in the
          country:
        </div>
        <p className="mb-3">
          <span className="px-2 lightgray">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="lightgray">Fast loan disbursal</span>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="lightgray">Customer oriented Services</span>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="lightgray">Minimal documentation</span>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="lightgray">In-house gold evaluation</span>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="lightgray">
            Get minimum loan amount of ₹1500 and no maximum limit
          </span>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="lightgray">Pre-payment option-with no penalty</span>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="lightgray">
            Strong rooms put in place for providing safe custody of gold
            ornaments
          </span>
        </p>
        <p className="mb-3">
          <span className="px-2 lightgray">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="lightgray">
            Prompt customer service within a shorter response time
          </span>
        </p>
      </div>
    </div>
  );

  const data1 = (
    <div className={`accordion-item`}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed fs-16 fw-semibold accordionhead px-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#index"
          aria-expanded="true"
          aria-controls="flush-collapseSixteen"
        >
          What is meant by "Moratorium" under the regulatory package?
        </button>
      </h2>
      <div
        id="index"
        className="accordion-collapse show collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body fs-16 black">
          Under the regulatory relief package declared by Reserve Bank of India,
          Moratorium would mean a temporary postponement of payment of
          principal/interest/ instalment of a loan upto a maximum period of 3
          months.
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <section>
          <ServicesHead />
        </section>
        <section id="servicesCard">
          <ServicesCard />
        </section>
        <section>
          <GoldCalc />
        </section>
        <Schemes />
        <section>
          <ServicesChargesTable />
        </section>
        <section>
          <ServicesTabs />
        </section>
        <section>
          <ServicesGoldLoan />
        </section>
        <section>
          <Faqs itemData={itemData} title={"FAQs"} data={data} />
        </section>

        <section>
          <Faqs
            itemData={itemData2}
            title={"Covid-19 Gold-Loan FAQs"}
            data={data1}
          />
        </section>

        <section>
          <ServicesSlider />
        </section>
        <section>
          <ServicesGrid />
        </section>
        <section>
          <ProvidedServices />
        </section>
        <section>
          <Subscribe />
        </section>
      </div>
    </>
  );
};
