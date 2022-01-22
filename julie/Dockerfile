FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Amal-ser/BM-AMLV1 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Kichu244/html

CMD ["node", "bot.js"]
