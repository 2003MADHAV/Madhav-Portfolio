$(document).ready(function() {
  // Initial setup
  $("#all").css("background-color", "#F05423");
  $(".content").hide();
  $("#one, #two, #three, #four, #five, #six").show("slow");

  // Function to update active section and background colors
  function updateSection(activeId) {
      $(".content").hide("slow");
      $(`#${activeId}`).show("slow");

      $("#all, #bcard, #social, #books, #logos, #poster, #letters").css("background-color", "#111111");
      $(`#${activeId}`).css("background-color", "#F05423");
  }

  $("#all").click(function() {
      $("#one, #two, #three, #four, #five, #six").show("slow");
      updateSection("all");
  });

  $("#bcard").click(function() {
      updateSection("bcard");
      $("#three").show("slow");
  });

  $("#logos").click(function() {
      updateSection("logos");
      $("#one").show("slow");
  });

  $("#books").click(function() {
      updateSection("books");
      $("#four").show("slow");
  });

  $("#poster").click(function() {
      updateSection("poster");
      $("#two").show("slow");
  });

  $("#letters").click(function() {
      updateSection("letters");
      $("#six").show("slow");
  });
});
