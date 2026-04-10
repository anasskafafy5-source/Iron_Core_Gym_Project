
import { useState } from 'react';
import './index.css';

const offerArr = [
  {
    emoji: "💪",
    title: "Strength Training",
    desc: "Build muscle and power with expert guidance and premium equipment",
  },
  {
    emoji: "👥",
    title: "Personal Coaching",
    desc: "Get personalized training plans from certified professionals",
  },
  {
    emoji: "💘",
    title: "Cardio Conditioning",
    desc: "Boost endurance and burn fat with high-intensity workouts",
  },
];
const plansData = [
  {
    addOpt: "",
    name: "starter",
    price: "$29",
    options: ["Access to gym floor" , "Basic equipment" , "Locker access"]

  },
  {
    addOpt: "MOST POPULAR",
    name: "Pro",
    price: "$59",
    options: ["Everything in Starter" , "Group classes" , "Premium equipment" , "Nutrition guidance"],
  },

  {
    addOpt: "",
    name: "Elite",
    price: "$99",
    options: ["Everything in Pro" , "Personal Trainer" , "Custom Meal Plans" , "24/7 gym access"],   
  }

]

export default function App(){
  return (
    <>
    <Header />
    <LandigArea />
    <OffersArea />
    <PlanArea />
    <About />
    <Footer />
    </>
  )
}

// Start The Heading
function Header(){

  return <div>
    <header>
      <div className='left'>
        💪 IRONCORE
      </div>
      <div className='right'>
        <ul>
          <li><a href='#features'>Features</a></li>
          <li><a href='#pricing'>Pricing</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </header>
  </div>
}
// End The Heading
// Start Landing
function LandigArea(){
  return (
    <div className='landing-area'>
      <div className='content'>
        <h2>FORGE YOUR <span>STRENGTH</span></h2>
        <p>Transform your body and mind with elite training</p>
        <button>Start Training</button>
      </div>
    </div>
  )
}
// End Landing
// Start Offer Area
function OffersArea(){
  return (
    <div className='offers-area' id='features'>
      <h2>What We Offer</h2>
      <div className='offers'>
        {offerArr.map((offer) => (
          <Offer offer={offer} key={offer.title} />
        ))
        }
      </div>
    </div>
  )
}
function Offer({offer}){
  return (
    <div className='offer'>
      <div className='emoji'>{offer.emoji}</div>
      <h3>{offer.title}</h3>
      <p>{offer.desc}</p>
    </div>
  )
}

// End Offer Area
// Start Planes Area
function PlanArea(){
  const [sub , setSub] = useState(null);
  return (
    <div className='plans-area' id='pricing'>
      <h2>Membership Plans</h2>
      <div className='plans-content'>
      {
        plansData.map((item) => (
          <Plan plan={item}
           key={item.name}
           isActive={sub === item.name}
           onToggle={
            ()=> setSub(sub === item.name ? null : item.name)
           }
            />
        ))
      }
      </div>
    </div>
  )
}

function Plan({plan , isActive , onToggle}){
  return (
    <div className= {isActive? "plan active" : "plan"}>
      {plan.addOpt === "" ? null : <p>{plan.addOpt}</p>}
      <div className='plan-name'>{plan.name}</div>
      <div className='price'>
        <span className='pr'>{plan.price}</span> 
        <span className='period'>/month</span>
      </div>
      <div className='features-plans'>
        <ul>
          {plan.options.map((fet) => (
            <li><span>✅</span><span>{fet}</span></li>
          ))}
        </ul>
      </div>
      <button onClick={onToggle}>Get Started</button>
    </div>
  )
}
// End Planes Area
// Start About Area
function About(){
  return (<div className='about' id='about'>
    <div className='container'>
    <h2>Why Choose IronCore</h2>

    <p>We're not just another gym. IronCore is a community of dedicated athletes, fitness enthusiasts, and beginners united by one goal: transformation. With state-of-the-art equipment, expert coaches, and a supportive environment, we provide everything you need to reach your peak performance. Whether you're lifting your first weight or training for competition, we're here to push you forward.</p>
    </div>
  </div>
  )
}
// End About Area

// Start Footer Area
function Footer(){
  return (
    <footer id='contact'>
      <div className='footer-content'>

        <div className='fr'>
          <h3>💪 IRONCORE</h3>
          <p>Transform your body and mind with elite training programs designed for results.</p>
        </div>

        <div className='sc'>
          <h3>Contact Us</h3>
          <ul>
            <li>123 Fitness Streat</li>
            <li>Los Angeles, CA 90002</li>
            <li>(555) 123-456</li>
          </ul>
        </div>

        <div className='thr'>
          <h3>Follow Us</h3>
          <div></div>
        </div>

      </div>

      <div className='info'>© 2026 IronCore Fitness. All rights reserved.</div>
    </footer>
  )
}
// End Footer Area
