import React from 'react'
import Herosection from '../../components/Home/Herosection'
import ServiceProvide from '../../components/Home/ServiceProvide'
import WhyChooseUS from '../../components/Home/WhyChooseUS'
import Schemes from '../../components/global/Schemes'
import GoldCalc from '../../components/global/GoldCalc'
import NewsMedia from '../../components/Home/NewsMedia'
import Faqs from '../../components/global/Faqs'

const Home = () => {

  const itemData = [
    {
      title: "What services does Muthoot Finance offer?",
      descripition:
        "As part of our core business, we provide business loans secured by gold jewellery or gold loans. We primarily cater to individuals who possess gold jewellery but cannot access formal credit within a reasonable time, or for whom credit may not be available at all. We help our customers meet unanticipated or other short-term liquidity requirements.",
    },
    {
      title: "Does The Muthoot Group have international branches?",
      descripition:
        "The Muthoot Group has a presence in USA, UK, UAE, Sri Lanka, and Central America.",
    },
    {
      title: "Why should I choose The Muthoot Group?",
      descripition:
        "The Muthoot Group has been transforming the lives of millions of Indians across the country, giving wings to their dreams, and creating successful realities. Having served over 70 crore customers till date (including repeat customers), and serving over 2.5 Lakh customers daily, The Muthoot Group has not only grown exponentially but has also facilitated growth for a sizeable population of the country that falls in the underprivileged category.",
    },
    {
      title: "What makes Muthoot Finance a reliable brand?",
      descripition:
        "Muthoot Finance has been accoladed as India’s No. 1 Most Trusted Financial Services Brand for 6 years since 2016 by TRA’s Brand Trust Report consecutively. We are also India’s largest gold financing company in terms of loan portfolio. We are a reputed ‘Systemically Important Non-deposit taking NBFC’.",
    },
    {
      title: "Why should I trust Muthoot Finance?",
      descripition:
        "Our decades-rich experience and expertise inspire trust and customer loyalty. Our core banking solution connects all branches to a central server on a real-time basis. This ensures enhanced control, scalability, and faster response to meet the evolving needs of our customers.",
    },
    {
      title: "What services does Muthoot Finance offer?",
      descripition:
        "You can fill in the information through the online form to avail Gold Loan from Muthoot Finance, our team will call you to understand the requirement and guide you further.",
    },
  ];


  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <Herosection />
        <ServiceProvide />
        <WhyChooseUS />
        <Schemes />
        <GoldCalc />
        <NewsMedia />
        <Faqs title={"FAQs"} itemData={itemData}/>
      </div>
    </>
  );
}

export default Home