PUBLIC_URL=https://web-stubs.herokuapp.com npm run build
cd build
echo '{}' > composer.json
echo '<?php include_once("home.html"); ?>' > index.php
mv index.html home.html
