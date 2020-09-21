FROM lambci/lambda:build-nodejs12.x
COPY . .

RUN npm ci
RUN zip -9yr lambda.zip .

ENTRYPOINT [ "/usr/bin/true" ]
