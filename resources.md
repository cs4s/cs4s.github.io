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
          <!-- Resources from 2019 -->
          <h2>2019 Professional Learning</h2>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {% for resource in site.data.resources_2019 %}
            <tr>
              <td>
                <a href="{{ resource.Link }}">{{ resource.Name }}</a>
              </td>
              <td>{{ resource.Description }}</td>
              <td>{{ resource.Date }}</td>
            </tr>
            {% endfor %}
            </tbody>
          </table>
          <!-- Resources from 2018 -->
          <h2>2018 Professional Learning</h2>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {% for resource in site.data.resources_2018 %}
            <tr>
              <td>
                <a href="{{ resource.Link }}">{{ resource.Name }}</a>
              </td>
              <td>{{ resource.Description }}</td>
              <td>{{ resource.Date }}</td>
            </tr>
            {% endfor %}
            </tbody>
          </table>
          <!-- Resources from 2017 -->
          <h2>2017 Workshops</h2>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {% for resource in site.data.resources_2017 %}
            <tr>
              <td>
                <a href="{{ resource.Link }}">{{ resource.Name }}</a>
              </td>
              <td>{{ resource.Description }}</td>
              <td>{{ resource.Date }}</td>
            </tr>
            {% endfor %}
            </tbody>
          </table>
          <!-- Resources from 2016 -->
          <h2>2016 Workshops</h2>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {% for resource in site.data.resources_2016 %}
            <tr>
              <td>
                <a href="{{ resource.Link }}">{{ resource.Name }}</a>
              </td>
              <td>{{ resource.Description }}</td>
              <td>{{ resource.Date }}</td>
            </tr>
            {% endfor %}
            </tbody>
          </table>
          <!-- Other Resources -->
          <h2>Other Workshops</h2>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {% for resource in site.data.resources_other %}
            <tr>
              <td>
                <a href="{{ resource.Link }}">{{ resource.Name }}</a>
              </td>
              <td>{{ resource.Description }}</td>
              <td>{{ resource.Date }}</td>
            </tr>
            {% endfor %}
            </tbody>
          </table>
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
