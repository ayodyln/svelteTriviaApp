<div>
	<!-- Trivia Fetch Input -->
	<h2 class="text-2xl font-bold">Pick your Trivia</h2>
	<div class="divider m-0" />

	<form class="w-fit flex flex-col m-auto">
		<section>
			<label for="questions" class="form-control w-full max-w-xs label flex-col items-start">
				<span class="label-text">Amount of Questions</span>

				<input
					value="10"
					type="number"
					name="questions"
					id="questions"
					class="input input-bordered w-full" />
			</label>

			<label class="form-control w-full max-w-xs label flex-col items-start">
				<span class="label-text">Category</span>

				<select class="select select-bordered w-full ">
					<option value="any">Any Category</option>
					<option value="9">General Knowledge</option>
					<option value="10">Entertainment: Books</option>
					<option value="11">Entertainment: Film</option>
					<option value="12">Entertainment: Music</option>
					<option value="13">Entertainment: Musicals &amp; Theatres</option>
					<option value="14">Entertainment: Television</option>
					<option value="15">Entertainment: Video Games</option>
					<option value="16">Entertainment: Board Games</option>
					<option value="17">Science &amp; Nature</option>
					<option value="18">Science: Computers</option>
					<option value="19">Science: Mathematics</option>
					<option value="20">Mythology</option>
					<option value="21">Sports</option>
					<option value="22">Geography</option>
					<option value="23">History</option>
					<option value="24">Politics</option>
					<option value="25">Art</option>
					<option value="26">Celebrities</option>
					<option value="27">Animals</option>
					<option value="28">Vehicles</option>
					<option value="29">Entertainment: Comics</option>
					<option value="30">Science: Gadgets</option>
					<option value="31">Entertainment: Japanese Anime &amp; Manga</option>
					<option value="32">Entertainment: Cartoon &amp; Animations</option>
				</select>
			</label>

			<label class="form-control w-full max-w-xs label flex-col items-start">
				<span class="label-text">Difficulty</span>

				<select class="select select-bordered w-full ">
					<option value="any">Any Difficulty</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</label>

			<div class="form-control w-full max-w-xs label flex-col items-start">
				<label class="label cursor-pointer w-full">
					<span class="label-text">Multiple Choice Questions</span>
					<input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
				</label>

				<label class="label cursor-pointer w-full">
					<span class="label-text">True/False Questions</span>
					<input type="radio" name="radio-10" class="radio checked:bg-blue-500" />
				</label>
			</div>
		</section>

		<input class="btn btn-primary" type="submit" value="Start Trivia" />
	</form>
</div>
