export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          id: number;
          name: string;
          comment: string;
          attend: string;
          created_at: string;
        };
        Insert: {
          // id: number;
          name: string;
          comment: string;
          attend: string;
          // created_at: string;
        };
        Update: {
          id?: number;
          name: string;
          comment: string;
          attend: string;
          created_at?: string;
        };
      };
    };
  };
}
