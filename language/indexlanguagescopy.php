@model List<Language>

<body class="themeblackgoldveryback">
	<div style="background-color: rgb(255 234 49)">
		<div class="themeblackgoldback">
			<nav class="topnavbar" style="background-color: rgb(29 29 29)"><h1 onclick="window.location.href='../index.html'">Jazmer World Music</h1><ul><li onclick="window.location.href='indexlanguages.html'">Language</li><li onclick="window.location.href='../survival/indexsurvival.html'">Survival</li><li>Music</li><li onclick="window.location.href='../apps/indexapps.html'">Apps</li></ul></nav>
			<div class="topbackbutton" onclick="history.back()">Back</div>
		
				<div id="navflex">
					<h1>Dictionary</h1>
					<div class="bigbuttons"><button onclick="window.location.href='dictionary/dictionary.html'">Languages Dictionary</button></div>

				<h1>---------- Languagessss ----------</h1>
				<div id="langdiv">
					@foreach (Language obj in Model){

					}

				</div>

			<footer>
				<p>Copyright &copy; 2023 - Conner Jasmer</p>
			</footer>
		</div>
	</div>
</body>
</html>