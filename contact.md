---
layout: page
title: Contact
permalink: /contact
---

<!-- Slider Start -->
<section id="global-header">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="block">
                {% capture contact_header %}{% include_relative contact/header.md %}{% endcapture %}
                {{ contact_header | markdownify }}
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
            {% capture contact_info %}{% include_relative contact/info.md %}{% endcapture %}
            {{ contact_info | markdownify }}
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
          {% capture contact_footer %}{% include_relative contact/footer.md %}{% endcapture %}
          {{ contact_footer | markdownify }}
        </div>
      </div>
    </div>
  </div>
</section>
