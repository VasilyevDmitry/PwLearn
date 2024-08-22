FROM mcr.microsoft.com/playwright:v1.45.2-jammy

RUN mkdir e2e

WORKDIR /e2e

COPY . .

RUN npm ci 

CMD [ "npm", "run", "test" ]