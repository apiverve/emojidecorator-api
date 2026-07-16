# Emoji Decorator API - PHP Package

Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.

## Installation

Install via Composer:

```bash
composer require apiverve/emojidecorator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Emojidecorator\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['text' => 'I am so excited to go to the lake and swim']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Emojidecorator\Client;
use APIVerve\Emojidecorator\Exceptions\APIException;
use APIVerve\Emojidecorator\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'I am so excited to go to the lake and swim']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/emojidecorator?utm_source=packagist&utm_medium=readme).

## Support

- Website: [https://apiverve.com/marketplace/emojidecorator?utm_source=php&utm_medium=readme](https://apiverve.com/marketplace/emojidecorator?utm_source=php&utm_medium=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
