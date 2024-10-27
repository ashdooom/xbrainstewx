import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import xbrainstewx from '/public/images/xbrainstewx.png';
import mewwoumb from '/public/images/mewwoumb.gif';

export default function Programming() {
  return (
    <div className={styles.page}>
      <Link href='/'>
        <Image src={xbrainstewx} className={styles.brain} />
      </Link>
      <div className={styles.linksContainer}>
        <Link href="/programming" className={styles.links}>programming portfolio</Link>
        <Link href="/art" className={styles.links}>art portfolio</Link>
        <Link href="/commissions" className={styles.links}>commissions</Link>
        <Link href="/about" className={styles.links}>about</Link>
        <Link href="/comments" className={styles.links}>comments</Link>
      </div>
      <div>
        <Image src={mewwoumb} className={styles.umb} />
      </div>

      <div className={styles.code}>
      <div className={styles.github}>
        <a href="https://www.github.com/ashdooom">☆ github ☆</a>
      </div>
        I am a passionate web developer with a Full Stack Certification from Nucamp and with a strong foundation in both front-end and back-end technologies. My experience includes building responsive user interfaces and developing robust server-side applications. I enjoy tackling complex problems and continuously improving my skills to deliver high-quality software solutions.
        <br />
        ☆ Proficient in HTML, CSS, and JavaScript
        <br />
        ☆ Strong knowledge of front-end frameworks such as React.js
        <br />
        ☆ Experience with back-end development using Node.js and Express
        <br />
        ☆ Familiar with database management using MongoDB and MySQL
        <br />
        ☆ Skilled in RESTful API design and development
        <br />
        ☆ Understanding of version control using Git and GitHub
        <br />
        ☆ Familiarity with agile development methodologies
        <br />
        ☆ Excellent problem-solving abilities and attention to detail
        <br />
      </div>
    </div>
  );
}
