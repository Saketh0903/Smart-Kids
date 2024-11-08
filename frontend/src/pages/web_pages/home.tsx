import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  AboutUsDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'affects their school performance and social growth';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Personalized Schedules',
      description:
        "Create tailored study and break schedules for your child, ensuring a balanced approach to learning and leisure. Our AI adapts to your child's needs.",
      icon: 'mdiCalendarClock',
    },
    {
      name: 'Gamified Social Skills',
      description:
        'Encourage face-to-face interactions with fun, AI-enhanced challenges. Reward your child for developing communication and teamwork skills.',
      icon: 'mdiGamepadVariant',
    },
    {
      name: 'Parental Insights',
      description:
        "Monitor your child's screen time and progress with detailed reports. Customize settings to fit your child's age and emotional health needs.",
      icon: 'mdiChartLine',
    },
  ];

  const testimonials = [
    {
      text: "Since using ${projectName}, my child's focus and social skills have improved tremendously. It's a game-changer for our family!",
      company: 'FutureTech Innovations',
      user_name: 'Emily Johnson, Parent',
    },
    {
      text: '${projectName} has made it easy to balance screen time and learning. My students are more engaged and productive.',
      company: 'EduSmart Solutions',
      user_name: 'Michael Smith, Educator',
    },
    {
      text: "I love how ${projectName} encourages my kids to interact more with family and friends. It's fun and educational!",
      company: 'FamilyFirst Enterprises',
      user_name: 'Sarah Lee, Parent',
    },
    {
      text: "The personalized schedules and gamified tasks have made a noticeable difference in my child's daily routine. Highly recommend!",
      company: 'BrightFuture Corp',
      user_name: 'David Brown, Parent',
    },
    {
      text: "As a teacher, I appreciate the insights ${projectName} provides. It helps me tailor my lessons to better suit my students' needs.",
      company: 'LearnWell Academy',
      user_name: 'Jessica Taylor, Teacher',
    },
    {
      text: '${projectName} is a fantastic tool for managing screen time. My kids are happier and more balanced in their activities.',
      company: 'TechSavvy Families',
      user_name: 'Chris Wilson, Parent',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`AI-Powered Time Management for Kids`}</title>
        <meta
          name='description'
          content={`Discover our AI-based app designed to manage children's mobile usage, enhance learning, and promote social interactions through gamification.`}
        />
      </Head>
      <WebSiteHeader
        projectName={'affects their school performance and social growth'}
        pages={pages}
      />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'affects their school performance and social growth'}
          image={['Child using tablet happily']}
          mainText={`Empower Kids with Smart Screen Time`}
          subTitle={`Discover how ${projectName} helps balance education and social interactions with AI-driven insights and gamification. Enhance your child's learning and growth today.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'affects their school performance and social growth'}
          image={['Child engaging with app']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Key Features`}
          subTitle={`Discover how ${projectName} transforms screen time into a balanced learning and social experience for your child.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'affects their school performance and social growth'}
          image={['Team collaborating on project']}
          mainText={`Transforming Screen Time with ${projectName}`}
          subTitle={`${projectName} is dedicated to creating a balanced digital experience for children. Our AI-driven app promotes education and social growth, ensuring kids thrive both online and offline.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More`}
        />

        <TestimonialsSection
          projectName={'affects their school performance and social growth'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Users Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'affects their school performance and social growth'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime with your questions or feedback. Our team at ${projectName} is here to assist you and will respond promptly.`}
        />
      </main>
      <WebSiteFooter
        projectName={'affects their school performance and social growth'}
        pages={pages}
      />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
