# Emoji Decorator API - Dart/Flutter Client

Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.

[![pub package](https://img.shields.io/pub/v/apiverve_emojidecorator.svg)](https://pub.dev/packages/apiverve_emojidecorator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Emoji Decorator API](https://apiverve.com/marketplace/emojidecorator?utm_source=dart&utm_medium=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_emojidecorator: ^1.1.14
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_emojidecorator/apiverve_emojidecorator.dart';

void main() async {
  final client = EmojidecoratorClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'text': 'I am so excited to go to the lake and swim'
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "decorated": "I am so excited 📬 to go 🤛🏾 to the lake 🙏🏼🇺🇸 and swim 👙"
  }
}
```

## API Reference

- **API Home:** [Emoji Decorator API](https://apiverve.com/marketplace/emojidecorator?utm_source=dart&utm_medium=readme)
- **Documentation:** [docs.apiverve.com/ref/emojidecorator](https://docs.apiverve.com/ref/emojidecorator?utm_source=dart&utm_medium=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=readme)
