import './App.css'
import Header from './Header'
import SectionTitle from './SectionTitle'
import ProductCard from './ProductCard'
import type { FeatureGroup } from './ProductCard'
import CsmSlider from './CsmSlider'
import Footer from './Footer'
import { openWhatsApp } from "./utils/whatsapp"

const csmlite: FeatureGroup[] = [
  {
    title: 'Attendance Features',
    items: ['Barcode Scanning', 'Attendance Recording', 'Late Attendance Recording', 'Homework Recording', 'Worksheet Recording'
      , 'Daily Reports', 'Monthly Summary Reports', 'Individual Student Reports'
    ],
  },
  {
    title: 'Technical Features',
    items: ['Barcode Scanning', 'PDF export & Share']
  },
  {
    title: 'Database Features',
    items: ['Database export', 'Database import']
  },
];

const csm: FeatureGroup[] = [
  {
    title: 'Attendance Features',
    items: ['Barcode Scanning', 'Attendance Recording', 'Late Attendance Recording', 'Homework Recording', 'Worksheet Recording'
      , 'Daily Reports', 'Monthly Summary Reports', 'Individual Student Reports'
    ],
  },
  {
    title: 'Exam Management Features',
    items: ['Mark Entry & Recording', 'Student Ranking', 'Average & Grade Calculation', 'Combined Class Averages'],
  },
  {
    title: 'Assignment Management Features',
    items: ['Assignment Recording', 'Assignment Completion Reports'],
  },
  {
    title: 'Technical Features',
    items: ['Barcode Scanning', 'PDF export & Share']
  },
  {
    title: 'Database Features',
    items: ['Database export', 'Database import']
  },
];

const csmNotify: FeatureGroup[] = [
  {
    title: 'Attendance Features',
    items: ['Barcode Scanning', 'Attendance Recording', 'Late Attendance Recording', 'Homework Recording', 'Worksheet Recording'
      , 'Daily Reports', 'Monthly Summary Reports', 'Individual Student Reports'
    ],
  },
  {
    title: 'Parent Notifications',
    items: ['SMS Alerts on Attendance', 'Real-Time Parent Updates'],
  },
  {
    title: 'Exam Management Features',
    items: ['Mark Entry & Recording', 'Student Ranking', 'Average & Grade Calculation', 'Combined Class Averages'],
  },
  {
    title: 'Assignment Management Features',
    items: ['Assignment Recording', 'Assignment Completion Reports'],
  },
  {
    title: 'Technical Features',
    items: ['Barcode Scanning', 'PDF export & Share']
  },
  {
    title: 'Database Features',
    items: ['Database export', 'Database import']
  },
];

function App() {
  return (
    <div>
      <Header />
      <SectionTitle title="About" />
      <CsmSlider />
      <SectionTitle title="Our Packages" />
      <center>
        <ProductCard
          imageSrc="csmlite.jpeg"
          imageAlt="CSM Lite preview"
          description="Classroom Student Manager Lite (Rs. 15,000)"
          featureGroups={csmlite}
          onBuy={() => openWhatsApp("I would like to buy CSM Lite")}
          onDemo={() => console.log('Demo clicked')}
        />
        <br />
        <ProductCard
          imageSrc="csm.png"
          imageAlt="CSM preview"
          description="Classroom Student Manager (Rs. 30,000)"
          featureGroups={csm}
          specialTitles={['Exam Management Features', 'Assignment Management Features']}
          onBuy={() => openWhatsApp("I would like to buy CSM")}
          onDemo={() => console.log('Demo clicked')}
        />
        <br />
        <ProductCard
          imageSrc="csm_notify.png"
          imageAlt="CSM Notify preview"
          description="Classroom Student Manager with SMS Notifications (Rs. 35,000)"
          featureGroups={csmNotify}
          specialTitles={['Parent Notifications']}
          onBuy={() => openWhatsApp("I would like to buy CSM Notify (SMS version)")}
          onDemo={() => console.log('Demo clicked')}
        />
      </center>
      <br />
      <br />
  <Footer/>      
    </div>
  )
}

export default App