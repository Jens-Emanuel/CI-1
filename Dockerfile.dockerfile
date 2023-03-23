FROM cypress/included:12.8.1

WORKDIR /testapp

COPY ./cypress .cypress
COPY ./cypress.json ./cypress.json

RUN npm i & npx cypress

