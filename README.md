-----

[![Greenkeeper badge](https://badges.greenkeeper.io/wireapp/wire-web-api-client.svg)](https://greenkeeper.io/)

:warning: *THIS PROJECT IS NOT OFFICIALLY SUPPORTED! ALL CODE IN HERE IS
IN DEVELOPMENT AND LIKELY TO CHANGE WITHOUT WARNING. USE AT YOUR OWN
RISK.* :warning:

-----

# Wire

This repository is part of the source code of Wire. You can find more information at [wire.com](https://wire.com) or by contacting opensource@wire.com.

You can find the published source code at [github.com/wireapp](https://github.com/wireapp).

For licensing information, see the attached LICENSE file and the list of third-party licenses at [wire.com/legal/licenses/](https://wire.com/legal/licenses/).

## Wire API Client

Wire for Web's API client.

## Development

```bash
yarn install
yarn start
```

## Installation

```bash
yarn add @wireapp/api-client
```

## Usage

**Browser**

- [index.html](index.html)

**Node.js**

- [index.js](index.js)

## Execution

**Bash**

```bash
#!/bin/bash

EMAIL="name@email.com"
HANDLE="username"
PASSWORD="password"

node docs/index.js --e="$EMAIL" --p="$PASSWORD"
# or
node docs/index.js --h="$HANDLE" --p="$PASSWORD"
```

**Node**

```bash
npm run dist
node docs/index.js --e="name@email.com" --p="password"
```
