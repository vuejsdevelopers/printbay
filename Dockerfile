FROM ubuntu:20.04

SHELL ["/bin/bash", "-c"]

ARG UNAME=user
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID $UNAME && \
    useradd -m -u $UID -g $GID -s /bin/bash $UNAME

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get install -y wget xz-utils gnupg libdbusmenu-gtk3-4 libappindicator3-1 libgtk-3-0 libxss1 xdg-utils fonts-liberation libgbm1 && \
    cd /opt && \
    wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz && \
    tar xf node-v10.15.3-linux-x64.tar.xz && \
    ln -s -f /opt/node-v10.15.3-linux-x64/bin/node /usr/local/bin/node && \
    ln -s -f /opt/node-v10.15.3-linux-x64/bin/node-waf /usr/local/bin/node-waf && \
    ln -s -f /opt/node-v10.15.3-linux-x64/bin/npm /usr/local/bin/npm && \
    npm install -g @vue/cli@3.5.0 && \
    echo "export PATH=\"$PATH:/opt/node-v10.15.3-linux-x64/bin\"" >> /home/$UNAME/.bashrc && \
    curl https://cli-assets.heroku.com/install-ubuntu.sh | sh && \
    apt install -y openjdk-11-jdk && \
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5 && \
    echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/3.6 main" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list && \
    apt-get update && \
    apt-get install -y mongodb-org=3.6.11 mongodb-org-server=3.6.11 mongodb-org-shell=3.6.11 mongodb-org-mongos=3.6.11 mongodb-org-tools=3.6.11 && \
    echo "mongodb-org hold" | dpkg --set-selections && \
    echo "mongodb-org-server hold" | dpkg --set-selections && \
    echo "mongodb-org-shell hold" | dpkg --set-selections && \
    echo "mongodb-org-mongos hold" | dpkg --set-selections && \
    echo "mongodb-org-tools hold" | dpkg --set-selections && \
    sed -i 's/bindIp: 127.0.0.1/bindIp: 0.0.0.0/g' /etc/mongod.conf && \
    chown -R $UNAME:$UNAME /var/log/mongodb && \
    chown -R $UNAME:$UNAME /var/lib/mongodb && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -P /tmp/ && \
    dpkg -i /tmp/google-chrome*.deb

ENTRYPOINT [ "/bin/bash", "-c", "mongod --fork -f /etc/mongod.conf && /bin/bash" ]

USER ${UNAME}
