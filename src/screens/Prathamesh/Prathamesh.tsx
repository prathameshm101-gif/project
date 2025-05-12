import Hero from '../../components/hero/Hero';
import About from '../../components/about/About';
import Smile from '../../components/smileComp3/smile'
import Awards from "../../components/awards/Awards";
import BeforAfter from "../../components/beforeAfter/BeforAfter";
import Clinics  from "../../components/locationOfClinics/Clinics";
import {YTvideo} from "../../components/Vidio/YTvideo";
import ContactForm from '../../components/form/ContactForm'



export const Prathamesh = (): JSX.Element => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
    <Hero/>

      {/* About Section */}
    <About/>

      {/* Smile Transformation Section */}
    <Smile/>

      {/* Awards Section */}
      <Awards/>

      {/* Gallery Section */}
      <BeforAfter/>

      {/* Clinics Location */}
      <Clinics/>

      {/* YT Video */}
    <YTvideo/>

    {/* Form */}
    <ContactForm/>

    </div>
  );
};