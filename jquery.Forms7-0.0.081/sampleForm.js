<link  type="text/css" rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/start/jquery-ui.css" /> 
<!-- Reference jQuery on the Google CDN --> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> 
<!-- Reference jQueryUI on the Google CDN --> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script> 
<!-- Reference SPServices on cdnjs (Cloudflare) --> 
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/0.7.2/jquery.SPServices-0.7.2.min.js"></script> 

<script type="text/javascript" src="http://www.sharepointhillbilly.com/demos/SiteAssets/jquery.Forms7-0.0.081.js"></script>

<style type="text/css">

	.error
	{font-family:'Tahoma',sans-serif;font-size:10px;text-align:left;color:red;}

</style>

<script type="text/javascript">

	$(document).ready(function() {
	     
	     //Initialization function. Tells Forms7 which Query String Variable
	     //has the ID of the form, and the name of the list to read data from
	     $("#sampleForm").Forms7Initialize({
	     	queryStringVar: "formID",
	     	listName: "Contacts"
	     });

		//helper function to load a drop downlist
		//assumes there is a list called "States"	     
	     $("#StateSelect").Forms7LoadDDL ({
			listName: "States",	
			firstOptionText: "Select State",
			fieldName: "Title"
		});

	    //apply the jQueryUI calendar to the BirthDate field
		$( "#BirthDate" ).datepicker({
	            changeMonth: true,
	            changeYear: true
	        });
	     
	 });
	 
	 //function to load the city drop down list to only show cities for the selected state	 
	 function LoadCities(stateID)
	 {
	 	//helper function to load a cascading dropdown list
	 	//in this example it would load Cities from a list called "Cities"
	 	//where that list had a lookup field called "State" and it would
	 	//use the ID of the selected State
	     $("#CitySelect").Forms7LoadChildDDL({
			parentID: stateID,
			parentField: "State",
			listName: "Cities",	
			firstOptionText: "Select City",
			fieldName: "Title"
		});
	 }

	function SubmitForm()
	{
		//When the form is submitted store it to the specified list
		//also pasas in the x and y offset of error messages for elements
		//this allows you to change their location in reference to the form field
		$("#sampleForm").Forms7Submit({
	     	listName: "Contacts",
	     	errorOffsetTop: 10,
	     	errorOffsetLeft: 5,
            completefunc: function(id) { 
				alert("Save was successful. ID = " + id);
				window.location = window.location.pathname + "?formID=" + id; 
			}
	     });

	}
		
</script>

<div id="sampleForm" >
<h3>To view/edit an existing form, append the query string variable "formID=" followed by the ID of the form to view/edit. (ie <a href="SampleForm.aspx?formID=2">/SitePages/SampleForm.aspx?formID=2</a>)</h3>
<table width="100%" cellpadding="10" cellspacing="0" >

<tr bgcolor="silver">
<td class='formLabel'>First Name:</td>
<td class='formLabel'><input title="First Name" id='FirstName' class='required formInput' maxlength="40"></td>
<td class='formLabel'>Middle Name:</td>
<td class='formLabel'><input title="Middle Name" id='MiddleName' class='formInput' maxlength="40"></td>
<td class='formLabel'>Last Name:</td>
<td class='formLabel'><input title="Last Name" id='LastName' class='required formInput'maxlength="40"></td>
</tr>
<tr bgcolor="silver">
<td class='formLabel'>SSN:</td>
<td class='formLabel'><input title="SSN" id='SSN' class='formInput' onkeyup="formatSSN(this);" maxlength="11"validate="validSSN"></td>
<td class='formLabel'>Suffix:</td>
<td class='formLabel'><select title="Suffix" id='Suffix' class='formSelectSmall'><option> None </option><option>Jr</option><option>Sr</option><option>III</option><option>IV</option></select></td>
<td class='formLabel'>E-mail Address</td>
<!-- Email address is "promoted" to the SharePoint List field "Title", this is denoted by
     the attribute listFieldName='Title' -->
<td class='formLabel'><input title="Email Address" id="EmailAddress" listFieldName='Title' class='required formInput' maxlength="40" validate="validEmail"></td>
</tr>
<tr bgcolor="silver">
<td class='formLabel'>Address:</td>
<td class='formLabelLong' colspan="5"><input title="Address" id='Address' class='formInputLong' maxlength="120"></td>
</tr>
<tr bgcolor="silver">
<td class='formLabel'>State:</td>
<td class='formLabel'><select title="State" id='StateSelect' class='formInput' onchange="LoadCities(this.value);"></select></td>
<td class='formLabel'>City:</td>
<td class='formLabel'><select title="City" id='CitySelect' class='formInput' ></select></td>
<td class='formLabel'>Zip Code:</td>
<td class='formLabel'><input title="Zip Code" id='Zip' class='formInput' maxlength="10"></td>
</tr>
<tr bgcolor="silver">
<td class='formLabel'>Home Phone:</td>
<td class='formLabel'><input title="Home Phone" id='HomePhone' class='formInput' validate="validPhone" onkeyup="formatPhone(this);" maxlength="12"></td>
<td class='formLabel'>Cell Phone</td>
<td class='formLabel'><input title="Cell Phone" id="CellPhone" class='formInput ' validate="validPhone" onkeyup="formatPhone(this);" maxlength="12"></td>
<td class='formLabel'>Birth Date:</td>
<td class='formLabel'><input title="Birth Date" id='BirthDate' class='required formInput ' isDate="yes" validate="validDate" onchange="validDate(this.value,this);"></td>
</tr>
<tr bgcolor="silver">
<td class='formLabelNoWidth' >Comments:</td>
<td class='formLabelNoWidth' colspan="5"><textarea cols="50" rows="3" id="Comments"></textarea></td>
</tr>
<tr bgcolor="silver"><td class='formLabelNoWidth' colspan="6">Can we email you? <input class="required" type="radio" value="Yes" name="CanEmail" id="CanEmailYes">Yes <input type="radio" value="No" name="CanEmail" id="CanEmailNo">No</td></tr>
</table>
</div>
<br>
<input type="button" value="Submit/Update Form" onclick="SubmitForm();">
