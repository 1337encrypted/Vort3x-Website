#!/bin/bash

# Loop from level 1 to 15
for level in {1..15}; do
    # Define the HTML content for each level
    html_content="<html>
<head>
    <title>Level $level</title>
</head>
<body>
    <h1>Level $level</h1>
    <p>This is the content for Level $level.</p>
</body>
</html>"

    # Create the HTML file for the current level
    echo "$html_content" > "level${level}.html"
done

echo "HTML files for levels 1 to 15 have been created."
