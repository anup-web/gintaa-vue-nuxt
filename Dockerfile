# FROM node:lts as builder
FROM node:16-alpine as builder

ARG PROFILE
ENV PROFILE ${PROFILE}

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --non-interactive \
  --production=false

RUN yarn build:$PROFILE

RUN rm -rf node_modules && \
  yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

# FROM node:lts
FROM node:16-alpine

ARG PROFILE
ENV PROFILE ${PROFILE}

WORKDIR /app

COPY --from=builder /app  .

EXPOSE 8080
ENV HOST=0.0.0.0
ENV PORT=8080

#RUN yarn start:$PROFILE
CMD ["sh", "-c", "yarn start:$PROFILE"]
#CMD [ "yarn", "start:$PROFILE" ]
# CMD "yarn start:$PROFILE"
