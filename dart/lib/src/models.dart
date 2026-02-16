/// Response models for the Emoji Decorator API.

/// API Response wrapper.
class EmojidecoratorResponse {
  final String status;
  final dynamic error;
  final EmojidecoratorData? data;

  EmojidecoratorResponse({
    required this.status,
    this.error,
    this.data,
  });

  factory EmojidecoratorResponse.fromJson(Map<String, dynamic> json) => EmojidecoratorResponse(
    status: json['status'] as String? ?? '',
    error: json['error'],
    data: json['data'] != null ? EmojidecoratorData.fromJson(json['data']) : null,
  );

  Map<String, dynamic> toJson() => {
    'status': status,
    if (error != null) 'error': error,
    if (data != null) 'data': data,
  };
}

/// Response data for the Emoji Decorator API.

class EmojidecoratorData {
  String? decorated;

  EmojidecoratorData({
    this.decorated,
  });

  factory EmojidecoratorData.fromJson(Map<String, dynamic> json) => EmojidecoratorData(
      decorated: json['decorated'],
    );
}

class EmojidecoratorRequest {
  String text;

  EmojidecoratorRequest({
    required this.text,
  });

  Map<String, dynamic> toJson() => {
      'text': text,
    };
}
