declare module '@apiverve/emojidecorator' {
  export interface emojidecoratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface emojidecoratorResponse {
    status: string;
    error: string | null;
    data: EmojiDecoratorData;
    code?: number;
  }


  interface EmojiDecoratorData {
      decorated: string;
  }

  export default class emojidecoratorWrapper {
    constructor(options: emojidecoratorOptions);

    execute(callback: (error: any, data: emojidecoratorResponse | null) => void): Promise<emojidecoratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: emojidecoratorResponse | null) => void): Promise<emojidecoratorResponse>;
    execute(query?: Record<string, any>): Promise<emojidecoratorResponse>;
  }
}
