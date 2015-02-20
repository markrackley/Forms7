<link  type="text/css" rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/start/jquery-ui.css" /> 

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script> 
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/0.7.2/jquery.SPServices-0.7.2.min.js"></script> 

<script type="text/javascript" src="http://www.sharepointhillbilly.com/demos/SiteAssets/jquery.Forms7-0.0.081.js"></script>

<script type="text/javascript" src="/_layouts/15/clienttemplates.js" ></script> 
<script type="text/javascript" src="/_layouts/15/clientforms.js" ></script> 
<script type="text/javascript" src="/_layouts/15/clientpeoplepicker.js" ></script> 
<script type="text/javascript" src="/_layouts/15/autofill.js" ></script> 
<script type="text/javascript" src="/_layouts/15/SP.js" ></script> 
<script type="text/javascript" src="/_layouts/15/SP.runtimejs" ></script> 
<script type="text/javascript" src="/_layouts/15/SP.corejs" ></script> 


<script type="text/javascript">

	$(document).ready(function() {

	     
	     //Initialization function. Tells Forms7 which Query String Variable
	     //has the ID of the form, and the name of the list to read data from
	     $("#contact").Forms7Initialize({
	     	queryStringVar: "formID",
	     	listName: "timesheet",
	     	completefunc: function() { 
				SumHours();
			}

	     });
	     
 		$( "#weekEnding" ).datepicker({
	            changeMonth: true,
	            changeYear: true
        });

		//helper function to load a drop downlist
		//assumes there is a list called "States"	     
	     $("#projects").Forms7LoadDDL ({
			listName: "Projects",	
			firstOptionText: "Select Project",
			fieldName: "Title"
		});
		

	 });
	 
	function SubmitForm()
	{
		//When the form is submitted store it to the specified list
		//also pasas in the x and y offset of error messages for elements
		//this allows you to change their location in reference to the form field
		$("#contact").Forms7Submit({
	     	listName: "timesheet",
	     	errorOffsetTop: 10,
	     	errorOffsetLeft: 5,
            completefunc: function(id) { 
				alert("Save was successful. ID = " + id);
				window.location = window.location.pathname + "?formID=" + id; 
			}
	     });

	}
		
	function SumHours()
	{
	    var total=0;
		$("input.hours").each(function()
		{
			total+= ($(this).val()*1);
		});
		$("#Total").html("<label class='totalLabel'>"+total+"</label>");
	}
	
	function RemoveRow(cell)
	{
		if ($(cell).closest("tr").attr("data-Forms7Parent") === undefined)
		{
			$(cell).closest("tr").find('input').each(function() {
	            $(this).val('');
		  });
		} else {
			$(cell).closest("tr").remove();
		}
		SumHours();
	}
	
		
</script>

<style type="text/css">

.error
{font-family:'Tahoma',sans-serif;font-size:10px;text-align:left;color:red;}


body, h1, form, fieldset, input, textarea {
	margin: 0; padding: 0; border: 0; outline: none;
}

html {
	height: 100%;
}

.contact{
	background: #728eaa;
	background: -moz-linear-gradient(top, #25303C 0%, #728EAA 100%); /* firefox */	
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#25303C), color-stop(100%,#728EAA)); /* webkit */
	font-family: sans-serif; 
}

#contact {
	width: 430px; margin: 5px auto; padding: 5px 5px;
	background: #c9d0de; border: 1px solid #e1e1e1;
	-moz-box-shadow: 0px 0px 8px #444;
	-webkit-box-shadow: 0px 0px 8px #444;
}

h1 {
	font-size: 35px; color: #445668; text-transform: uppercase;
	text-align: center; margin: 0 0 35px 0; text-shadow: 0px 1px 0px #f2f2f2;
}

.thisLabel {
	clear: left; margin: 3px 5px 0 0; width: 95px;
	text-align: right; font-size: 16px; color: #445668; 
	text-transform: uppercase; text-shadow: 0px 1px 0px #f2f2f2;
}

.totalLabel {
	float: left; clear: left; margin: 3px 5px 0 0; width: 50px;
	text-align: right; font-size: 16px; color: #445668; 
	text-transform: uppercase; text-shadow: 0px 1px 0px #f2f2f2;
}

.buttonClass {

	width: 350px; height: 35px; padding: 5px 5px 0px 5px; margin: 0 0 5px 0; 
	background: #5E768D;
	background: -moz-linear-gradient(top, #546A7F 0%, #5E768D 20%); /* firefox */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#546A7F), color-stop(20%,#5E768D)); /* webkit */
	border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;
	-moz-box-shadow: 0px 1px 0px #f2f2f2;-webkit-box-shadow: 0px 1px 0px #f2f2f2;
	font-family: sans-serif; font-size: 16px; color: #f2f2f2; text-transform: uppercase; text-shadow: 0px -1px 0px #334f71; 
	
	
}
.inputClass {
	width: 325px; height: 35px; padding: 5px 5px 0px 5px; margin: 0 0 5px 0;
	background: #5E768D;
	background: -moz-linear-gradient(top, #546A7F 0%, #5E768D 20%); /* firefox */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#546A7F), color-stop(20%,#5E768D)); /* webkit */
	border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;
	-moz-box-shadow: 0px 1px 0px #f2f2f2;-webkit-box-shadow: 0px 1px 0px #f2f2f2;
	font-family: sans-serif; font-size: 16px; color: #f2f2f2; text-transform: uppercase; text-shadow: 0px -1px 0px #334f71; 
}
	.inputClass ::-webkit-input-placeholder  {
    	color: #a1b2c3; text-shadow: 0px -1px 0px #38506b;  
	}
	.inputClass :-moz-placeholder {
	    color: #a1b2c3; text-shadow: 0px -1px 0px #38506b; 
	}
.inputSelectSmall {
	width: 200px; height: 35px; padding: 5px 5px 0px 5px; margin: 0 0 5px 0; 
	background: #5E768D;
	background: -moz-linear-gradient(top, #546A7F 0%, #5E768D 20%); /* firefox */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#546A7F), color-stop(20%,#5E768D)); /* webkit */
	border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;
	-moz-box-shadow: 0px 1px 0px #f2f2f2;-webkit-box-shadow: 0px 1px 0px #f2f2f2;
	font-family: sans-serif; font-size: 16px; color: #f2f2f2; text-transform: uppercase; text-shadow: 0px -1px 0px #334f71; 
}

	.inputSelectSmall ::-webkit-input-placeholder  {
    	color: #a1b2c3; text-shadow: 0px -1px 0px #38506b;  
	}
	.inputSelectSmall :-moz-placeholder {
	    color: #a1b2c3; text-shadow: 0px -1px 0px #38506b; 
	}

.inputClassSmall {
	width: 20px; height: 35px; padding: 5px 5px 0px 5px; margin: 0 0 5px 0; 
	background: #5E768D;
	background: -moz-linear-gradient(top, #546A7F 0%, #5E768D 20%); /* firefox */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#546A7F), color-stop(20%,#5E768D)); /* webkit */
	border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;
	-moz-box-shadow: 0px 1px 0px #f2f2f2;-webkit-box-shadow: 0px 1px 0px #f2f2f2;
	font-family: sans-serif; font-size: 16px; color: #f2f2f2; text-transform: uppercase; text-shadow: 0px -1px 0px #334f71; 
}
	.inputClassSmall ::-webkit-input-placeholder  {
    	color: #a1b2c3; text-shadow: 0px -1px 0px #38506b;  
	}
	.inputClassSmall :-moz-placeholder {
	    color: #a1b2c3; text-shadow: 0px -1px 0px #38506b; 
	}

textarea {
	width: 260px; height: 170px; padding: 3px 5px 0px 5px; margin: 0 0 20px 0; 
	background: #5E768D;
	background: -moz-linear-gradient(top, #546A7F 0%, #5E768D 20%); /* firefox */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#546A7F), color-stop(20%,#5E768D)); /* webkit */
	border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;
	-moz-box-shadow: 0px 1px 0px #f2f2f2;-webkit-box-shadow: 0px 1px 0px #f2f2f2;
	font-family: sans-serif; font-size: 16px; color: #f2f2f2; text-transform: uppercase; text-shadow: 0px -1px 0px #334f71; 
}
	textarea::-webkit-input-placeholder  {
    	color: #a1b2c3; text-shadow: 0px -1px 0px #38506b;  
	}
	textarea:-moz-placeholder {
	    color: #a1b2c3; text-shadow: 0px -1px 0px #38506b; 
	}
	
.inputClass :focus, textarea:focus {
	background: #728eaa;
	background: -moz-linear-gradient(top, #668099 0%, #728eaa 20%); /* firefox */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#668099), color-stop(20%,#728eaa)); /* webkit */
}

input[type=button] {
	width: 300; height: 52px; float: right; padding: 10px 15px; margin: 0 15px 0 0;
	-moz-box-shadow: 0px 0px 5px #999;-webkit-box-shadow: 0px 0px 5px #999;
	border: 1px solid #556f8c;
	background: -moz-linear-gradient(top, #718DA9 0%, #415D79 100%); /* firefox */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#718DA9), color-stop(100%,#415D79)); /* webkit */
	cursor: pointer;
}
</style>


<div id="contact" class="contact">
	<h1>timesheet entry</h1>
		<fieldset>
			<label class="thisLabel" for="name" >Employee:</label>
			<div class="inputClass" id="peoplePicker1" listFieldName="Employee" data-Forms7Type="PeoplePicker"></div>

			<label class="thisLabel" for="date" >Week Ending:</label><br>
			<input listFieldName="Week" class="inputClass" id="weekEnding" isDate="yes" validate="validDate" placeholder="Enter Week Ending Date" />
			
			<center>
			<table>
			
			<tr><td>Project</td><td>Mon</td><td>Tues</td><td>Wed</td><td>Thur</td><td>Fri</td><td></tr>
			<tr id="repeatingRow" data-Forms7Repeatable="Y">
				<td><select id="projects" class="inputSelectSmall"></select></td>
				<td><input class="inputClassSmall hours" id="mon" validate="validNumber" onkeyup="SumHours();"/></td>
				<td><input class="inputClassSmall hours" id="tues" onkeyup="SumHours();"/></td>
				<td><input class="inputClassSmall hours" id="wed" onkeyup="SumHours();"/></td>
				<td><input class="inputClassSmall hours" id="thurs" onkeyup="SumHours();"/></td>
				<td><input class="inputClassSmall hours" id="fri" onkeyup="SumHours();"/></td>
			</tr>
			<tr>
				<td colspan="6"><a href="#" onclick="$().Forms7Repeat('repeatingRow');">Add Row</a></td>
			</tr>
				
			<tr>
				<td colspan="4"  align="right"><label class="thisLabel">TOTAL:</label></td><td colspan="2"><span id="Total"></span></td><td></td>
			</tr>
			</table>
			</center>
			<input class="buttonClass" type="button" onclick="SubmitForm();" value="Add/Update Time Entry" />

			
		</fieldset>
</div>
