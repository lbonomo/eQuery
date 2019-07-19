## API Blueprint
We use [API Blueprint](https://apiblueprint.org/) to describe the API
and some [tools](https://apiblueprint.org/tools.html)
to test and make the documentation of this
also we use two Atom plugin to edit and preview the .apib files

## Atom plugins

[language-api-blueprint](https://atom.io/packages/language-api-blueprint)

[api-blueprint-preview](https://atom.io/packages/api-blueprint-preview)<br>
`ctrl-shift-a` to preview

## Aglio
We use [Aglio](https://github.com/danielgtaylor/aglio#readme) to make statis .html file

```shell
npm install -g aglio
aglio -i ./api-description.apib -o ./api-description.html
```

## Dredd
[Dredd](https://dredd.org/) is the tool we use to test the API

```shell
dredd ./api-description.apib http://127.0.0.1:5555 --dry-run
```

<!-- [Articulo](https://www.adictosaltrabajo.com/2015/07/02/apis-rest-documentadas-y-probadas-con-api-blueprint-y-dredd/) -->
