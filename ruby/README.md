# Emoji Decorator API - Ruby Gem

Emoji Decorator inserts relevant emojis into plain text strings. Submit any sentence or passage to receive the complete string decorated with fitting emojis.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_emojidecorator'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_emojidecorator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_emojidecorator'

# Initialize the client
client = APIVerve::Emojidecorator::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ text: "I am so excited to go to the lake and swim" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "I am so excited to go to the lake and swim" })
  puts response["data"]
rescue APIVerve::Emojidecorator::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Emojidecorator::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Emojidecorator::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "decorated": "I am so excited 🥂 to go 😄🙌🏽 to the lake 🤘🏻🇺🇸 and swim 🏊"
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/emojidecorator?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/emojidecorator?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/emojidecorator?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
