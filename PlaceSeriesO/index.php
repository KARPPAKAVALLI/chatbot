<!DOCTYPE html>
<html>
<head>
	<link rel="icon" href="favicon\android-chrome-192x192.png">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Comaptible" content="IE=edge">
	<title>PLACESERIES'O</title>
	<meta name="desciption" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="script.js"></script>
	<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
	<script>
		$(window).on('scroll', function(){
  			if($(window).scrollTop()){
  			  $('nav').addClass('black');
 			 }else {
 		   $('nav').removeClass('black');
 		 }
		})
	</script>
</head>
<body>
<!-- Navigation Bar -->
	<header id="header">
		<nav>
			<div class="logo"><img src="logo\logo1.JPG" alt="logo"></div>
			<ul>
				<li><a  href=""><b>HOME</b></a></li>
				<li><a  href="F:\Placeseries'o Code\LearnEd_E-learning_Website-master\quiz\Aptitude\index.html"><b>QUIZ</b></a></li>
				<li><a  href="#services_section"><b>SERVICES</b></a></li>
				<li><a  href="#contactus_section"><b>CONTACT</b></a></li>
			</ul>
			<!--<div class="srch"><input type="text" class="search" placeholder="Search here..."><img src="images/icon/search.png" alt="search" onclick=slide()></div>-->
			<a class="get-started" href="login.html">Get Started</a>
			<img src="images/icon/menu.png" class="menu" onclick="sideMenu(0)" alt="menu">
		</nav>
		<div class="head-container">
			<div class="quote">
				<p style="font-family: Arial; font-style: italic;">Excellence is a continuous process & not an accident.</p>
				<h3><em>- ‎Dr. A. P. J. Abdul Kalam</em></h3>
			</div>
			<div class="svg-image">
				<img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" alt="svg">
			</div>
		</div>
		<div class="side-menu" id="side-menu">
			<div class="close" onclick="sideMenu(1)"><img src="images/icon/close.png" alt=""></div>
			<div class="user">
				<img src="images/creator/roshan.jpeg" alt="Username">
			</div>
			<!--<ul>
				<li><a href="#about_section">About</a></li>
				<li><a href="#portfolio_section">Portfolio</a></li>
				<li><a href="#services_section">Services</a></li>
				<li><a href="#contactus_section">Contact</a></li>
				<li><a href="#feedBACK">Feedback</a></li>
			</ul>-->
		</div>
	</header>



<!-- SERVICES -->
	<div class="service-swipe">
		<div class="diffSection" id="services_section">
		<center><p style="font-size: 50px; padding: 100px; padding-bottom: 40px; color: #fff;"><em>Our Services</em></p></center>
		</div>
		<!--<a href="subjects/computer_courses.html"><div class="s-card"><img src="images/icon/computer-courses.png"><p>Programming Materials</p></div></a> <!--subjects/computer_courses.html-->
		<a href="subjects/computer_courses.html#data"><div class="s-card"><img src="images/icon/q1.png"><p><b>QUANTITATIVE APTITUDE</b></p></div></a> <!--"#contactus_section-->
		<a href="subjects/computer_courses.html#java"><div class="s-card"><img src="images/icon/brainbooster.png"><p><b>JAVA</b></p></div></a> <!--subjects/jee.html-->
		<a href="subjects/computer_courses.html#c++"><div class="s-card"><img src="images/icon/online-tutorials.png"><p><b>C++</b></p></div></a>
		<a href="subjects/computer_courses.html#python"><div class="s-card"><img src="images/icon/papers.jpg"><p><b>PYTHON</b></p></div></a> <!--subjects/jee.html#sample_papers-->
		<a href="subjects/computer_courses.html#data"><div class="s-card"><img src="images/icon/p3.png"><p><b>DATA STRUCTURES & ALGORITHM</b></p></div></a>
		<!--<a href="subjects/computer_courses.html#algo"><div class="s-card"><img src="images/icon/discussion.png"><p>Algorithm</p></div></a> <!--#contactus_section-->
		<!--<a href="subjects/computer_courses.html#data"><div class="s-card"><img src="images/icon/q1.png"><p>APTITUDE</p></div></a> <!--subjects/quiz.html-->
		<!--<a href="subjects/computer_courses.html#data"><div class="s-card"><img src="images/icon/help.png"><p>QUANTITATIVE APTITUDE</p></div></a> <!--"#contactus_section-->
	</div>


<!-- CONTACT US -->
<div class="diffSection" id="contactus_section">
    <center>
        <h1>Contact Us</h1>
    </center>
    <div class="csec"></div>
    <div class="back-contact">
        <div class="cc">
            <form action="mailto:sit20it031@sairamtap.edu.in" method="post" enctype="text/plain">
                <div class="form-group">
                    <label for="first-name">First Name <span class="imp">*</span></label>
                    <input type="text" id="first-name" name="first-name" required="required">
                </div>
                <div class="form-group">
                    <label for="last-name">Last Name <span class="imp">*</span></label>
                    <input type="text" id="last-name" name="last-name" required="required">
                </div>
                <div class="form-group">
                    <label for="email">Email <span class="imp">*</span></label>
                    <input type="email" id="email" name="email" required="required">
                </div>
                <div class="form-group">
                    <label for="message">Message <span class="imp">*</span></label>
                    <textarea id="message" name="message" required="required"></textarea>
                </div>
                <div class="form-group">
                    <label for="additional-details">Additional Details</label>
                    <textarea id="additional-details" name="additional-details"></textarea>
                </div>
                <button type="submit" id="csubmit"><b>Send Message</b></button>
            </form>
        </div>
    </div>
</div>

  

<!-- FEEDBACK 
<div class="feedback-section">
	<div class="title">
		<h2><b>Give Us Your Feedback</b></h2>
		<p>Help us improve by sharing your feedback with us</p>
	</div>

	<div class="feedback-form">
		<form action="mailto:roshank9419@gmail.com" method="post" enctype="text/plain">
			<div class="form-group">
				<label for="name">Your Name</label>
				<input type="text" id="name" name="name" class="form-control" required>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" class="form-control" required>
			</div>
			<div class="form-group">
				<label for="message">Message</label>
				<textarea id="message" name="message" class="form-control" rows="5" required></textarea>
			</div>
			<div class="form-group">
				<button type="submit" class="btn">Send Message</button>
			</div>
		</form>
	</div>
</div>-->




<!-- FOOTER -->
	<footer>
		<div class="footer-container">
			<div class="left-col">
				<img src="logo\logo1.JPG" style="width: 200px;">
				<div class="logo"></div>
				<div class="social-media">
					<a href="#"><img src="images/icon\fb.png"></a>
					<a href="#"><img src="images/icon\insta.png"></a>
					<a href="#"><img src="images/icon\tt.png"></a>
					<a href="#"><img src="images/icon\ytube.png"></a>
					<a href="#"><img src="images/icon\linkedin.png"></a>
				</div><br><br>
				<p class="rights-text"></p>
				<br><p><img src="images/icon/location.png">Chennai</p><br>
				<p><img src="images/icon/phone.png"> +91-00-00-000-000<br><img src="images/icon/mail.png">xyz@gmail.com</p>
			</div>
		</div>
	</footer>

</body>
</html>
