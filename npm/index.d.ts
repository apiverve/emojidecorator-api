declare module '@apiverve/emojidecorator' {
  export interface emojidecoratorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface emojidecoratorResponse {
    status: string;
    error: string | null;
    data: EmojiDecoratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface EmojiDecoratorData {
      decorated: null | string;
  }

  export default class emojidecoratorWrapper {
    constructor(options: emojidecoratorOptions);

    execute(callback: (error: any, data: emojidecoratorResponse | null) => void): Promise<emojidecoratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: emojidecoratorResponse | null) => void): Promise<emojidecoratorResponse>;
    execute(query?: Record<string, any>): Promise<emojidecoratorResponse>;
  }
}
