---
layout: page
title: Home
permalink: /
---

<!-- Slider Start -->
<section id="slider">
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-2">
        <div class="block">
          <h1 class="animated fadeInUp">NEWCASTLE CS4S<br>Teacher Professional Learning Programs</h1>
          <p class="animated fadeInUp">Want to learn how to Code?</p>
          <p class="animated fadeInUp">Want to learn how to teach Coding to your students?</p>
          <p class="animated fadeInUp">We can help!</p>
          <p class="animated fadeInUp">Our professional learning programs are NESA Accredited and FREE!</p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Wrapper Start -->
<section id="intro">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="block">
        {% capture home_introduction %}{% include_relative home/introduction.md %}{% endcapture %}
        {{ home_introduction | markdownify }}
        </div>
      </div><!-- .col-md-6 close -->
      <div class="col-md-6 col-sm-12">
        <div class="block">
          <img src="img/coding-img.png" alt="Img">
        </div>
      </div><!-- .col-md-6 close -->
    </div>
  </div>
</section>
<section id="feature">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="block">
          <img src="img/teacher-img.png" alt="Img">
        </div>
      </div><!-- .col-md-6 close -->
      <div class="col-md-6 col-sm-12">
        {% capture home_feedback %}{% include_relative home/feedback.md %}{% endcapture %}
        {{ home_feedback | markdownify }}
      </div>
    </div>
  </div>
</section>
<!-- Call to action Start -->
<section id="call-to-action">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block">
        {% capture home_footer %}{% include_relative home/footer.md %}{% endcapture %}
        {{ home_footer | markdownify }}
        </div>
      </div>
    </div>
  </div>
</section>