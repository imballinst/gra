## gra

Get remote address from a URL.

```bash
curl --request POST \
  --url https://gra-get-remote-address.herokuapp.com/ \
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
