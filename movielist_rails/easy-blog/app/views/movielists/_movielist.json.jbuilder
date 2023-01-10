json.extract! movielist, :id, :name, :description, :director, :languagestring, :created_at, :updated_at
json.url movielist_url(movielist, format: :json)
