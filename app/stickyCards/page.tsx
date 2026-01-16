import stickyCards from '@/app/stickyCards/stickyCards';
import React from 'react'
import styles from "./stickyCards.module.css";
const page = () => {
  return (
    <div>
      <section className="intro">
        <h1>The Foundation</h1>
      </section>
      <stickyCards/>
      <section className="outro">
        <h1>Ends in the Form</h1>
      </section>
    </div>
  )
}

export default page
