const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
                color: #aa5712;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
                color: #592708;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
		</style>
	
	</head>
	
	<body>
		<div class="container">
			<a href="https://studynotion-edtech-project.vercel.app"><img class="logo"
					src="https://res.cloudinary.com/duu15ts5c/image/upload/v1709972585/GouravProject/assests/Screenshot_2024-03-09_135131_es3aic.png" alt="StudyNotion Logo"></a>
			<div class="message">OTP Verification Email</div>
			<div class="body">
				<p>Dear User,</p>
				<p>Welcome to our pack! 🐶🏠. To ensure you're part of our paw-some pack, we need to fetch your verification! Please type in the OTP sent to your doghouse's mailbox below:</p>
				<h2 class="highlight">${otp}</h2>
				<p>This OTP is valid for 5 minutes. If you haven't barked for this verification, simply wag your tail and ignore this message. Once verified, you'll dig into the treasure trove of features waiting for you in our doggy domain..</p>
			</div>
		</div>
	</body>
	
	</html>`;
};
module.exports = otpTemplate;