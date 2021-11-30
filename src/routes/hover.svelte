<script>
	import { Button} from 'sveltestrap';

	const animals = ['Dog', 'Bird', 'Cat', 'Mouse', 'Horse'];
	let clicked;

	function handleClick(e) {
		clicked = `${e.target.id}`;
	}
</script>
<style>
    .dropbtn {
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        padding: 0;
        z-index: 1;
    }

    .dropdown-content div {
        cursor: pointer;
        width: 100%;
        padding: 6px 0 6px 0;
    }

    .dropdown-content div:hover {
        background-color: #ddd;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    #result {
        text-align: center;
    }

		.clicked {
				font-weight: bolder;
				text-decoration: underline;
		}
</style>

<h1>Hover</h1>
<p id='result'>{clicked ? 'You last clicked the' : ''} <span class='clicked'>{clicked ? clicked : ''}</span></p>
<div class='row dropdown'>
	<Button class='dropbtn'>Hover me</Button>
	<div class='dropdown-content'>
		{#each animals as animal}
			<div id={animal} on:click={handleClick}>{animal}</div>
		{/each}
	</div>
</div>
