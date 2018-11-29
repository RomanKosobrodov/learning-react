# Setting Up Development Environment

## Install curl
```bash
sudo apt install -y curl 
```

## Install Node.js
```bash
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install -y nodejs
```

## Install VS Code

Add Microsoft repositories:
```bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```
Install the code package
```bash
sudo apt install apt-transport-https
sudo apt update
sudo apt install code
```

## Clone source repository


## Install NPM dependencies
In the project directory (the one containing `package.json`) run:
```bash
npm install
```


## Configure VS Code
### Install Prettier formatter for Visual Studio Code.
Click on the Extensions icon (or Control + Shift + X) and search for "Prettier formatter for Visual Studio Code" by Esben Petersen.
Install the plugin.

Navigate to settings (File->Preferences->Settings), select 'Workspace Settings' and search for "format on save".
Enable 'Editor: Format On Save' settings.

### Install ESLint extension
Next, install "VS Code ESLint extension" by Dirk Baeumer
