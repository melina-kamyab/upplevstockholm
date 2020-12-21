# Upplev Stockholm

A webshop filled with ways to experience what Stockholm has to offer. This project is for a group assignment at Medieinstitutet.

## Requirements

- git
- node
- sass
- gulp
- gulp-sass
- gulp-watch
- gulp-rename
- gulp-csso

##  Install & run

Clone the repo and install the dependencies before opening index.html:

```
git clone https://github.com/melina-kamyab/upplevstockholm.git
```

```
npm install
```

## Folder struture

```
index.html
├── assets
├── css
├── js
├── node_modules
│   └── modules
├── scss
│   └── variables
```

New files should be put in a corresponding folder. Use assets for files that do not have any corresponding folder.

## Naming conventions

HTML classes and ids should be using lowercase with hyphens when using multiple words:

```
<label class="menu-icon" for="menu-btn">
```

JS variables and function names use camelCase. PascalCase is used for class names.

Longer and describing variable names and functions are preferred, such as:

```
let cartItems;
```
or
```
changeProductAmount();
```