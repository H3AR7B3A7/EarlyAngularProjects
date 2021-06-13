# VoipExample

A very basic application that allows video conferencing.


## Tasks

- Create a new project
- Set up voip with WebRTC
- Make use of components / modules for re-usability where possible
- Make it look nice (with material design?)


## To run application

### Start the signaling server

- With node:
  - Set WS_ENDPOINT in data.service.ts to:  

        const WS_ENDPOINT = 'ws:localhost:8081'

  - Start signaling server  

        node .\server\signalling_server.js

- With Spring
  - Set WS_ENDPOINT in data.service.ts to:  

        export const WS_ENDPOINT = 'ws:localhost:8080/socket'

  - Start the signaling server  
  The spring implementation can be found [here](https://github.com/H3AR7B3A7/SignallingServer).
  Pull and run the spring project.

### Serve the application

    ng serve


---
*Work in progress...*
