import React from "react";
import { ServicesHead } from "../../components/services/ServicesHead";
import { ServicesCard } from "../../components/services/ServicesCard";
import { ServicesChargesTable } from "../../components/services/ServicesChargesTable";
import "../../assets/style/services.css";
import { ServicesTabs } from "../../components/services/ServicesTabs";
import { ServicesGoldLoan } from "../../components/services/ServicesGoldLoan";
import { ServicesSlider } from "../../components/services/ServicesSlider";
import { ServicesGrid } from "../../components/services/ServicesGrid";


export const Services = () => {
  return (
    <>
      <div style={{marginTop:"120px"}}>
        <section>
          <ServicesHead />
        </section>
        <section id="servicesCard">
          <ServicesCard />
        </section>
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
          <ServicesSlider />
        </section>
        <section>
          <ServicesGrid />
        </section>
      </div>
    </>
  );
};
