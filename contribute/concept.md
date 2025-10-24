---
layout: default
title: Contribute!
description: Help us by adding another concept to our database
---

{% include contribute-tabs.html %}

<div style="padding: 0.5rem 1rem; margin: 1.5rem 0; color: #7a7a7a; text-align: center;"><span class="tag red">Warning</span> While I appreciate the enthusiasm, contributions are no longer being accepted.</div>

# Add another concept to the knowledge base.

<br>
Help us expand our database by adding a concept below.

> If you make an error, you can re-create the document with an updated description by adding a new one with the same name. If you make an error in the name, please contact us.

<script src="style/popper.min.js"></script>
<link rel="stylesheet" href="style/bootstrap-ns.min.css" >
<script src="style/jquery.min.js"></script>
<script src="style/bootstrap.min.js"></script>
<link href="style/fileinput.min.css" media="all" rel="stylesheet" type="text/css" >
<script src="style/fileinput.min.js"></script>
<script src="style/theme.js"></script>
<script src="style/sweetalert.min.js"></script>

<div class="twbs">
<form id="submit_form">
  <div class="form-row">
   <div class="form-group col-md-6" style="padding-left: 0;">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" name="name" aria-describedby="name_help" placeholder="Concept Name" required disabled>
    <small id="name_help" class="form-text text-muted">Please provide a valid URI.</small>
  </div>
    <div class="form-group col-md-6" style="padding-right: 0;">
    <label for="desc">Description</label>
    <input type="text" class="form-control" id="desc" name="desc" aria-describedby="desc_help" placeholder="Concept Description" required disabled>
    <small id="desc_help" class="form-text text-muted">Please be as specific as you can.</small>
  </div>
  </div>
  <button type="button" class="btn" style="background-color: #999; color: #fff; cursor: not-allowed;" id="submit_button" disabled>Submit</button>
</form>
</div>

<script>
$('#submit_form').submit(function(event) {
  event.preventDefault();
  $.ajax( {
    url: 'https://call-by-meaning.onrender.com/new/concept/',
    type: 'POST',
    data: $('#submit_form').serialize(),
    timeout: 15000,
    processData: false,
    success: function(data) {
      $('#submit_form')[0].reset();
      swal({
        title: "Thank you! 😊",
        text: data,
        icon: "success",
      });
    },
    error: function() {
      swal({
        title: "Something went wrong! 😕",
        text: "Try again in a few minutes.",
        icon: "error",
      });
    }
  });
});
</script>
