FROM ubuntu:18.04

RUN apt-get update && \
  # install system dependencies
  apt-get install -yq gconf-service libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxss1 libxtst6 libappindicator1 libnss3 libasound2 libatk1.0-0 libc6 ca-certificates fonts-liberation lsb-release xdg-utils wget nodejs npm && \
  # install system dependencies
  rm -rf /var/lib/apt/lists/* && \
  apt autoremove -yq

RUN npm i -g react-snap yarn n && \
  n lts

CMD [ "bash", "-c", "'react-snap'" ]


