<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/0.7.1a/jquery.SPServices-0.7.1a.min.js"></script>

<script type="text/javascript" src="http://www.sharepointhillbilly.com/demos/SiteAssets/jquery.Forms7-0.0.081.js"></script>
<link  type="text/css" rel="stylesheet" href="http://www.sharepointhillbilly.com/demos/SiteAssets/modern-grid.css" /> 

<style type="text/css">
.label
{
	vertical-align:top;
	horizontal-align:left;
	font-size:large;
}
</style>

<script type="text/javascript">

function InstallF7()
{
	 
	 if ($("#listName").val().length == 0)
	 {
	 	alert("Seriously?? Enter a list name... I think that much is pretty obvious.");
	 	return;
	 }
	 $().Forms7Install ({
     	listName: $("#listName").val()
     });

	listName = $("#listName").val();
	$("#minimalForm").val($("#minformRaw").val().replace(/F7_LIST_NAME/g,'"'+listName+'"'));
}
		
</script>

<div class="row">
	<div class="column five label">List&nbsp;Name:<input id="listName" type="text"> <input type="button" value="Install Forms7" onclick="InstallF7();"></div>
</div>
<div class="row">
	<div class="column five label">Minimal Form:<br><textarea id="minimalForm" cols="100" rows="25"></textarea></div>
</div>

<textarea style="display:none" id="minformRaw">

<link  type="text/css" rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/start/jquery-ui.css" /> 
<!-- Reference jQuery on the Google CDN --> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<!-- Reference jQueryUI on the Google CDN --> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script> 
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/0.7.1a/jquery.SPServices-0.7.1a.min.js"></script>

<!-- if you put Forms7 in a location other than SiteAssets of your current site, be sure to update this reference -->
<script src="../SiteAssets/jQuery.Forms7-0.0.03.js"></script>

<style type="text/css">

	.error
	{font-family:'Tahoma',sans-serif;font-size:10px;text-align:left;color:red;}

</style>

<script type="text/javascript">

	$(document).ready(function() {
	     
	     //Initialization function. Tells Forms7 which Query String Variable
	     //has the ID of the form, and the name of the list to read data from
	     $("#minimalForm").Forms7Initialize({
	     	queryStringVar: "formID",
	     	listName: F7_LIST_NAME
	     });

	});
	
	function SubmitForm()
	{
		//When the form is submitted store it to the specified list
		//also pasas in the x and y offset of error messages for elements
		//this allows you to change their location in reference to the form field
		$("#minimalForm").Forms7Submit({
	     	listName: F7_LIST_NAME,
	     	errorOffsetTop: 10,
	     	errorOffsetLeft: 5,
            completefunc: function(id) { 
				alert("Save was successful. ID = " + id);
				window.location = window.location.pathname + "?formID=" + id; 
			}
	     });

	}
		
</script>

<div id="minimalForm" >
Title: <input type="text" id="TitleField" listFieldName='Title' class='required formInput' >
</div>
<input type="button" value="Submit/Update Form" onclick="SubmitForm();">

</textarea>