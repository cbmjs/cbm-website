---
layout: default
title: Contribute!
description: Help us by adding another function to our database
---

{% include contribute-tabs.html %}

# Add another function to the knowledge base.

<br>
Help us expand our database by adding a function below.

> If you make an error, you can re-create the document with the updated values (even a new .js file) by adding a new one with the same name. If you make an error in the name, please contact us.

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
  <div class="form-group">
    <label for="func_name">Name</label>
    <input type="text" class="form-control" id="func_name" name="name" aria-describedby="func_name_help" placeholder="Function Name" required>
    <small id="func_name_help" class="form-text text-muted">Please try to use a descriptive, but small name.</small>
  </div>
  <div class="form-group">
    <label for="func_desc">Description</label>
    <input type="text" class="form-control" id="func_desc" name="desc" aria-describedby="func_desc_help" placeholder="Function Description" required>
    <small id="func_desc_help" class="form-text text-muted">Please be as specific as you can. When describing arguments enclose their name in ` .</small>
  </div>
  <div class="form-row">
   <div class="form-group col-md-6" style="padding-left: 0;">
    <label for="func_args">Input Arguments</label>
    <input type="text" class="form-control" id="func_args" name="argsNames" aria-describedby="func_args_help" placeholder="Input concepts">
    <small id="func_args_help" class="form-text text-muted">Provide valid URIs in the format: arg1,arg2</small>
  </div>
    <div class="form-group col-md-6" style="padding-right: 0;">
    <label for="func_in_units">Input Units</label>
    <input type="text" class="form-control" id="func_in_units" name="argsUnits" aria-describedby="func_in_units_help" placeholder="Input Units">
    <small id="func_in_units_help" class="form-text text-muted">Provide valid URIs in the format: unit1,unit2. If a unit can't be defined for a concept put "-" in its place.</small>
  </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6" style="padding-left: 0;">
    <label for="func_returns">Output Arguments</label>
    <input type="text" class="form-control" id="func_returns" name="returnsNames" aria-describedby="func_returns_help" placeholder="Output concepts" required>
    <small id="func_returns_help" class="form-text text-muted">Provide valid URIs in the format: arg1,arg2</small>
  </div>
    <div class="form-group col-md-6" style="padding-right: 0;">
    <label for="func_out_units">Output Units</label>
    <input type="text" class="form-control" id="func_out_units" name="returnsUnits" aria-describedby="func_out_units_help" placeholder="Output Units" required>
    <small id="func_out_units_help" class="form-text text-muted">Provide valid URIs in the format: unit1,unit2. If a unit can't be defined for a concept put "-" in its place.</small>
  </div>
  </div>
  <input type="button" class="btn btn-info" id="isAPI" style="margin: 1rem 0;" data-toggle="button" aria-pressed="false" autocomplete="off" value='This is an API!'>
  <div class="form-group" id="source-file">
    <label for="func_code">Source Code File</label>
    <input id="func_code" name="func_code" aria-describedby="func_code" placeholder="Function .js file" type="file" class="file" data-hidden-thumbnail-content= "false" data-show-preview="false" data-show-remove="false" data-show-cancel="false" data-allowed-file-extensions='["js"]' data-show-upload="false" required>
    <small id="func_code" class="form-text text-muted">Only .js files are accepted. This <strong><em>must</em></strong> have the same name with the function name.</small>
  </div>
  <div class="form-group" id="api_link">
    <label for="func_name">API Endpoint</label>
    <input type="text" class="form-control" id="api_link" name="api_link" aria-describedby="api_link_help" placeholder="API Endpoint" required>
    <small id="api_link_help" class="form-text text-muted">Please provide the full URI, including the host.</small>
  </div>
  <div id="spaceDiv"></div>
  <button type="submit" class="btn" style="background-color: #1E8EF3; color: #fff" id="submit_button">Submit</button>
</form>
</div>

<script>
var source_file, api_link;
$('#api_link').hide();
api_link = $('#api_link').detach();
$('#isAPI').on("click", function(event) {
  if (!$('#isAPI').hasClass('active')) {
    $('#source-file').hide('slow', function () {
      source_file = $('#source-file').detach();
      api_link.insertAfter('#spaceDiv');
      $('#api_link').show('slow');
    });
  } else {
    $('#api_link').hide('slow', function () {
      api_link = $('#api_link').detach();
      source_file.insertAfter('#spaceDiv');
      $('#source-file').show('slow');
    });
  }
});
$('#submit_form').submit(function(event) {
  event.preventDefault();
  var dataToSend = new FormData(this);
  dataToSend.append('isApi', $('#isAPI').hasClass('active'));
  $.ajax( {
    url: 'https://call-by-meaning.herokuapp.com/new/function/',
    type: 'POST',
    data: dataToSend,
    timeout: 15000,
    processData: false,
    contentType: false,
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