$(document).ready(function() {

	var header_elements = $(".program-details-header")
	var programs = [];

	if (header_elements.length !== 0) {

		var program_details_div = $("#program-details-content");
		var accordion_div = $("<div id='accordion' class='panel-group' aria-multiselectable='true'></div>")
		program_details_div.after(accordion_div);

		// Get all of the outcomes and tables into an array, removing this text from the page (to be put into an accordion in the next steps)
		$.each(header_elements, function(index, header_element) {

			program = {};
			program["header_id"] = header_element.id;
			program["header_text"] = header_element.innerHTML;

			var program_content = '';
			var next_elements = [];

			// Find all elements between each outcome header to the next header (or until the footer for the last section)
			if (index !== header_elements.length - 1) {
				next_elements = $("#" + header_element.id).nextUntil("#" + header_elements[index + 1].id);
			} else {
				next_elements = $("#" + header_element.id).nextUntil("footer");
			}

			$.each(next_elements, function(index, content_element) {
				program_content += content_element.outerHTML + '\n';
			});

			program["content"] = program_content;
			programs.push(program);

			// Add temporary divs to be replaced later with a template for the accordion
			var added_program = $("<div id='card-" + program["header_id"] +  "' class='card'></div>");
			accordion_div.append(added_program);

			// Remove the content with the outcomes (they will be added later again in the accordion)
			next_elements.remove();
			header_element.remove();
			
		});
	}

	// Create the accordion control that shows the outcomes that the session covers
	if (programs.length !== 0) {

		var program_section_template = "";

		var template_div = $("<div id='template'></div>")
		template_div.load("../js/program_template.html", function() {

			// For each set of outcomes, there will be a panel in the accordion
			$.each(programs, function(index, program) {

				var added_program = $("#card-" + program["header_id"]);

				var program_section_content = template_div[0].innerHTML.replace(/HEADING_ID/g, "heading-" + program["header_id"])
					.replace(/COLLAPSE_ID/g, "collapse-" + program["header_id"])
					.replace(/HEADING_GOES_HERE/g, program["header_text"])
                    .replace(/CONTENT_GOES_HERE/g, program["content"]);
                    
                console.log(program_section_content);

				added_program.html(program_section_content);
				
			});

		});

	}
});