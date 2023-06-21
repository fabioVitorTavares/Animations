FROM node
COPY . . 
RUN npm install
RUN npm run build
RUN npm install http-server
ENV NODE_ENV production
EXPOSE 3000
CMD ["npx", "http-server", "dist"]