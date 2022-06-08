## Webapp Functional Tests

#### Setup

Ensure the webapp is bundled:

    deno bundle ../mod.ts ../html/mod.bundle.js

Install requirements:

    pip3 install -r pip-requirements.txt

Install `geckodriver` from https://github.com/mozilla/geckodriver/releases and ensure the executable is in your _PATH_. 

#### Testing

Run the functional tests:

    behave

To run with logging output from the test steps (this is the best set of arguments I can find):

    behave --no-logcapture --no-color --logging-level=DEBUG 
