# mui-data-table

> Dynamic tables for ReactJS.

[![NPM](https://img.shields.io/npm/v/data-table.svg)](https://www.npmjs.com/package/data-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mui3-data-table
```

## Usage

```jsx
import React, { Component } from "react";

import DataTable from "mui-data-table";

class Example extends Component {
  render() {
    const columns = ["Year", "Make", "Model"];

    const data = [
      { Year: 1967, Make: "Pontiac", Model: "Firebird" },
      { Year: 1965, Make: "Pontiac", Model: "GTO" },
      { Year: 1970, Make: "Plymouth", Model: "Barracuda" }
    ];

    return <DataTable columns={columns} data={data} />;
  }
}
```

## License

MIT © [Jeremy Plack](https://github.com/stlouisweb)
