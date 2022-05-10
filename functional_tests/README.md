## Webapp Functional Tests

#### Setup

Ensure the webapp is built:

    deno compile --unstable ../mod.ts

Install requirements:

    pip3 install -r pip-requirements.txt

Install `geckodriver` from https://github.com/mozilla/geckodriver/releases and ensure the executable is in your _PATH_. 

#### Testing

Run the functional tests:

    behave
