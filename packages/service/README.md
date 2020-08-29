# User service

## Architecture

The project was seeded with https://github.com/seanpmaxwell/express-generator-typescript and adapted to the current structure.

The approach is to modularize the project around domain terms.
DAOs, routes, tests etc. for a given part of the project are grouped in the relevant directory.

Each directory exports an `index.ts` file serving as the main point of integrating the module with the application.
The point of having this is to allow injecting dependencies and configuring modules from the top level.

For the purpose of this task there isn't much configuration happening, so this serves more as a demonstration of the train of thought.
