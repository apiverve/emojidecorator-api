# [Emoji Decorator API](https://apiverve.com/marketplace/emojidecorator?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)

Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.

The Emoji Decorator API provides a simple, reliable way to integrate emoji decorator functionality into your applications. Built for developers who need production-ready emoji decorator capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/emojidecorator?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/emojidecorator?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-POST-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/emojidecorator)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.EmojiDecorator)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-emojidecorator/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_emojidecorator)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/emojidecorator)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_emojidecorator)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callEmojiDecoratorAPI() {
    try {
        const requestBody = {
    "text": "I am so excited to go to the lake and swim"
};

        const response = await fetch('https://api.apiverve.com/v1/emojidecorator', {
            method: 'POST',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callEmojiDecoratorAPI();
```

### Using cURL

```bash
curl -X POST "https://api.apiverve.com/v1/emojidecorator" \
  -H "x-api-key: YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "I am so excited to go to the lake and swim"
}'
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/emojidecorator
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/emojidecorator) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.EmojiDecorator
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.EmojiDecorator) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-emojidecorator
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-emojidecorator/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_emojidecorator
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_emojidecorator) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/emojidecorator
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/emojidecorator) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_emojidecorator
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_emojidecorator) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:emojidecorator-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/emojidecorator-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Emoji Decorator API](https://apiverve.com/marketplace/emojidecorator?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/emojidecorator](https://docs.apiverve.com/ref/emojidecorator)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Emoji Decorator API is commonly used for:

- **Web Applications** - Add emoji decorator features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with emoji decorator capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the Emoji Decorator API:

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "decorated": "I am so excited 🥂 to go 😄🙌🏽 to the lake 🤘🏻🇺🇸 and swim 🏊"
  }
}
```

---

## Support & Community

- 🏠 **API Home**: [Emoji Decorator API](https://apiverve.com/marketplace/emojidecorator?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
