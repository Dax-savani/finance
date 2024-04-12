import React from "react";

export const ServicesChargesTable = () => {
    const amountTable = [
      {
        loan: ">Rs.3 L to Rs.5 L",
        amount: "Rs.25/-",
      },
      {
        loan: ">Rs.5 L to Rs.15 L",
        amount: "Rs.40/-",
      },
      {
        loan: ">Rs.15 L to Rs.50 L",
        amount: "Rs.50/-",
      },
      {
        loan: ">Rs.50 L",
        amount: "Rs.75/-",
      },
    ];
  const tableData = [
    {
      type: "Service charges -Fresh loan- Rate applicable on loan amount(IPL)",
      corporate: "Southern Branches",
      rate: "IPL (1%) (For 12 months period only)",
    },
    {
      type: "Service charges -Fresh loan- Rate applicable per account (ZIL/ZIP)	",
      corporate: "ALL",
      rate: "ZIL/ZIP-Rs.50/loan",
    },
    {
      type: "Service charges on fresh loan under MEI scheme",
      corporate: "ALL",
      rate: "0.60% of loan amount",
    },
    {
      type: "Top-up services charges - Rate applicable on enhnaced amount",
      corporate: "All",
      rate: "2% of enhanced amount (For GL schemes having 1st slab ROI <15% with rebate facility)",
    },
    {
      type: "Security charges- Fresh loan",
      corporate: "Rest of India",
      rate: "0.15% of loan amount- Minimum Rs.100/- and Maximum Rs.1,000/-",
    },
    {
      type: "Token charges- (For schemes except given in Sl no.1, 2, 10 & 11",
      corporate: "Southern Branches",
      rate: "Loan up to Rs.1,00,000/- --> Rs.20/-Above Rs.1,00,000/- --> Rs.100/- Where 1st slab interest rate is <13% after rebate, other cases Rs.50/-",
    },
    {
      type: "SMS charges",
      corporate: "ALL",
      rate: "Rs.5/per quarter at the time of closure or renewal",
    },
    {
      type: "Notice Charges (Applicable for loans under all schemes)",
      corporate: "Rest of India",
      rate: "3 ordinary notice Rs.30/each and 4th notice-RegisteredRs.100/- Auction Notice charges Rs.120/-",
    },
    {
      type: "GCS",
      corporate: "Southern Branches",
      rate: "1.Rs.999/- per 6 months (in case the limit is not used over a period of 6 months) 2.If the transaction is through branches then Rs.99/- per transaction",
    },
    {
      type: "GCL",
      corporate: "Rest of India",
      rate: "1.Rs.999/- per 6 months (in case the limit is not used over a period of 6 months) 2.Part release charges of Rs.499/- per transaction 3.If the transaction is through branches then Rs.99/- per transaction",
    },
    {
      type: "CAC (Credit Appraisal Charges) – If total exposure > Rs.3 L",
      corporate: "Southern Branches",
      rate: (
        <table className="table table-bordered text-start text-nowrap">
          <thead>
            <tr className="table-light">
              <th>If loan amount</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {amountTable.map((value, index) => (
              <tr key={index}>
                <td>{value.loan}</td>
                <td>{value.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    },
    {
      type: "Door to Door collection charges (Follow up for interest / loan recovery)",
      corporate: "Southern Branches",
      rate: "Rs.150/- plus GST per customer for recovery made through customer follow up visit",
    },
  ];
  return (
    <>
      <div className="container-xl">
        <div className="py-5">
          <div>
            <div className="text-center fs-2 fw-bold my-4">
              Service Charges Relating To Gold Loan
            </div>
          </div>
          <div className="table-responsive-lg ">
            <table className="table table-bordered text-center fw-medium fs-14 ">
              <thead>
                <tr className="align-middle">
                  <th className="text-white bg-table">
                    SL <br /> No.
                  </th>
                  <th className="text-white bg-table">Type of Changes</th>
                  <th className="text-white bg-table">Corporate</th>
                  <th className="text-white bg-table">
                    Rate of charges applicable
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((value, index) => (
                  <tr key={index} className="align-middle">
                    <td className="p-lg-3 px-4">{index + 1}</td>
                    <td className="p-lg-3 px-4">{value.type}</td>
                    <td className="p-lg-3 px-4">{value.corporate}</td>
                    <td className="p-lg-3 px-4">{value.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="text-center">
              <button className="btn fw-medium download mt-2">
                DOWNLOAD PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
