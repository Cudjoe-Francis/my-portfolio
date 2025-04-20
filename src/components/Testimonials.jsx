import React from 'react'
import "../css/Testimonials.css"

const Testimonials = () => {
  return (
    <section class="testimonials">
    <div class="header">
      <h2>What people say</h2>
      <p>Discover what our satisfied customers have to say about their experiences with our products/services.</p>
    </div>

    <div class="cards">
      <div class="card">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Sarah Johnson" class="avatar" />
        <h3>Sarah Johnson</h3>
        <p class="role">Small Business Owner</p>
        <p class="message">Since integrating this solution into our workflow, we’ve experienced a significant improvement in efficiency and collaboration.</p>
      </div>

      <div class="card">
        <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="David Patel" class="avatar" />
        <h3>David Patel</h3>
        <p class="role">Project Manager</p>
        <p class="message">I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.</p>
      </div>

      <div class="card">
        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Emily Carter" class="avatar" />
        <h3>Emily Carter</h3>
        <p class="role">Operations Manager</p>
        <p class="message">The tool we’ve adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.</p>
      </div>
    </div>
  </section>
  )
}

export default Testimonials