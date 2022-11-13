## gra

:warning: **This project was discontinued because Heroku no longer offers free plan. With that said, the same logic should be able to be applied and deployed in other platforms.**

Get the remote address of a URL.

```bash
curl --request POST \
  --url https://gra-get-remote-address.herokuapp.com/ip \
  --header 'Content-Type: application/json' \
  --data '{
	"url": "https://google.com"
}'
```

Response:

```json
{
  "data": {
    "ip": "172.217.12.238"
  }
}
```
