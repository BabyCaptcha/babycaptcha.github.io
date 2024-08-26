# Getting Started

## Basic Usage

Initialize the library in your application:

```csharp
using YourLibraryNamespace;

var captchaService = new CaptchaService(options => {
    options.SiteKey = "your-site-key";
    options.SecretKey = "your-secret-key";
});
