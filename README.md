# Parking Boss Component Library

A component library for Parking Boss applications.

## Getting Started Developing

* Clone the repo.
* Run `npm install`
* Make changes
* Commit the changes
* To release, execute `npm version (major|minor|patch)` We use SemVer.
  * Major: Breaking Changes
  * Minor: Api Changes
  * Patch: Bug fixes

To keep things simple we're keeping a totally flat src folder.

### Modifying existing components

Just make the change.

### Adding a new component

* Add the file
* Make sure to export it in `index.js`

### Deleting a component

* Delete the file
* remove the export from `index.js`

### Renaming a component

* Rename the file
* Update the export in `index.js`

## Consuming this library

* CLI: `npm install @parkingboss/components`
* In code: `import { Component1, Component2 } from '@parkingboss/components'`