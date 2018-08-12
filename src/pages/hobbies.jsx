import React from 'react';
import Title from '../components/title';
import Hobby from '../components/hobby';
import teaching from '../../assets/teaching.svg';
import events from '../../assets/events.svg';
import learning from '../../assets/reading.svg';
import travelling from '../../assets/travelling.svg';

const Hobbies = () => (
  <main>
    <section>
      <Title title="Hobbies" />
      <div className="hobbies">
        <Hobby title="Teaching" img={teaching}>
          I like sharing my knowledge and improving my communication skills. I am currently a lead instructor at{' '}
          <a href="https://www.codefirstgirls.org.uk/">Code First: Girls</a>.
          Previously, I have taught beginner web dev in the internal code
          academy at Expedia. This has helped me overcome my speech anxiety
          while allowing me to help others and I'm looking for new opportunities
          to teach.
        </Hobby>
        <Hobby title="Events" img={events}>
          I am involved with community events, both as an anttendee and as an
          organiser. I have been part of{' '}
          <a href="https://twitter.com/kcltech?lang=en">KCL Tech</a>, organising
          HackKings and HackLondon multiple times and I've attended diverse
          conferences, meetups and hackathons over the UK suchs as UtilityHack,
          Women in Silicon Roundabout, The JS Roundabout, ReactFest and Hackcon.
          You can follow my <a href="https://twitter.com/ruxi_ang">Twitter</a>{' '}
          page to see where I'll be next.
        </Hobby>
        <Hobby title="Learning" img={learning}>
          I strongly believe that education is a lifetime journey. Therefore I
          engage daily in different learning activities such as reading books
          and articles, learning another language or skill. Currently, I am
          learning Spanish and I am reading A Song of Ice and Fire.
        </Hobby>
        <Hobby title="Travelling" img={travelling}>
          Travelling has enabled me to experience different cultures in a way
          nothing else can. I love discovering new places and I'm always on the
          hunt for new adventures. Follow my{' '}
          <a href="https://www.instagram.com/ruxi.ang/">Instagram</a> to see
          where my next destination is.
        </Hobby>
      </div>
    </section>
  </main>
);

export default Hobbies;
