ARG VARIANT=12
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

# Install tslint, typescript. eslint is installed by javascript image
ARG USERNAME=node
ARG NGVERSION=9.1.12

RUN sudo -u ${USERNAME} npm install -g npm
RUN sudo -u ${USERNAME} npm install -g tslint typescript @angular/cli@${NGVERSION}
RUN sudo -u ${USERNAME} npm install -g azure-functions-core-tools@3 --unsafe-perm true