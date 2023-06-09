import { PhDiscordLogo } from '@/ui/icons/discord';
import { PhGithubLogo } from '@/ui/icons/github';
import { PhStackOverflowLogo } from '@/ui/icons/stackoverflow';
import { PhTwitterLogo } from '@/ui/icons/twitter';
import { PhYoutubeLogo } from '@/ui/icons/youtube';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.root}>
      <div className={styles.card}>
        <h2>Me around the web</h2>
        <h1>chrisk-7777</h1>
        <p>Web dev by day, game dev by night.</p>
        <ul className={styles.socials}>
          <li>
            <a target="_blank" href="https://stackoverflow.com/users/614112/chris">
              <PhStackOverflowLogo />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/chrisk-7777">
              <PhGithubLogo />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/chrisk_7777/">
              <PhTwitterLogo />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://discordapp.com/users/chrisk-7777#2964">
              <PhDiscordLogo />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/@chrisk_7777/">
              <PhYoutubeLogo />
            </a>
          </li>
        </ul>
        <div className={styles.links}>
          <a target="_blank" href="https://www.workinggears.com/">
            <img src="/workinggears.png" alt="Working Gears" />
            <div>
              <h3>Working Gears PTY LTD</h3>
              <p>My solo-dev agency.</p>
            </div>
          </a>
          <a target="_blank" href="https://imawakatta.com/">
            <img src="/imawakatta.png" alt="ImaWakatta" />
            <div>
              <h3>ImaWakatta</h3>
              <p>Our passion project - A contextual, fun Japanese language learning site</p>
            </div>
          </a>
          <a target="_blank" href="https://excalibatta.chrisk-7777.com/">
            <img src="/excalibatta.png" alt="Excalibatta" />
            <div>
              <h3>Excalibatta</h3>
              <p>A ExcaliburJS port of Drew Conley's Ciabatta Revenge game</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
