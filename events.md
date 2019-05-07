---
layout: page
title: Events
permalink: /events
---

<!-- Slider Start -->
<section id="global-header">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="block">
                  <h1>EVENTS</h1>
                  <b><p><big>We have included information about our upcoming professional learning events on this page.</big></p></b>
              </div>
          </div>
      </div>
  </div>
</section>
<!-- Portfolio Start -->
<section id="portfolio-work">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block">

          {% capture events_introduction %}{% include_relative events/introduction.md %}{% endcapture %}
          {{ events_introduction | markdownify }}

          {% capture events_details %}{% include_relative events/details.md %}{% endcapture %}
          {{ events_details | markdownify }}

        </div>
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
          <h2>Want to know when we open registration for new professional learning events?</h2>
          <b><p><big>To find out when registration for these events open or new professional learning events are announced, please sign up to the mailing list.</big></p></b>
          <a class="btn btn-default btn-call-to-action" href="https://goo.gl/forms/uhFt9j740ELhKKxK2">Sign up to the Mailing List</a>
        </div>
      </div>
    </div>
  </div>
</section>
