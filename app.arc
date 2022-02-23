@app
begin-app

@static

@http
get /api
post /setEstudiante

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
