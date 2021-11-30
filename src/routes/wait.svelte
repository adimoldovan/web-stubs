<script>
	import { Button, Col, Row } from 'sveltestrap';

	let theAnswer;

	function calculateTheAnswer() {
		theAnswer = 'Calculating...';
		let aWhile = Math.floor(Math.random() * 9000) + 3000;
		setTimeout(showAnswer, aWhile);
	}

	function showAnswer() {
		theAnswer = 42;
	}
</script>
<style>
	.answer {
			font-weight: bold;
			font-size: 2rem;
	}
</style>

<h1>Wait</h1>
<Row>
	<Col>
		<p class='answer'>{theAnswer ? theAnswer : ''}</p>
		<Button id='answer-trigger' on:click={calculateTheAnswer}>Give me the Answer</Button>
	</Col>
</Row>
