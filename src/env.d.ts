interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_KEY: string;
  readonly PUBLIC_BCA: string;
  readonly PUBLIC_GOPAY: string;
  readonly PUBLIC_DUIDNOW: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
