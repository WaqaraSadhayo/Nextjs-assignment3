import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Service</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
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
