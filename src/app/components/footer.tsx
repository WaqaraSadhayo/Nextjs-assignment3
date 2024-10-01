import React from "react";
import Link from "next/link";
import Image from "next/image";
import instagram from "../public/images/instagram.png";
import facebook from "../public/images/facebook.png";
import twitter from "../public/images/twitter.png";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <ul>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms of Service</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
        <div className={styles.socialMedia}>
          <Link href="#">
            <Image src={facebook} alt="Facebook" width={50} height={50} />
          </Link>
          <Link href="#">
            <Image src={twitter} alt="Twitter" />
          </Link>
          <Link href="#">
            <Image src={instagram} alt="Instagram" />
          </Link>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
