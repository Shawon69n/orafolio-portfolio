import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css'
export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      
      <div className={styles.links}>
        <Link href="/">
          <p className={router.pathname === '/' ? styles.active : ''}>Home</p>
        </Link>
        <Link href="/about">
          <p className={router.pathname === '/about' ? styles.active : ''}>About</p>
        </Link>

        
            <img className='ml-16  w-7 h-7 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJjYQyaSAVTPNs8Sd-wCOdvJyPtSgYhSkh2713TBBqZN7n38M" alt="" />
        

        <Link href="/works">
          <p className={router.pathname === '/works' ? styles.active : ''}>Works</p>
        </Link>
        <Link href="/contact">
          <p className={router.pathname === '/contact' ? styles.active : ''}>Contact</p>
        </Link>
      </div>
    </nav>
  );
}
