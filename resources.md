---
layout: page
title: Resources
permalink: /resources
---

<!-- Slider Start -->
<section id="global-header">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="block">
                {% capture resources_header %}{% include_relative resources/header.md %}{% endcapture %}
                {{ resources_header | markdownify }}
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
          {% capture resources_2018 %}{% include_relative resources/resources_2018.md %}{% endcapture %}
          {{ resources_2018 | markdownify }}

          {% capture resources_2017 %}{% include_relative resources/resources_2017.md %}{% endcapture %}
          {{ resources_2017 | markdownify }}

          {% capture resources_2016 %}{% include_relative resources/resources_2016.md %}{% endcapture %}
          {{ resources_2016 | markdownify }}

          {% capture resources_other %}{% include_relative resources/resources_other.md %}{% endcapture %}
          {{ resources_other | markdownify }}
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
          {% capture resources_footer %}{% include_relative resources/footer.md %}{% endcapture %}
          {{ resources_footer | markdownify }}
        </div>
      </div>
    </div>
  </div>
</section>
