import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = "https://joqqxqzhdhqhcmnbdnex.supabase.co"
const supabaseAnonKey = "sb_publishable_Vj7vzrM66ieR8Yx11CgfsQ_45Y1o35O"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
