---
layout: page
title: Links
permalink: /links
---

<!-- Slider Start -->
<section id="global-header">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="block">
                {% capture links_header %}{% include_relative links/header.md %}{% endcapture %}
                {{ links_header | markdownify }}
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
          {% capture links_websites %}{% include_relative links/links_websites.md %}{% endcapture %}
          {{ links_websites | markdownify }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="block">
          {% capture links_online_courses %}{% include_relative links/links_online_courses.md %}{% endcapture %}
          {{ links_online_courses | markdownify }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="block">
          {% capture links_lessons %}{% include_relative links/links_lessons.md %}{% endcapture %}
          {{ links_lessons | markdownify }}
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
          {% capture links_footer %}{% include_relative links/footer.md %}{% endcapture %}
          {{ links_footer | markdownify }}
        </div>
      </div>
    </div>
  </div>
</section>
