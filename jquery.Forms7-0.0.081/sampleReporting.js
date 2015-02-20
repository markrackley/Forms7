<link  type="text/css" rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/start/jquery-ui.css" /> 
<!-- Reference jQuery on the Google CDN --> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> 
<!-- Reference jQueryUI on the Google CDN --> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script> 
<!-- Reference SPServices on cdnjs (Cloudflare) --> 
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/0.7.2/jquery.SPServices-0.7.2.min.js"></script> 

<script type="text/javascript" src="http://www.sharepointhillbilly.com/demos/SiteAssets/jquery.Forms7-0.0.081.js"></script>

<script type="text/javascript" src="//cdn.datatables.net/1.10.0/js/jquery.dataTables.js"></script>
<link  type="text/css" rel="stylesheet" href="//cdn.datatables.net/1.10.0/css/jquery.dataTables.css" /> 


<script type="text/javascript">

	$(document).ready(function() {
	     
		//Create a List View of Forms 7 data using DataTables.
		//#reportTable is a Table element that will contain the report
		//ensure all fields reported against contain data or DataTables
		//will throw an error. 
	     $("#reportingTable").Forms7Reporting({
			listName: "messages", //list to report against
	     	sourceData: ["name","email","age"], //id's of the fields to report on
	     	columnDisplay: ["Contact Name","Email Address","Age"] //column header for fields in "sourceData"
	     });
	 });
	 
</script>

<table id="reportingTable" class="display">