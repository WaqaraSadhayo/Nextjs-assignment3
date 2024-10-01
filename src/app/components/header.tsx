import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link href="#">Portfolio</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>Contact us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <div className={styles.search}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search about me"
            />
          </div>
        </ul>
      </div>
    </>
  );
}
