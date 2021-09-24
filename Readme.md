###### **Tr1pp Coding Challenge**

####Problem Statement
- Create a simple API Gateway called REQUEST_ROUTER 
 
####Solution Approach
- I created a route config in util directory to define the services routes and the proxy
- use _http-proxy-middleware_ package to process the proxy reroute
- [SEARCH Service](https://github.com/ismummy/search_service) is served on /search
`https://tr1pp-gateway.herokuapp.com/search`
- [LOGGER Service](https://github.com/ismummy/log_service) is served on /logger
`https://tr1pp-gateway.herokuapp.com/logger`
 
####To run
- Clone the repo
- Run composer install
- Make a copy of .env from .env.copy
- Start the server npm run dev
