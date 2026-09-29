import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaCheck, FaFileAlt, FaHeart, FaPhone } from 'react-icons/fa';
import aboutImage from '../../assets/images/about.jpg';
import './Admissions.css';

const STEPS = [
  { number: '01', icon: FaPhone, title: 'Start a conversation', text: 'Tell us about your family, your child, and the care you are looking for.' },
  { number: '02', icon: FaCalendarAlt, title: 'Come for a visit', text: 'Walk through our spaces, meet the team, and see the daily rhythm in person.' },
  { number: '03', icon: FaFileAlt, title: 'Complete enrollment', text: 'We will guide you through the paperwork and help your child settle in smoothly.' },
];

const Admissions = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="admissions-page">
      <section className="admissions-hero"><div className="admissions-hero__image" style={{ backgroundImage: `url(${aboutImage})` }} /><div className="admissions-hero__overlay" /><div className="container admissions-hero__inner"><p className="admissions-kicker">A happy beginning starts here</p><h1>Let’s find the right<br /><em>place for your child.</em></h1><p>We would love to learn about your family, answer your questions, and show you around Angels & Fairies.</p></div></section>

      <section className="admissions-steps admissions-section"><div className="container"><div className="admissions-heading"><p className="admissions-kicker">Simple, personal, supportive</p><h2>From first enquiry to <em>first day.</em></h2><p>Our admissions team is here to make the process feel clear and comfortable, with plenty of time for your questions.</p></div><div className="admissions-steps__grid">{STEPS.map(({ number, icon: Icon, title, text }) => <article key={number}><span className="admissions-step-number">{number}</span><span className="admissions-step-icon"><Icon /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="admissions-info admissions-section"><div className="container admissions-info__grid"><div><p className="admissions-kicker">Before you enquire</p><h2>A little information to help you <em>plan ahead.</em></h2><p>We welcome children from infancy through early learning years. Availability can vary by age group, so the best first step is to speak with our team.</p><div className="admissions-facts"><div><strong>Age groups</strong><span>0-5 years</span></div><div><strong>Opening hours</strong><span>Mon-Sat, 7:30 AM-6:00 PM</span></div><div><strong>Fees</strong><span>Contact us for current details</span></div></div></div><div className="admissions-checks"><h3>What to bring to your visit</h3><ul><li><FaCheck /> Your questions and preferences</li><li><FaCheck /> Your child’s age and routine</li><li><FaCheck /> Any care or dietary needs</li><li><FaCheck /> An open mind and comfortable shoes</li></ul><Link to="/faq" className="admissions-link">Read common questions <FaArrowRight /></Link></div></div></section>

      <section className="admissions-form-section admissions-section" id="enquiry"><div className="container admissions-form__grid"><div className="admissions-form__intro"><p className="admissions-kicker">Start your enquiry</p><h2>Tell us a little about <em>your family.</em></h2><p>Complete the form and our admissions team will get in touch to answer your questions and arrange a visit.</p><div className="admissions-form__promise"><FaHeart /><span><strong>A warm reply, always</strong>We aim to respond to every family with care and useful next steps.</span></div></div><form className="admissions-form" onSubmit={handleSubmit}>{submitted ? <div className="admissions-success"><FaCheck /><h3>Thank you for your enquiry.</h3><p>Our admissions team will contact you shortly.</p><button type="button" className="admissions-button admissions-button--outline" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <><div className="admissions-form__row"><label>Parent or guardian name<input required name="parentName" placeholder="Your name" /></label><label>Phone number<input required name="phone" type="tel" placeholder="+92 300 1234567" /></label></div><div className="admissions-form__row"><label>Child’s name<input required name="childName" placeholder="Child’s name" /></label><label>Child’s age<select required name="childAge" defaultValue=""><option value="" disabled>Select age</option><option>Under 1 year</option><option>1-2 years</option><option>2-4 years</option><option>4-5 years</option><option>School age</option></select></label></div><div className="admissions-form__row"><label>Email address<input required name="email" type="email" placeholder="you@example.com" /></label><label>Preferred program<select required name="program" defaultValue=""><option value="" disabled>Select a program</option><option>Infant Care</option><option>Toddler Care</option><option>Preschool Program</option><option>Early Learning</option><option>After-School Care</option></select></label></div><label>Preferred start date<input name="startDate" type="date" /></label><label>Message<textarea required name="message" rows="4" placeholder="Tell us what you would like to know..." /></label><button type="submit" className="admissions-button">Send an enquiry <FaArrowRight /></button></>}</form></div></section>

      <section className="admissions-cta"><div className="container"><p className="admissions-kicker">Questions are welcome</p><h2>Prefer to speak with someone?<br /><em>We are here.</em></h2><a href="tel:+923001234567" className="admissions-button"><FaPhone /> Call +92 300 123 4567</a></div></section>
    </div>
  );
};

export default Admissions;
