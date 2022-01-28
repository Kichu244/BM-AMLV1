FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Kichu244/BM-AMLV1.git /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Kichu244/html.git

CMD ["node", "bot.js"]
