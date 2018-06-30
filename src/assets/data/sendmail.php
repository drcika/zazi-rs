<?php
// Change this with your blog name and email address
$the_blogname   = 'Email poslat sa sajta';
$the_myemail 	= 'zazi@zazi.rs';

if(isset($_POST['email'])){
		error_reporting(0);	
		$errorC = false;

		$the_name 		= $_POST['name'];
		$the_email 		= $_POST['email'];
		$the_message 	= $_POST['message'];
		
		$date = date ("l, F jS, Y"); 
		$time = date ("h:i A"); 
		
		//added fields that are not set explicit like the once above are combined and added before the actual message
		$already_used = array('email','name','message','phone','fax','company','website','myblogname','tempcode','temp_url','ajax');
		$attach = '';
		
		foreach ($_POST as $key => $field)
		{
			if(!in_array($key,$already_used))
			{
				$attach.= $key.": ".$field."<br /> \n";
			}
		}
		$attach.= "<br /> \n";
		
		if(!checkmymail($the_email))
		{
			$errorC = true;
			$the_emailclass = "error";
		}else{
			$the_emailclass = "valid";
			}
		
		if($the_message == "")
		{
			$errorC = true;
			$the_messageclass = "error";
		}else{
			$the_messageclass = "valid";
			}
		
		if($errorC == false)
		{ 	
			$to      =  $the_myemail;
			$subject = "" . $the_blogname;
			$header .= 'From:'. $the_email  . " \r\n";
			$message1 = nl2br($the_message);

			if(!empty($the_name)) 		$the_name 		= "Name:  	$the_name ";
			if(!empty($the_email)) 	$the_email 	= "Email: $the_email ";
			
			$message = "$date at $time.\r\n $the_name \r\n Message:$message1";
			
			if(@mail($to,$subject,$message,$header)) $send = true; else $send = false;
			
			if(isset($_POST['ajax'])){
			
			}
		}
		
}
	
	
function checkmymail($mailadresse){
	$email_flag=preg_match("!^\w[\w|\.|\-]+@\w[\w|\.|\-]+\.[a-zA-Z]{2,4}$!",$mailadresse);
	return $email_flag;
}

?>