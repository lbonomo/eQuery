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
aglio -i ./api.apib -o ./api.html
```

### Snowboard (Aglio alternative)
[Snowboard](https://github.com/bukalapak/snowboard) have some interesting features.

```shell
snowboard mock api.apib
GET	200	/api/queries
POST	201	/api/queries
GET	200	/api/queries/{query_id}
PATCH	200	/api/queries/{query_id}
DELETE	200	/api/queries/{query_id}
GET	200	/api/queries/{query_id}/data
GET	200	/api/sql
GET	200	/
----------------------------------------------------------------
Mock server is ready. Use :8087
----------------------------------------------------------------
```



## Dredd
[Dredd](https://dredd.org/) is the tool we use to test the API

```shell
dredd ./api.apib http://127.0.0.1:5555 --dry-run
```

<!-- [Articulo](https://www.adictosaltrabajo.com/2015/07/02/apis-rest-documentadas-y-probadas-con-api-blueprint-y-dredd/) -->

## Config


```shell
npm install config
```
