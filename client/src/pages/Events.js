import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Events.module.css'; 

function Events() {
  const pastEvent = {
    id: 1,
    title: "Innovation Hackathon",
    description: "The Inter-Campus Open Innovation Hackathon, organized by ASPIRE in collaboration with Engineer's Cradle and MIT-TBI, invites students from Pune campuses to participate in a two-phase competition. Teams of up to two students can register online, submit their innovative ideas, and compete in the internal college round. The top 3 teams from each college will advance to the final hackathon round at MIT-WPU, Pune, where they will develop working prototypes, receive mentorship, and present their solutions to a panel of industry experts. Cash prizes, research support, and potential funding opportunities await the top teams.",
    image: "./past-innovation-hackathon.jpg",
    date: "Held on: 15/02/2024",
    time: "",
  };

  const upcomingEvent = {
    id: 2,
    title: "IRIS Innovation Hackathon 2024",
    description: "Organized by: I.R.I.S Club",
    image: "./sephackathon.jpg",
    date: "Dates: September 26-28, 2024",
    highlights: [
      "Exciting Prizes: ₹36,000 in BharatGo vouchers for top 3 teams",
      "Workshops & Mentorship: Expert guidance in Web3, Blockchain, AI, and Data Science",
      "Networking: Connect with industry leaders and peers",
      "Collaborative Environment: Innovate and solve real-world problems"
    ],
    conclusion: "Join us for a dynamic event that fuels creativity and innovation!"
  };

  const podcast = {
    id: 1,
    title: "I.R.I.S. Podcast",
    description: "Our latest podcast episode",
    image: "./podcast1.jpg",
    date: "2024-03-14 || ",
    length: "Length: 21 mins 02 secs",
  };

  return (
    <div className={styles.events}>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Events</h1>

        {/* Upcoming Events Section */}
        <section className={styles.upcomingEvents}>
          <h2 className={styles.upcoming}>Upcoming Events</h2>
          <div className={styles.eventList}>
            <div key={upcomingEvent.id} className={styles.eventCard}>
              <img src={upcomingEvent.image} alt={upcomingEvent.title} />
              <h2>{upcomingEvent.title}</h2>
              <p>{upcomingEvent.description}</p>
              <p>
                <span>{upcomingEvent.date}</span>
                <span>{upcomingEvent.time}</span>
              </p>
              <ul>
                {upcomingEvent.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <p>{upcomingEvent.conclusion}</p>
              <Link to={`/events/${upcomingEvent.id}`} className={styles.btn}>
                REGISTRATION OPEN!
              </Link>
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className={styles.pastEvents}>
          <h2 className={styles.past}>Past Events</h2>
          <div className={styles.eventList}>
            <div key={pastEvent.id} className={styles.eventCard}>
              <img src={pastEvent.image} alt={pastEvent.title} />
              <h2>{pastEvent.title}</h2>
              <p>{pastEvent.description}</p>
              <p>
                <span>{pastEvent.date}</span>
                <span>{pastEvent.time}</span>
              </p>
              <Link to={`/events/${pastEvent.id}`} className={styles.btn}>
                Click to know more
              </Link>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section className={styles.podcasts}>
          <h2 className={styles.podcastTitle}>Podcasts</h2>
          <div className={styles.eventList}>
            <div key={podcast.id} className={styles.eventCard}>
              <img src={podcast.image} alt={podcast.title} />
              <h2>{podcast.title}</h2>
              <p>{podcast.description}</p>
              <p>
                <span>{podcast.date}</span>
                <span>{podcast.length}</span>
              </p>
              <a
                href="https://www.youtube.com/watch?v=sFbYHID_w2c"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                Listen now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Events;
