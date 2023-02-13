# Discord Bot
This is a sample Discord bot made with Node.js. It was created with the goal of providing a solid foundation for developing other Discord bots.

## Installation
To install and use this bot, you will need to have [Node.js](https://nodejs.org/) installed on your machine. In addition, you will need a [Discord](https://discord.com/) account and a bot application registered on the [Discord Developer Portal](https://discord.com/developers/applications).


You only need 3 things on your local machine: `git`, `docker` and `make`

### Install Docker
Follow the installation steps for your system.

	
<summary>Linux</summary>
	
1. Install docker

	* Install Docker on [Debian](https://docs.docker.com/engine/installation/linux/docker-ce/debian/)
	* Install Docker on [Ubuntu](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)
	* Install Docker on [CentOS](https://docs.docker.com/engine/installation/linux/docker-ce/centos/)

2. Install Docker Compose
	*  [Install Compose](https://docs.docker.com/compose/install/)

3. Configure permissions
	
	* [Manage Docker as a non-root user](https://docs.docker.com/install/linux/linux-postinstall/)


## Install Make
Installing the make command on linux

```
sudo apt-get update 
```

```
sudo apt-get install -y make
```

You can install make by downloading the build-essential package, as follows 
```
sudo apt install build-essential
```


## App Install
Clone this repo
```
git clone https://github.com/jamacio/bot-discord.git
```
---
Go to the directory and copy the configuration example
```
cd bot-discord
```
To get the information go to: [Discord.js](https://discord.com/developers/applications)
```
cp config.json.sample config.json
```
you need to add access permissions to the app, replace {{client_id}} with the CLIENT ID of your bot

```
https://discord.com/api/oauth2/authorize?client_id={{client_id}}&permissions=2147486720&scope=bot%20applications.commands
```

---
After running the build command
```
make build
```

## Usage
Start Application
```
make up
```
---
Stop Application
```
make stop
```
---
Watch Application
```
make watch
```

## Commands

- `/ping` - Display the bot's latency.
- `/git` - Remind git commands
- `/moeda` - Currency Quotation API

## Development

This project was developed using [Discord.js](https://discord.js.org/#/) as the main library.

## To create a bot go to: [applications](https://discord.com/developers/applications)
Create an application account: Go to the Discord Developers site and create a new application account.

Add a new bot to the app: Click "Create App" and then click "Create Bot".

Configure the bot: Add a name and profile picture for your bot, and configure other details if you wish.

Grant permissions: Grant the necessary permissions to your bot so that it can function properly.

Add the bot to your server: Click the "Invite Bot" link in the "OAuth2" section and select the server where you want to add the bot.

Run the bot: After coding and testing the bot, you can run it on your local machine or on a remote machine, such as a VPS.