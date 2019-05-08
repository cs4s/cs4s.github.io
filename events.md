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
                {% capture events_header %}{% include_relative events/header.md %}{% endcapture %}
                {{ events_header | markdownify }}
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
          {% capture events_footer %}{% include_relative events/footer.md %}{% endcapture %}
          {{ events_footer | markdownify }}
        </div>
      </div>
    </div>
  </div>
</section>
