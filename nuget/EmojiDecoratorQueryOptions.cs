using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.EmojiDecorator
{
    /// <summary>
    /// Query options for the Emoji Decorator API
    /// </summary>
    public class EmojiDecoratorQueryOptions
    {
        /// <summary>
        /// The text you want decorated with emojis
        /// Example: hello world
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
